"use client";
import Button from "@/components/common/button";
import React, { useState } from "react";
import Image from "next/image";
import { CircleCheck, Loader2, Volume2 } from "lucide-react";

import ButtonSpotlight from "@/components/common/button-spotlight";
import ModalChooseDetail from "../modal-choose-detail";
import { IWord } from "@/types/word";
import { ITopic } from "@/types/topic";

type IChooseTable = {
  id: string | number;
  title: string;
  transcription: string;
  translate: string;
  thumnail: string;
};

const chooseTable: IChooseTable[] = [
  {
    id: 1,
    title: "water",
    transcription: "ˈwôdər",
    translate: "nước",
    thumnail: "/images/water.png",
  },
  {
    id: 2,
    title: "water",
    transcription: "ˈwôdər",
    translate: "nước",
    thumnail: "/images/water.png",
  },
  {
    id: 3,
    title: "water",
    transcription: "ˈwôdər",
    translate: "nước",
    thumnail: "/images/water.png",
  },
  {
    id: 4,
    title: "water",
    transcription: "ˈwôdər",
    translate: "nước",
    thumnail: "/images/fan.png",
  },
  {
    id: 5,
    title: "water",
    transcription: "ˈwôdər",
    translate: "nước",
    thumnail: "/images/fan.png",
  },
  {
    id: 6,
    title: "water",
    transcription: "ˈwôdər",
    translate: "nước",
    thumnail: "/images/water.png",
  },
  {
    id: 7,
    title: "water",
    transcription: "ˈwôdər",
    translate: "nước",
    thumnail: "/images/fan.png",
  },
  {
    id: 8,
    title: "water",
    transcription: "ˈwôdər",
    translate: "nước",
    thumnail: "/images/water.png",
  },
  {
    id: 9,
    title: "water",
    transcription: "ˈwôdər",
    translate: "nước",
    thumnail: "/images/fan.png",
  },
  {
    id: 10,
    title: "water",
    transcription: "ˈwôdər",
    translate: "nước",
    thumnail: "/images/water.png",
  },
  {
    id: 11,
    title: "water",
    transcription: "ˈwôdər",
    translate: "nước",
    thumnail: "/images/fan.png",
  },
  {
    id: 12,
    title: "water",
    transcription: "ˈwôdər",
    translate: "nước",
    thumnail: "/images/fan.png",
  },
];

type IProps = {
  doingAction: VoidFunction;
  detailAction: VoidFunction;
  topic: ITopic[];
  active: number;
  onClick: (id: number) => void;
  wordTopic: IWord[];
  isOpen: boolean;
  setOpen: VoidFunction;
};

export default function VocabularyChoose({
  doingAction,
  detailAction,
  topic,
  active,
  onClick,
  wordTopic,
  isOpen,
  setOpen,
}: IProps) {
  const [activeId, setActiveId] = useState(null);

  return (
    <>
      <div className="selection-choose flex max-w-full flex-wrap gap-4">
        {topic.map((item: any) => (
          <ButtonSpotlight
            key={item.id}
            pill="roundedFull"
            spaceSide="space"
            className={`flex items-center border ${active === item.id ? "gradient-secondary text-white" : "bg-white"}`}
            onClick={() => {
              onClick(item.id);
            }}
          >
            <div className="text-base">{item.title}</div>
            {(item.check || item.loading) && (
              <div className="icon-check-loading ml-2">
                {item.check && (
                  <CircleCheck
                    className="size-5"
                    fill="#188E7E"
                    color="white"
                  />
                )}
                {item.loading && <Loader2 className="size-4 text-[#25A28D]" />}
              </div>
            )}
          </ButtonSpotlight>
        ))}
      </div>

      <div className="table-learning grid w-full gap-4 rounded-[8px] border bg-white p-6">
        <div className="learning-top flex items-center justify-between">
          <div className="title-learning">
            <div className="text-xl font-bold leading-[30px]">Từ vựng</div>
            <div className="mt-2 text-[14px]">Danh sách từ vựng bla bla</div>
          </div>
          <div>
            <ButtonSpotlight
              type="button"
              color="gradientPrimary"
              pill="roundedFull"
              spaceSide="default"
              onClick={() => {
                doingAction();
              }}
              className="text-[14px] text-white"
            >
              Luyện tập
            </ButtonSpotlight>
          </div>
        </div>

        <div className="learning-bottom grid grid-cols-4 gap-6">
          {(wordTopic || []).map((item: any) => (
            <div key={item.id}>
              <div
                className="cursor-pointer rounded-[8px] border"
                onClick={() => {
                  detailAction();
                  setActiveId(item.id);
                }}
              >
                <div className="grid grid-cols-3">
                  <div className="thumnail-choose-table col-span-1 flex items-center justify-center border-r bg-[#FFAA00] bg-opacity-5">
                    <div className="p-1">
                      <Image
                        src={"/images/fan.png"}
                        alt={item.title}
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
                      <div className="uppercase opacity-80">{item.title}</div>
                      <div className="opacity-30">{item.pronunciation}</div>
                    </div>
                    <div className="capitalize opacity-80">{item.meanings}</div>
                  </div>
                </div>
              </div>
              {activeId === item.id && (
                <ModalChooseDetail
                  isOpen={isOpen}
                  setOpen={setOpen}
                  itemWord={item}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <button className="see-more w-full rounded-[8px] border bg-white p-2 text-[#2E2E2E] text-opacity-80">
        Xem thêm
      </button>
    </>
  );
}
