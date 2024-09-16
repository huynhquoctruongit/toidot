import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useRef,
  useState,
} from "react";
import Modal from "@/components/modal";
import { Volume2 } from "lucide-react";
import Image from "next/image";
import Progress from "@/components/common/progress";
import { IWord } from "@/types/word";
import { MyImage, MySource } from "@/components/common/image";

type IProps = {
  isOpen: boolean;
  setOpen: VoidFunction;
  word: IWord;
  practiceWord: IWord[];
};

export default function ModalChooseDoing({
  isOpen,
  setOpen,
  word,
  practiceWord,
}: IProps) {
  const audioRef = useRef(null);

  const onPlaying = () => {
    if (audioRef.current) {
      const audioElement = audioRef.current as HTMLAudioElement;
      audioElement.play();
    }
  };

  return (
    <Modal isOpen={isOpen} setOpen={setOpen} className="choose-doing">
      <div className="min-w-[600px] rounded-[10px] border-[10px] border-[#F5F5F5] bg-white p-5">
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
            <div className="progress-timing">
              <Progress />
            </div>
          </div>
          <div className="thumbnail grid grid-flow-col gap-10">
            {practiceWord
              .sort(() => Math.random() - 0.5)
              .map((item) => (
                <ChooseAction key={item.id} item={item} idWord={word.id} />
              ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}

function ChooseAction({ item, idWord }: { item: IWord; idWord: number }) {
  return (
    <div className="flex cursor-pointer flex-col items-center gap-3">
      <div
        className={`size-[124px] rounded-[6px] border-[2px] border-dashed p-1`}
      >
        {item.image?.id ? (
          <MyImage
            src={item.image?.id}
            width={120}
            height={120}
            className="relative flex h-full w-full items-center rounded object-cover"
          />
        ) : (
          <Image
            src="/images/fan.png"
            alt="logo"
            width={120}
            height={120}
            priority
            quality={100}
            className="flex h-[200px] w-full items-center object-cover"
          />
        )}
      </div>
      <div className="max-w-[124px] text-center">{item.meanings}</div>
    </div>
  );
}
