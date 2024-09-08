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
  topicTitle: string[];
  dataFiltered: IWord[];
  filters: ITopicFilters;
  handleFilterPublish: (action: string, topic: string) => void;
};

//------------------------------------------
export default function VocabularyChoose({
  doingAction,
  topicTitle,
  dataFiltered,
  filters,
  handleFilterPublish,
}: IProps) {
  return (
    <>
      <div className="selection-choose flex max-w-full flex-wrap gap-4">
        {topicTitle.map((topic) => (
          <TabsTopic
            key={topic}
            topic={topic}
            filters={filters}
            handleFilterPublish={(action: string, topic: string) =>
              handleFilterPublish(action, topic)
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
