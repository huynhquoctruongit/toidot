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

export default function BasicTopic() {
  const [vocab, setVocab] = useState<boolean>(true);
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
            />
          ) : (
            <GrammarChoose />
          )}
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
