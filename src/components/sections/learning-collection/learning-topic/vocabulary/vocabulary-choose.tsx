"use client";

import React, { useCallback, useState } from "react";
import useSWR from "swr";
import { IWord } from "@/types/word";
import HeadVocabulary from "./head-vocabulary";
import TabsTopic from "./tabs-topic";
import WordVocabulary from "./word-vocabulary";
import { optionsFetch } from "@/lib/api/axios-client";
import { ITopic, ITopicFilters, ITopicFilterValue } from "@/types/topic";

type IProps = {
  doingAction?: VoidFunction;
  detailAction?: VoidFunction;
  topics: ITopic[];
  active?: number;
  onClick?: (id: number) => void;

  isOpen?: boolean;
  setOpen?: VoidFunction;
  words: IWord[];
};

const defaultFilters: ITopicFilters = {
  publish: "Tất cả",
};
//------------------------------------------
export default function VocabularyChoose({
  doingAction,
  detailAction,
  topics,
  active,
  onClick,
  isOpen,
  setOpen,
  words,
}: IProps) {
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

  return (
    <>
      <div className="selection-choose flex max-w-full flex-wrap gap-4">
        {topicTitle.map((topic) => (
          <TabsTopic
            key={topic}
            topic={topic}
            filters={filters}
            handleFilterPublish={(action: string, topic: string) =>
              handleFilterPublish({} as React.SyntheticEvent, topic)
            }
          />
        ))}
      </div>

      <div className="table-learning grid w-full gap-4 rounded-[8px] border bg-white p-6">
        <HeadVocabulary doingAction={doingAction} />

        <WordVocabulary wordFlowTopic={dataFiltered} />
      </div>

      <button className="see-more w-full rounded-[8px] border bg-white p-2 text-[#2E2E2E] text-opacity-80">
        Xem thêm
      </button>
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
