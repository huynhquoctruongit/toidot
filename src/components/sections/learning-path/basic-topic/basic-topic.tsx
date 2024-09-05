"use client";
import Button from "@/components/common/button";
import React, { useState } from "react";
import Image from "next/image";
import { CircleCheck, Loader2, Volume2 } from "lucide-react";
import { useBoolean } from "@/app/hook/use-boolean";
import ModalChooseTopic from "./modal-choose-topic";
import ModalChooseDetail from "./modal-choose-detail";
import ModalChooseDoing from "./modal-choose-doing";
import ModalChooseDoingAnswerSuccess from "./modal-choose-doing-answer-success";
import ButtonSpotlight from "@/components/common/button-spotlight";
import ButtonCommon from "@/components/common/button-common";

type ISelectionChoose = {
  id: string | number;
  title: string;
  check?: boolean;
  loading?: boolean;
};

const selectionChoose: ISelectionChoose[] = [
  {
    id: 1,
    title: "Tất cả",
    check: false,
    loading: false,
  },

  {
    id: 2,
    title: "Động vật và thiên nhiên ",
    check: false,
    loading: true,
  },
  {
    id: 3,
    title: "Gia đình và bạn bè",
    check: false,
    loading: true,
  },
  {
    id: 4,
    title: "Ngày tháng và thời tiết",
    check: false,
    loading: true,
  },
  {
    id: 5,
    title: "Thực phẩm và đồ uống",
    check: false,
    loading: false,
  },
  {
    id: 6,
    title: "Động vật và thiên nhiên ",
    check: true,
    loading: false,
  },
  {
    id: 8,
    title: "Gia đình và bạn bè ",
    check: false,
    loading: false,
  },
  {
    id: 9,
    title: "Ngày tháng và thời tiết ",
    check: false,
    loading: true,
  },
  {
    id: 10,
    title: "Thực phẩm và đồ uống ",
    check: false,
    loading: false,
  },
  {
    id: 11,
    title: "Động vật và thiên nhiên ",
    check: true,
    loading: false,
  },
  {
    id: 12,
    title: "Ngày tháng và thời tiết ",
    check: false,
    loading: false,
  },
  {
    id: 13,
    title: "Thực phẩm và đồ uống ",
    check: true,
    loading: false,
  },
];

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

