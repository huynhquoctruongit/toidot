"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useBoolean } from "@/app/hook/use-boolean";
import ModalChooseTopic from "./modal-choose-topic";
import ModalChooseDetail from "./modal-choose-detail";
import ModalChooseDoing from "./modal-choose-doing";
import ModalChooseDoingAnswerSuccess from "./modal-choose-doing-answer-success";
import ButtonSpotlight from "@/components/common/button-spotlight";
import ButtonCommon from "@/components/common/button-common";
import VocabularyChoose from "./vocabulary/vocabulary-choose";
import GrammarChoose from "./grammar/grammar-choose";
import { optionsFetch } from "@/lib/api/axios-client";
import useSWR from "swr";
import { ITopic } from "@/types/topic";

type IProps = {
  topic: ITopic[];
};

export default function LearningTopic({ topic }: IProps) {
  const filterId = topic.map((item: any) => item.id);

  const [active, setActive] = useState(filterId[0]);

  const { data } = useSWR(
    `/items/word?fields=*.*&filter[topic][_eq]=${active}`,
    optionsFetch,
  );

  const [vocab, setVocab] = useState<boolean>(true);

  const comfirmTopic = useBoolean();

  const detail = useBoolean();

  const doing = useBoolean();

  const doingAnswerSuccess = useBoolean();

  const handleActiveId = (id: number) => {
    setActive(id);
  };

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
                      comfirmTopic.onTrue();
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
          <div className="selection-vocabulary-grammar flex justify-center">
            <div className="bg-whiteborder grid max-w-80 grid-flow-col items-center gap-3 rounded-full border border-dashed p-2">
              <ButtonSpotlight
                color={vocab ? "gradientSuccess" : "gradientLight"}
                pill="roundedFull"
                spaceSide="spaceSm"
                onClick={() => {
                  setVocab(true);
                }}
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
                color={vocab ? "gradientLight" : "gradientSuccess"}
                pill="roundedFull"
                spaceSide="spaceSm"
                onClick={() => {
                  setVocab(false);
                }}
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

          {vocab ? (
            <VocabularyChoose
              doingAction={() => {
                doing.onTrue();
              }}
              detailAction={() => {
                detail.onTrue();
              }}
              topic={topic}
              active={active}
              onClick={handleActiveId}
              wordTopic={data}
              isOpen={detail.value}
              setOpen={() => {
                detail.onFalse();
              }}
            />
          ) : (
            <GrammarChoose />
          )}
        </div>
      </div>

      {/* modal chooseTopic */}
      <ModalChooseTopic
        isOpen={comfirmTopic.value}
        setOpen={() => {
          comfirmTopic.onFalse();
        }}
        topic={topic}
        active={active}
        onClick={handleActiveId}
      />

      {/* <ModalChooseDoing
        isOpen={doing.value}
        setOpen={() => {
          doing.onFalse();
        }}
        onClick={() => {
          doing.onFalse();
          doingAnswerSuccess.onTrue();
        }}
        setId={setId}
      /> */}

      {/* ModalChooseDoingAnswerSuccess */}
      {/* <ModalChooseDoingAnswerSuccess
        isOpen={doingAnswerSuccess.value}
        setOpen={() => {
          doingAnswerSuccess.onFalse();
        }}
        activeactiveId={id}
      /> */}
    </>
  );
}
