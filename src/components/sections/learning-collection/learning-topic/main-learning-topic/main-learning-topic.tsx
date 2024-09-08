"use client";

import React, { useState } from "react";
import Image from "next/image";
import ButtonSpotlight from "@/components/common/button-spotlight";
import { optionsFetch } from "@/lib/api/axios-client";
import { ITopic, ITopicFilters } from "@/types/topic";
import VocabularyChoose from "../vocabulary/vocabulary-choose";
import GrammarChoose from "../grammar/grammar-choose";
import useSWR from "swr";
import { IWord } from "@/types/word";

type IProps = {
  topicTitle: string[];
  dataFiltered: IWord[];
  filters: ITopicFilters;
  handleFilterPublish: (action: string, topic: string) => void;
};

//------------------------------------------------------------------------
export default function MainLearningTopic({
  topicTitle,
  dataFiltered,
  filters,
  handleFilterPublish,
}: IProps) {
  const [vocab, setVocab] = useState<boolean>(true);

  return (
    <div className="main-learning-topic container mx-auto my-6 grid gap-6">
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
          filters={filters}
          handleFilterPublish={handleFilterPublish}
          //   doingAction={() => {
          //     doing.onTrue();
          //   }}
          //   detailAction={() => {
          //     detail.onTrue();
          //   }}
          dataFiltered={dataFiltered}
          //   active={active}
          //   onClick={handleActiveId}

          //   isOpen={detail.value}
          //   setOpen={() => {
          //     detail.onFalse();
          //   }}
          topicTitle={topicTitle}
        />
      ) : (
        <GrammarChoose />
      )}
    </div>
  );
}