export default function BasicTopic() {
  const [id, setId] = useState<number>(0);

  const active = useBoolean();

  const detail = useBoolean();

  const doing = useBoolean();

  const doingAnswerSuccess = useBoolean();

  return (
    <>
      <div className="content relative w-full">
        <div className="content-top bg-gradient-basic w-full">
          <div className="container mx-auto grid grid-cols-3 py-10">
            <div className="col-span-2">
              <div className="grid gap-8">
                <div className="flex items-center">
                  <ButtonCommon
                    pill="rounded"
                    className="btn-secondary1"
                    spaceSide="space"
                  >
                    <div className="text-3xl font-bold text-white">1</div>
                  </ButtonCommon>
                  <div className="ml-10 text-xl font-bold uppercase">
                    Chủ đề cơ bản
                  </div>
                </div>
                <div className="content max-w-2xl text-[#2E2E2E] opacity-80">
                  Cải thiện kỹ năng giao tiếp: Bạn có thể giao tiếp hiệu quả hơn
                  trong các tình huống hàng ngày, chẳng hạn như mua sắm, đặt món
                  ăn, hỏi đường, và tham gia các cuộc trò chuyện đơn giản.
                </div>
                <div>
                  <ButtonSpotlight
                    type="button"
                    color="gradientPrimary"
                    pill="roundedFull"
                    spaceSide="space"
                    onClick={() => {
                      active.onTrue();
                    }}
                    className="text-white"
                  >
                    Luyện tập ngay
                  </ButtonSpotlight>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <Image
                src="/images/image 17.png"
                alt="logo"
                width={339}
                height={265}
                priority
                quality={100}
                className="flex object-contain"
              />
            </div>
          </div>
        </div>

        <div className="content-bottom container mx-auto my-6 grid gap-6">
          <div className="selection-grammar-vocabulary flex justify-center">
            <div className="bg-whiteborder grid max-w-80 grid-flow-col items-center gap-3 rounded-full border border-dashed p-2">
              <ButtonSpotlight
                color="gradientSuccess"
                pill="roundedFull"
                spaceSide="spaceSm"
              >
                <Image
                  src="/images/notebook.png"
                  alt="logo"
                  width={26}
                  height={26}
                  priority
                  quality={100}
                  className="flex object-cover"
                />
                <div className="ml-2">Từ vựng</div>
              </ButtonSpotlight>
              <ButtonSpotlight
                color="gradientLight"
                pill="roundedFull"
                spaceSide="spaceSm"
              >
                <Image
                  src="/images/notebook.png"
                  alt="logo"
                  width={26}
                  height={26}
                  priority
                  quality={100}
                  className="flex object-cover"
                />
                <div className="ml-2">Ngữ pháp</div>
              </ButtonSpotlight>
            </div>
          </div>

          <div className="selection-choose flex max-w-full flex-wrap gap-4">
            {selectionChoose.map((item) => (
              <ButtonSpotlight
                key={item.id}
                pill="roundedFull"
                spaceSide="space"
                className={`flex items-center border ${item.id === 1 ? "gradient-secondary text-white" : "bg-white"}`}
              >
                <div className="text-base">{item.title}</div>
                <div className="icon-check-loading ml-2">
                  {item.check && (
                    <CircleCheck
                      className="size-5"
                      fill="#188E7E"
                      color="white"
                    />
                  )}
                  {item.loading && (
                    <Loader2 className="size-4 text-[#25A28D]" />
                  )}
                </div>
              </ButtonSpotlight>
            ))}
          </div>

          <div className="table-learning grid w-full gap-4 rounded-[8px] border bg-white p-6">
            <div className="learning-top flex items-center justify-between">
              <div className="title-learning">
                <div className="text-xl font-bold leading-[30px]">Từ vựng</div>
                <div className="mt-2 text-[14px]">
                  Danh sách từ vựng bla bla
                </div>
              </div>
              <div>
                <ButtonSpotlight
                  type="button"
                  color="gradientPrimary"
                  pill="roundedFull"
                  spaceSide="default"
                  onClick={() => {
                    doing.onTrue();
                  }}
                  className="text-[14px] text-white"
                >
                  Luyện tập
                </ButtonSpotlight>
              </div>
            </div>
            <div className="learning-bottom grid grid-cols-4 gap-6">
              {chooseTable.map((item) => (
                <div
                  className="cursor-pointer rounded-[8px] border"
                  key={item.id}
                  onClick={() => {
                    detail.onTrue();
                  }}
                >
                  <div className="grid grid-cols-3">
                    <div className="thumnail-choose-table col-span-1 flex items-center justify-center border-r bg-[#FFAA00] bg-opacity-5">
                      <div className="p-1">
                        <Image
                          src={item.thumnail}
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
                        <div className="opacity-30">{item.transcription}</div>
                      </div>
                      <div className="capitalize opacity-80">
                        {item.translate}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="see-more w-full rounded-[8px] border bg-white p-2 text-[#2E2E2E] text-opacity-80">
            Xem thêm
          </button>
        </div>
      </div>

      {/* modal chooseTopic */}
      <ModalChooseTopic
        isOpen={active.value}
        setOpen={() => {
          active.onFalse();
        }}
      />

      {/* ModalChooseDetail */}
      <ModalChooseDetail
        isOpen={detail.value}
        setOpen={() => {
          detail.onFalse();
        }}
      />

      {/* ModalChooseDoing */}
      <ModalChooseDoing
        isOpen={doing.value}
        setOpen={() => {
          doing.onFalse();
        }}
        onClick={() => {
          doing.onFalse();
          doingAnswerSuccess.onTrue();
        }}
        setId={setId}
      />

      {/* ModalChooseDoingAnswerSuccess */}
      <ModalChooseDoingAnswerSuccess
        isOpen={doingAnswerSuccess.value}
        setOpen={() => {
          doingAnswerSuccess.onFalse();
        }}
        activeId={id}
      />
    </>
  );
}
