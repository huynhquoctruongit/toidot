"use client";
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useRef,
  useState,
} from "react";
import TabsTopic from "./tabs-topic";
import WordVocabulary from "./word-vocabulary";
import { ITopic } from "@/types/topic";
import ButtonSpotlight from "@/components/common/button-spotlight";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import useSWR from "swr";
import { IWord } from "@/types/word";
import { IWordAnswer } from "@/types/word-answer";
import { URLparamsToObject } from "@/middleware/helper";
import { useBoolean } from "@/app/hook/use-boolean";
import ModalChooseDoing from "../modal-choose/modal-choose-doing";

type IProps = {
  topics: ITopic[];
  idCollection: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

//------------------------------------------
export default function VocabularyChoose({
  topics,
  idCollection,
  page,
  setPage,
}: IProps) {
  const pathname = usePathname();

  const paramsSearch = useSearchParams();

  const practice = useBoolean();

  const convertParamToQuery = (params: any) => {
    const payload = {
      _and: [
        { topic: { id: { _eq: params.id } } },
        { topic: { collection: { id: { _eq: idCollection } } } },
      ],
    } as any;
    return payload;
  };

  const filters = {
    _and: [{ topic: { collection: { id: { _eq: idCollection } } } }],
  };

  const data: any = useRef(null);

  const limit = 20;

  const urlParams: any = useSearchParams();

  const offset = page * limit;

  const payload = URLparamsToObject(urlParams);

  const params = convertParamToQuery(payload);

  const sort = payload.sort || "id";

  const { data: words, isLoading } = useSWR(
    `/items/word?fields=*.*&offset=${offset}&limit=${limit}&meta=filter_count&filter=` +
      (payload.id ? JSON.stringify(params) : JSON.stringify(filters)) +
      (sort ? "&sort=" + sort : ""),
  );
  if (words) data.current = words.data;
  const filter_count = (words as any)?.meta?.filter_count || 0;
  const pages: number = Math.ceil(filter_count / limit);
  const length = words?.data.length || filter_count;

  const [practiceWord, setPracticeWord] = useState([] as IWord[]);

  function getRandomUniqueElements(arr: any, numElements: any) {
    const result = [];
    const tempArray = [...arr];
    for (let i = 0; i < numElements; i++) {
      const randomIndex = Math.floor(Math.random() * tempArray.length);
      const randomElement = tempArray.splice(randomIndex, 1)[0];
      result.push(randomElement);
    }

    return result;
  }

  const filtersVocabAnwer = {
    _and: [{ correct: { _eq: true } }],
  };

  const { data: vocabAnwer, mutate } = useSWR(
    `/items/vocab_anwer?fields=*.*&filter=${JSON.stringify(filtersVocabAnwer)} `,
  );

  const filteredWords = words?.data.filter(
    (word: IWord) =>
      !vocabAnwer?.data.some(
        (answer: IWordAnswer) => answer.word.id === word.id,
      ),
  );

  const onClickPractice = useCallback(() => {
    const practiceDoingWord = getRandomUniqueElements(filteredWords, 3);
    setPracticeWord(practiceDoingWord);
    practice.onTrue();
  }, [filteredWords, practice, setPracticeWord]);

  const nextQuestion = useCallback(() => {
    setPracticeWord([]);
    practice.onFalse();
    setTimeout(() => {
      const practiceDoingWord = getRandomUniqueElements(filteredWords, 3);
      setPracticeWord(practiceDoingWord);
      practice.onTrue();
    }, 500);
  }, [filteredWords, practice, setPracticeWord]);

  return (
    <>
      <div className="selection-choose flex max-w-full flex-wrap gap-4">
        <Link href={pathname}>
          <ButtonSpotlight
            pill="roundedFull"
            spaceSide="space_3"
            className={`flex items-center border ${pathname === pathname + paramsSearch.toString() ? "gradient-secondary text-white" : "bg-white"}`}
          >
            <div className="text-sm">Tất cả</div>
          </ButtonSpotlight>
        </Link>

        {topics.map((topic) => (
          <TabsTopic key={topic.id} topic={topic} setPage={setPage} />
        ))}
      </div>

      <div className="table-learning grid w-full gap-4 rounded-[8px] border bg-white p-6">
        <WordVocabulary
          length={length}
          pages={pages}
          page={page}
          setPage={setPage}
          words={words?.data}
          limit={limit}
          isLoading={isLoading}
          onClick={onClickPractice}
        />
      </div>

      <ModalChooseDoing
        isOpen={practice.value}
        setOpen={() => {
          practice.onFalse(), mutate();
        }}
        word={practiceWord[0]}
        practiceWord={practiceWord}
        onClick={nextQuestion}
      />
    </>
  );
}
