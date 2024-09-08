import React, { useRef, useState } from "react";
import Image from "next/image";
import { IWord } from "@/types/word";
import ModalChooseDetail from "../modal-choose/modal-choose-detail";
import { useBoolean } from "@/app/hook/use-boolean";
import { useSearchParams } from "next/navigation";
import { URLparamsToObject } from "@/middleware/helper";
import useSWR from "swr";
import { optionsFetch } from "@/lib/api/axios-client";

export default function WordVocabulary({
  idCollection,
}: {
  idCollection: number;
}) {
  const activeItemWord = useBoolean();

  const convertParamToQuery = (params: any) => {
    const payload = {
      _and: [
        { topic: { title: { _contains: params.title } } },
        { topic: { collection: { id: { _eq: idCollection } } } },
      ],
    } as any;
    return payload;
  };

  const filters = { _and: [{ topic: { collection: { id: { _eq: "1" } } } }] };

  const [page, setPage] = useState(0);

  const data: any = useRef(null);

  const limit = 20;

  const urlParams: any = useSearchParams();

  const offset = page * limit;

  const payload = URLparamsToObject(urlParams);

  const params = convertParamToQuery(payload);

  const { data: words, error } = useSWR(
    `/items/word?fields=*.*&offset=${offset}&limit=${limit}&meta=filter_count&filter_count,&filter=` +
      (payload.title ? JSON.stringify(params) : JSON.stringify(filters)),
    optionsFetch,
  );
  if (words) data.current = words.data;
  const filter_count = (words as any)?.meta?.filter_count || 0;
  const pages: number = Math.ceil(filter_count / limit);
  const isLoading = !error && !words;

  return (
    <div className="learning-bottom grid grid-cols-4 gap-6">
      {words &&
        words.data.map((word: IWord) => (
          <div key={word.id}>
            <div
              className="cursor-pointer rounded-[8px] border"
              onClick={() => {
                activeItemWord.onTrue();
                // setIdItemWord(word ? word.id : Number);
              }}
            >
              <div className="grid grid-cols-3">
                <div className="thumnail-choose-table col-span-1 flex items-center justify-center border-r bg-[#FFAA00] bg-opacity-5">
                  <div className="p-1">
                    <Image
                      src={"/images/fan.png"}
                      alt={""}
                      width={83}
                      height={87}
                      priority
                      quality={100}
                      className="flex object-cover"
                    />
                  </div>
                </div>

                <div className="col-span-2 ml-2 flex flex-col justify-between p-1 text-[14px] text-[#2E2E2E]">
                  <div>
                    <div className="uppercase opacity-80">{word.title}</div>
                    <div className="opacity-30">{word.pronunciation}</div>
                  </div>
                  <div className="capitalize opacity-80">{word.meanings}</div>
                </div>
              </div>
            </div>

            {/* {idItemWord === word.id && (
            <ModalChooseDetail
              isOpen={activeItemWord.value}
              setOpen={activeItemWord.onFalse}
              itemWord={word}
            />
          )} */}
          </div>
        ))}
    </div>
  );
}
