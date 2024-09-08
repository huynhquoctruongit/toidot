"use client";

import React, { useState } from "react";
import { useBoolean } from "@/app/hook/use-boolean";

import { ITopic } from "@/types/topic";
import { ICollection } from "@/types/collection";
import HeadLearningTopic from "./head-learning-topic/head-learning-topic";
import MainLearningTopic from "./main-learning-topic/main-learning-topic";
import { IWord } from "@/types/word";

type IProps = {
  topics: ITopic[];
  collections: ICollection[];

  words: IWord[];
};

export default function LearningTopic({ topics, collections, words }: IProps) {
  const comfirmTopic = useBoolean();

  const detail = useBoolean();

  const doing = useBoolean();

  const doingAnswerSuccess = useBoolean();

  return (
    <>
      <div className="content relative w-full">
        <HeadLearningTopic collections={collections} />

        {/*  */}
        <MainLearningTopic topics={topics} words={words} />
      </div>

      {/* modal chooseTopic */}
      {/* <ModalChooseTopic
        isOpen={comfirmTopic.value}
        setOpen={() => {
          comfirmTopic.onFalse();
        }}
        topics={topics}
        active={active}
        onClick={handleActiveId}
      /> */}

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
