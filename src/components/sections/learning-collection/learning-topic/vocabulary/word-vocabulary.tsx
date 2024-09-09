import React, { useRef, useState } from "react";
import Image from "next/image";
import { IWord } from "@/types/word";
import ModalChooseDetail from "../modal-choose/modal-choose-detail";
import { useBoolean } from "@/app/hook/use-boolean";
import { useSearchParams } from "next/navigation";
import { renderImageById, URLparamsToObject } from "@/middleware/helper";
import useSWR from "swr";
import { optionsFetch } from "@/lib/api/axios-client";
import { ChevronRightIcon } from "lucide-react";
import HeadVocabulary from "./head-vocabulary";
import { MyImage } from "@/components/common/image";

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

  const filters = { _and: [{ topic: { collection: { id: { _eq: "1" } } } }] };

  const data: any = useRef(null);

  const limit = 20;

  const urlParams: any = useSearchParams();

  const offset = page * limit;

  const payload = URLparamsToObject(urlParams);

  const params = convertParamToQuery(payload);

  const { data: words, error } = useSWR(
    `/items/word?fields=*.*&offset=${payload.title ? offset : ""}&limit=${payload.title ? limit : -1}${payload.title ? "&meta=filter_count&filter_count" : ""}&filter=` +
      (payload.title ? JSON.stringify(params) : JSON.stringify(filters)),
    optionsFetch,
  );
  if (words) data.current = words.data;
  const filter_count = (words as any)?.meta?.filter_count || 0;
  const pages: number = Math.ceil(filter_count / limit);
  const isLoading = !error && !words;

  const length = words?.data.length;

  return (
    <>
      <HeadVocabulary
        doingAction={doingAction}
        words={filter_count ? filter_count : length}
      />
      <div className="learning-bottom grid grid-cols-4 gap-6">
        {words &&
          (words.data || []).map((word: IWord) => (
            <div key={word.id}>
              <div
                className="cursor-pointer rounded-[8px] border"
                onClick={() => {
                  activeItemWord.onTrue();
                  setIdItemWord(word.id);
                }}
              >
                <div className="grid grid-cols-3">
                  <div className="thumnail-choose-table col-span-1 flex items-center justify-center border-r bg-[#FFAA00] bg-opacity-5">
                    <div className="size-full p-1">
                      {word.image?.id ? (
                        <MyImage
                          src={word.image?.id}
                          width={100}
                          height={100}
                          className="block h-[100px] w-full items-center rounded object-fill"
                        />
                      ) : (
                        <Image
                          src="/images/fan.png"
                          alt="logo"
                          width={83}
                          height={87}
                          priority
                          quality={100}
                          className="flex h-[100px] w-full items-center object-fill"
                        />
                      )}
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

              {idItemWord === word.id && (
                <ModalChooseDetail
                  isOpen={activeItemWord.value}
                  setOpen={activeItemWord.onFalse}
                  itemWord={word}
                />
              )}
            </div>
          ))}
      </div>
      {words && words.data.length > 0 && (
        <nav className="woocommerce-pagination">
          <ul className="page-numbers flex items-center">
            {Array(pages)
              .fill(null)
              .map((element: any, index: number) => {
                return (
                  <li
                    key={index + "arrayket"}
                    className={
                      "button-contact mx-2 flex size-10 cursor-pointer items-center justify-center rounded-full border text-center leading-[40px] transition-all duration-300 ease-in-out hover:bg-[#fef7f5] " +
                      (index === page
                        ? "gradient-secondary text-white"
                        : "bg-[#f2f2f2]")
                    }
                    onClick={() => setPage(index)}
                  >
                    <a className="page-numbers">{index + 1}</a>
                  </li>
                );
              })}
            {pages > 0 && (
              <li
                onClick={() => {
                  if (page + 1 >= pages) return;
                  setPage((state: number) => state + 1);
                }}
                className={
                  "mx-2 flex size-10 cursor-pointer items-center justify-center rounded-full border bg-[#fef7f5] text-center leading-[40px] transition-all duration-300 ease-in-out " +
                  (page + 1 >= pages ? "" : "hover:bg-[#f2f2f2]")
                }
              >
                <a
                  className={
                    "next page-numbers " +
                    (page + 1 >= pages ? " opacity-30" : " ")
                  }
                >
                  {" "}
                  <ChevronRightIcon className="size-3 text-black" />
                </a>
              </li>
            )}
          </ul>
        </nav>
      )}
    </>
  );
}
