import React, { useCallback, useRef } from "react";
import Modal from "@/components/modal";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Volume2 } from "lucide-react";
import { MyImage, MySource } from "@/components/common/image";
import { IWord } from "@/types/word";

type IProps = {
  isOpen: boolean;
  setOpen: VoidFunction;
  itemWord: IWord;
  setIdItemWord: React.Dispatch<
    React.SetStateAction<number | null | undefined>
  >;
  index: number;
  limit: number;
};

export default function ModalChooseDetail({
  isOpen,
  setOpen,
  itemWord,
  setIdItemWord,
  index,
  limit,
}: IProps) {
  const audioRef = useRef(null);

  const onPlaying = () => {
    if (audioRef.current) {
      const audioElement = audioRef.current as HTMLAudioElement;
      audioElement.play();
    }
  };

  const hanhdlePrev = useCallback(() => {
    if (index > 0) setIdItemWord(index - 1);
  }, [setIdItemWord]);

  const hanhdleNext = useCallback(() => {
    if (index < limit - 1) setIdItemWord(index + 1);
  }, [setIdItemWord]);

  return (
    <>
      <Modal isOpen={isOpen} setOpen={setOpen} className="choose-detail">
        <div className="w-[600px] rounded-[10px] border-[10px] border-[#F5F5F5] bg-white p-3">
          <div className="content">
            <div className="vocabulary-grammar-thumnail grid grid-flow-col items-center gap-5">
              <div className="vocabulary-grammar flex flex-col gap-3">
                <div className="vocabulary text-gradient-1 text-3xl font-bold">
                  {itemWord.title}
                </div>
                <div className="flex items-center gap-3 text-[#226960]">
                  <div className="translate rounded-full border border-dashed p-2 text-[14px]">
                    {itemWord.pronunciation}
                  </div>
                  <div
                    className={
                      "cursor-pointer rounded-full border border-dashed p-2"
                    }
                    onClick={onPlaying}
                  >
                    <MySource
                      audioRef={audioRef}
                      src={itemWord.audio.id}
                      type={itemWord.audio.type}
                    />
                    <Volume2 className="size-5" />
                  </div>
                </div>
                <div className="font-bold text-[#2E2E2E] text-opacity-80">
                  Vietnamese meanings:
                  <br />
                  <span className="font-light">{itemWord.meanings}</span>
                </div>
              </div>
              <div className="flex w-full items-start justify-center md:h-[200px]">
                {itemWord.image?.id ? (
                  <MyImage
                    src={itemWord.image?.id}
                    width={227}
                    height={200}
                    className="relative flex h-full w-full items-center rounded object-contain"
                  />
                ) : (
                  <Image
                    src="/images/fan.png"
                    alt="logo"
                    width={227}
                    height={202}
                    priority
                    quality={100}
                    className="flex h-[200px] w-full items-center object-contain"
                  />
                )}
              </div>
            </div>

            <div className="example-sentences grid gap-3">
              <div className="title-exp text-2xl font-bold text-[#DE543D]">
                Example sentences
              </div>
              <div className="exp-translate">
                {itemWord.example_sentences.map((item: any) => (
                  <div
                    key={item.en}
                    className="exp font-bold text-[#2E2E2E] text-opacity-80"
                  >
                    {item.en}
                    <div className="exp-translate text-[14px] font-light italic">
                      {item.vi}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="btn-prev-next flex w-full justify-end gap-2">
              <button
                className={`prev flex size-10 items-center justify-center rounded-[6px] text-center ${index === 0 ? "cursor-not-allowed opacity-50" : "bg-[#ededed]"}`}
                onClick={hanhdlePrev}
                disabled={index === 0}
              >
                <ChevronLeft strokeWidth={1} />
              </button>
              <button
                className={`next flex size-10 items-center justify-center rounded-[6px] ${index === limit - 1 ? "cursor-not-allowed opacity-50" : "bg-[#ededed]"}`}
                onClick={hanhdleNext}
              >
                <ChevronRight strokeWidth={1} />
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
