import React, { Dispatch, SetStateAction } from "react";
import Modal from "@/components/modal";
import { Loader2, Volume2 } from "lucide-react";
import Image from "next/image";
import Progress from "@/components/common/progress";
import { IWord } from "@/types/word";

type IChooseDoing = {
  id: string | number;
  title: string;
  thumnail: string;
};

const chooseDoing: IChooseDoing[] = [
  {
    id: 1,
    title: "Ruột thịt",
    thumnail: "/images/Group 194.png",
  },
  { id: 2, title: "Anh em họ hàng", thumnail: "/images/Group 194.png" },
  {
    id: 3,
    title: "hàng xóm",
    thumnail: "/images/Group 194.png",
  },
];

type IProps = {
  isOpen: boolean;
  setOpen: VoidFunction;
  word: IWord;
};

export default function ModalChooseDoing({ isOpen, setOpen, word }: IProps) {
  return (
    <Modal isOpen={isOpen} setOpen={setOpen} className="choose-doing">
      <div className="min-w-[600px] rounded-[10px] border-[10px] border-[#F5F5F5] bg-white p-5">
        <div className="content-doing grid gap-4">
          <div className="vocabulary-grammar flex flex-col items-center gap-3">
            <div className="vocabulary text-gradient-1 text-3xl font-bold">
              {word.title}
            </div>
            <div className="flex items-center gap-3 text-[#226960]">
              <div className="translate rounded-full border border-dashed p-2 text-[14px]">
                {word.pronunciation}
              </div>
              <div className="rounded-full border border-dashed p-2">
                <Volume2 className="size-5" />
              </div>
            </div>
            <div className="progress-timing">
              {/* Progress content */}

              <Progress />
            </div>
          </div>
          <div className="thumbnail grid grid-flow-col gap-10">
            {chooseDoing.map((item) => (
              <div
                key={item.id}
                className="flex cursor-pointer flex-col items-center gap-3"
              >
                <div
                  className="size-[124px] rounded-[6px] border-[2px] border-dashed"
                  // onClick={() => {
                  //   onClick();
                  //   setId(Number(item.id));
                  // }}
                >
                  <Image
                    src="/images/Group 194.png"
                    alt="logo"
                    width={120}
                    height={120}
                    priority
                    quality={100}
                    className="flex h-auto rounded-[6px] object-cover"
                  />
                </div>
                <div className="max-w-[124px] text-center">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}
