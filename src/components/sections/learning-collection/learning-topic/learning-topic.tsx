"use client";

import { useBoolean } from "@/app/hook/use-boolean";

import { ICollection } from "@/types/collection";
import HeadLearningTopic from "./head-learning-topic/head-learning-topic";
import MainLearningTopic from "./main-learning-topic/main-learning-topic";

import React, { useCallback, useState } from "react";

import { IWord } from "@/types/word";

import { ITopic, ITopicFilters, ITopicFilterValue } from "@/types/topic";
import ModalChooseTopic from "./modal-choose/modal-choose-topic";

type IProps = {
  topics: ITopic[];
  collections: ICollection[];

  words: IWord[];
};

const defaultFilters: ITopicFilters = {
  publish: "Tất cả",
};

//---------------------------------------------------------

export default function LearningTopic({ topics, collections, words }: IProps) {
  const activeTopic = useBoolean();

  // const detail = useBoolean();

  // const doing = useBoolean();

  // const doingAnswerSuccess = useBoolean();

  const [filters, setFilters] = useState(defaultFilters);

  const topicTitle = topics.map((topic) => topic.title);

  topicTitle.unshift(defaultFilters.publish);

  const handleFilters = useCallback(
    (name: string, value: ITopicFilterValue) => {
      setFilters((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [],
  );

  const handleFilterPublish = useCallback(
    (event: React.SyntheticEvent, newValue: string) => {
      handleFilters("publish", newValue);
    },

    [handleFilters],
  );

  const dataFiltered = applyFilter({
    inputData: words,
    filters,
  });

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

        <MainLearningTopic
          topicTitle={topicTitle}
          dataFiltered={dataFiltered}
          filters={filters}
          handleFilterPublish={(action: string, topic: string) => {
            handleFilterPublish({} as React.SyntheticEvent, topic);
          }}
        />
      </div>

      {/* modal chooseTopic */}
      <ModalChooseTopic
        isOpen={activeTopic.value}
        setOpen={() => {
          activeTopic.onFalse();
        }}
        topicTitle={topicTitle}
        filters={filters}
        handleFilterPublish={(action: string, topic: string) => {
          handleFilterPublish({} as React.SyntheticEvent, topic);
        }}
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

//-----------------------
const applyFilter = ({
  inputData,
  filters,
}: {
  inputData: IWord[];
  filters: ITopicFilters;
}) => {
  const { publish } = filters;

  if (publish !== "Tất cả") {
    inputData = inputData?.filter((word) => word.topic.title === publish);
  }

  return inputData;
};
