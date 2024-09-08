import React from "react";
import Image from "next/image";
import { IWord } from "@/types/word";
import ModalChooseDetail from "../modal-choose/modal-choose-detail";

type IProps = {
  word?: IWord;
  detailAction: VoidFunction;
  setActiveId: React.Dispatch<React.SetStateAction<number>>;
  isOpen: boolean;
  setOpen: VoidFunction;
  activeId: number;
};

export default function WordVocabulary({
  word,
  detailAction,
  setActiveId,
  isOpen,
  setOpen,
  activeId,
}: IProps) {
  return (
    <>
      <div
        className="cursor-pointer rounded-[8px] border"
        onClick={() => {
          detailAction();
          setActiveId(word ? word.id : Number(1));
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
              <div className="uppercase opacity-80">{word?.title}</div>
              <div className="opacity-30">{word?.pronunciation}</div>
            </div>
            <div className="capitalize opacity-80">{word?.meanings}</div>
          </div>
        </div>
      </div>
      {activeId === word?.id && (
        <ModalChooseDetail isOpen={isOpen} setOpen={setOpen} itemWord={word} />
      )}
    </>
  );
}
