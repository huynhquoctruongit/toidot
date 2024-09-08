"use client";

import { useBoolean } from "@/app/hook/use-boolean";

import { ICollection } from "@/types/collection";
import HeadLearningTopic from "./head-learning-topic/head-learning-topic";
import MainLearningTopic from "./main-learning-topic/main-learning-topic";

import React, { useCallback, useState } from "react";

import { IWord } from "@/types/word";

import { ITopic } from "@/types/topic";
import ModalChooseTopic from "./modal-choose/modal-choose-topic";

type IProps = {
  topics: ITopic[];
  collections: ICollection[];
  idCollection: number;
};

//---------------------------------------------------------

export default function LearningTopic({
  topics,
  collections,
  idCollection,
}: IProps) {
  const activeTopic = useBoolean();

  const handleActiveTopic = () => {
    activeTopic.onTrue();
  };

  return (
    <>
      <div className="content relative w-full">
        <HeadLearningTopic
          collections={collections}
          handleActiveTopic={handleActiveTopic}
        />

        <MainLearningTopic topics={topics} idCollection={idCollection} />
      </div>

      {/* modal chooseTopic */}
      <ModalChooseTopic
        isOpen={activeTopic.value}
        setOpen={() => {
          activeTopic.onFalse();
        }}
        topics={topics}
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
