import React, { useEffect, useRef, useState } from "react";
import Modal from "@/components/modal";
import { ChevronRight, Volume2 } from "lucide-react";

import { IWord } from "@/types/word";
import { MySource } from "@/components/common/image";
import ChooseActionDoing from "./choose-action-doing";

type IProps = {
  isOpen: boolean;
  setOpen: VoidFunction;
  word: IWord;
  practiceWord: IWord[];
  onClick: VoidFunction;
};

export default function ModalChooseDoing({
  isOpen,
  setOpen,
  word,
  practiceWord,
  onClick,
}: IProps) {
  const audioRef = useRef(null);
  console.log(practiceWord);

  const onPlaying = () => {
    if (audioRef.current) {
      const audioElement = audioRef.current as HTMLAudioElement;
      audioElement.play();
    }
  };

  return (
    <Modal isOpen={isOpen} setOpen={setOpen} className="choose-doing">
      <div className="relative min-w-[600px] rounded-[10px] border-[10px] border-[#F5F5F5] bg-white p-5">
        {practiceWord !== undefined && word !== undefined ? (
          <div className="content-doing grid gap-4">
            <div className="vocabulary-grammar flex flex-col items-center gap-3">
              <div className="vocabulary text-gradient-1 text-3xl font-bold">
                {word?.title}
              </div>
              <div className="flex items-center gap-3 text-[#226960]">
                <div className="translate rounded-full border border-dashed p-2 text-[14px]">
                  {word?.pronunciation}
                </div>
                <div
                  className={
                    "cursor-pointer rounded-full border border-dashed p-2"
                  }
                  onClick={onPlaying}
                >
                  <MySource
                    audioRef={audioRef}
                    src={word?.audio.id}
                    type={word?.audio.type}
                  />
                  <Volume2 className="size-5" />
                </div>
              </div>
              <ChooseActionDoing
                practiceWord={practiceWord.sort(() => Math.random() - 0.5)}
                word={word}
                onClick={onClick}
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center uppercase text-[#226960]">
            Hoàn thành
          </div>
        )}
      </div>
    </Modal>
  );
}
