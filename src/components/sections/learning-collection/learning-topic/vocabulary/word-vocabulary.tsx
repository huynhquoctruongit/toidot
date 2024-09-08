import React, { useState } from "react";
import Image from "next/image";
import { IWord } from "@/types/word";
import ModalChooseDetail from "../modal-choose/modal-choose-detail";
import { useBoolean } from "@/app/hook/use-boolean";

type IProps = {
  wordFlowTopic: IWord[];
};

export default function WordVocabulary({ wordFlowTopic }: IProps) {
  const activeItemWord = useBoolean();

  const [idItemWord, setIdItemWord] = useState<number>();

  return (
    <div className="learning-bottom grid grid-cols-4 gap-6">
      {wordFlowTopic.map((word) => (
        <div key={word.id}>
          <div
            className="cursor-pointer rounded-[8px] border"
            onClick={() => {
              activeItemWord.onTrue();
              setIdItemWord(word ? word.id : Number);
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
  );
}
