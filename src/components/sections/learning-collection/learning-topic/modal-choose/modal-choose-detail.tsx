import React from "react";
import Modal from "@/components/modal";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Volume2 } from "lucide-react";

type IProps = {
  isOpen: boolean;
  setOpen: VoidFunction;
  itemWord?: any;
};

export default function ModalChooseDetail({
  isOpen,
  setOpen,
  itemWord,
}: IProps) {
  return (
    <Modal isOpen={isOpen} setOpen={setOpen} className="choose-detail">
      <div className="max-w-[600px] rounded-[10px] border-[10px] border-[#F5F5F5] bg-white p-3">
        <div className="content">
          <div className="vocabulary-grammar-thumnail grid grid-flow-col items-center gap-3">
            <div className="vocabulary-grammar flex flex-col gap-3">
              <div className="vocabulary text-gradient-1 text-3xl font-bold">
                {itemWord.title}
              </div>
              <div className="flex items-center gap-3 text-[#226960]">
                <div className="translate rounded-full border border-dashed p-2 text-[14px]">
                  {itemWord.pronunciation}
                </div>
                <div className="rounded-full border border-dashed p-2">
                  <Volume2 className="size-5" />
                </div>
              </div>
              <div className="font-bold text-[#2E2E2E] text-opacity-80">
                Vietnamese meanings:
                <br />
                <span className="font-light">{itemWord.meanings}</span>
              </div>
            </div>
            <div className="flex items-start justify-end">
              <Image
                src="/images/Group 194.png"
                alt="logo"
                width={227}
                height={202}
                priority
                quality={100}
                className="flex object-cover"
              />
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
            <button className="prev flex size-10 items-center justify-center rounded-[6px] text-center">
              <ChevronLeft strokeWidth={1} />
            </button>
            <button className="next flex size-10 items-center justify-center rounded-[6px] bg-[#ededed]">
              <ChevronRight strokeWidth={1} />
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
