"use client";

import React, { useState } from "react";
import { useBoolean } from "@/app/hook/use-boolean";
import { optionsFetch } from "@/lib/api/axios-client";
import useSWR from "swr";
import { ITopic } from "@/types/topic";
import { ICollection } from "@/types/collection";
import HeadLearningTopic from "./head-learning-topic/head-learning-topic";
import MainLearningTopic from "./main-learning-topic/main-learning-topic";

type IProps = {
  topics: ITopic[];
  collections: ICollection[];
  idCollection: number;
};

export default function LearningTopic({
  topics,
  collections,
  idCollection,
}: IProps) {
  const comfirmTopic = useBoolean();

  const detail = useBoolean();

  const doing = useBoolean();

  const doingAnswerSuccess = useBoolean();

  return (
    <>
      <div className="content relative w-full">
        <HeadLearningTopic collections={collections} />

        {/*  */}
        <MainLearningTopic topics={topics} idCollection={idCollection} />
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
