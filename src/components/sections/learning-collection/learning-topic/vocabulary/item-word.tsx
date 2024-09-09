import React from "react";
import Image from "next/image";
import { MyImage } from "@/components/common/image";
import { IWord } from "@/types/word";

type IProps = {
  word: IWord;
  onClick: (id: number) => void;
};

export default function ItemWord({ word, onClick }: IProps) {
  return (
    <>
      <div
        className="cursor-pointer rounded-[8px] border"
        onClick={() => {
          onClick(word.id);
        }}
      >
        <div className="grid grid-cols-3">
          <div className="thumnail-choose-table col-span-1 flex items-center justify-center border-r bg-[#FFAA00] bg-opacity-5">
            <div className="flex w-full items-center justify-center p-1 md:h-[100px]">
              {word.image?.id ? (
                <MyImage
                  src={word.image?.id}
                  width={100}
                  height={100}
                  className="relative flex h-full w-full items-center rounded object-cover"
                />
              ) : (
                <Image
                  src="/images/fan.png"
                  alt="logo"
                  width={83}
                  height={87}
                  priority
                  quality={100}
                  className="flex items-center object-cover"
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
    </>
  );
}
