"use client";

import { useBoolean } from "@/app/hook/use-boolean";
import { ICollection } from "@/types/collection";
import HeadLearningTopic from "./head-learning-topic/head-learning-topic";
import MainLearningTopic from "./main-learning-topic/main-learning-topic";
import { ITopic } from "@/types/topic";
import ModalChooseTopic from "./modal-choose/modal-choose-topic";
import { useState } from "react";

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

  const [page, setPage] = useState(0);

  return (
    <>
      <div className="content relative w-full">
        <HeadLearningTopic
          collections={collections}
          handleActiveTopic={handleActiveTopic}
        />

        <MainLearningTopic
          topics={topics}
          idCollection={idCollection}
          page={page}
          setPage={setPage}
        />
      </div>

      <ModalChooseTopic
        isOpen={activeTopic.value}
        setOpen={() => {
          activeTopic.onFalse();
        }}
        topics={topics}
        setPage={setPage}
      />

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
