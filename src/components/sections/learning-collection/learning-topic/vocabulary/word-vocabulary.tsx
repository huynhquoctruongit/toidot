import React, { useCallback, useRef, useState } from "react";
import { IWord } from "@/types/word";
import ModalChooseDetail from "../modal-choose/modal-choose-detail";
import { useBoolean } from "@/app/hook/use-boolean";
import { useSearchParams } from "next/navigation";
import { URLparamsToObject } from "@/middleware/helper";
import useSWR from "swr";

import HeadVocabulary from "./head-vocabulary";
import Panigation from "@/components/common/panigation";
import ItemWord from "./item-word";
import ModalChooseDoing from "../modal-choose/modal-choose-doing";
import { IWordAnswer } from "@/types/word-answer";

type IProps = {
  idCollection: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function WordVocabulary({
  idCollection,
  page,
  setPage,
}: IProps) {
  const activeItemWord = useBoolean();

  const practice = useBoolean();

  const [idItemWord, setIdItemWord] = useState<number | null>();

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

  const { data: words } = useSWR(
    `/items/word?fields=*.*&offset=${offset}&limit=${limit}&meta=filter_count&filter=` +
      (payload.id ? JSON.stringify(params) : JSON.stringify(filters)) +
      (sort ? "&sort=" + sort : ""),
  );
  if (words) data.current = words.data;
  const filter_count = (words as any)?.meta?.filter_count || 0;
  const pages: number = Math.ceil(filter_count / limit);
  const length = words?.data.length;

  const hanldeShowModalItemWord = (id: number) => {
    activeItemWord.onTrue();
    setIdItemWord(id);
  };

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
      <HeadVocabulary
        words={filter_count ? filter_count : length}
        onClick={onClickPractice}
      />
      <div className="learning-bottom grid grid-cols-4 gap-6">
        {words &&
          (words.data || []).map((word: IWord, index: number) => (
            <div key={word.id}>
              <ItemWord
                word={word}
                onClick={hanldeShowModalItemWord}
                index={index}
              />

              {idItemWord === index && (
                <ModalChooseDetail
                  isOpen={activeItemWord.value}
                  setOpen={activeItemWord.onFalse}
                  itemWord={word}
                  setIdItemWord={setIdItemWord}
                  index={index}
                  limit={limit}
                />
              )}
            </div>
          ))}
      </div>
      {words && words.data.length > 0 && (
        <Panigation page={page} setPage={setPage} pages={pages} />
      )}

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
