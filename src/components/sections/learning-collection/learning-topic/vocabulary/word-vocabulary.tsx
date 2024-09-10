import React, { useRef, useState } from "react";
import { IWord } from "@/types/word";
import ModalChooseDetail from "../modal-choose/modal-choose-detail";
import { useBoolean } from "@/app/hook/use-boolean";
import { useSearchParams } from "next/navigation";
import { URLparamsToObject } from "@/middleware/helper";
import useSWR from "swr";
import { optionsFetch } from "@/lib/api/axios-client";
import HeadVocabulary from "./head-vocabulary";
import Panigation from "@/components/common/panigation";
import ItemWord from "./item-word";

type IProps = {
  idCollection: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  doingAction?: VoidFunction;
};

export default function WordVocabulary({
  idCollection,
  page,
  setPage,
  doingAction,
}: IProps) {
  const activeItemWord = useBoolean();

  const [idItemWord, setIdItemWord] = useState<number | null>();

  const convertParamToQuery = (params: any) => {
    const payload = {
      _and: [
        { topic: { title: { _contains: params.title } } },
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

  const { data: words, error } = useSWR(
    `/items/word?fields=*.*&offset=${offset}&limit=${limit}&meta=filter_count&filter_count&filter=` +
      (payload.title ? JSON.stringify(params) : JSON.stringify(filters)) +
      (sort ? "&sort=" + sort : ""),
    optionsFetch,
  );
  if (words) data.current = words.data;
  const filter_count = (words as any)?.meta?.filter_count || 0;
  const pages: number = Math.ceil(filter_count / limit);
  const isLoading = !error && !words;

  const length = words?.data.length;

  const hanldeShowModalItemWord = (id: number) => {
    activeItemWord.onTrue();
    setIdItemWord(id);
  };

  return (
    <>
      <HeadVocabulary
        doingAction={doingAction}
        words={filter_count ? filter_count : length}
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

              {(idItemWord === word.id || idItemWord === index) && (
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
    </>
  );
}
