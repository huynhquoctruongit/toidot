"use client";

import React, { useState } from "react";

import { IWord } from "@/types/word";
import { ITopic } from "@/types/topic";
import HeadVocabulary from "./head-vocabulary";
import WordVocabulary from "./word-vocabulary";
import TabsTopic from "./tabs-topic";

type IProps = {
  doingAction: VoidFunction;
  detailAction: VoidFunction;
  topics: ITopic[];
  active: number;
  onClick: (id: number) => void;
  wordTopic: IWord[];
  isOpen: boolean;
  setOpen: VoidFunction;
};

export default function VocabularyChoose({
  doingAction,
  detailAction,
  topics,
  active,
  onClick,
  wordTopic,
  isOpen,
  setOpen,
}: IProps) {
  const [activeId, setActiveId] = useState(Number);

  return (
    <>
      <div className="selection-choose flex max-w-full flex-wrap gap-4">
        {topics.map((topic) => (
          <TabsTopic topic={topic} />
        ))}
      </div>

      <div className="table-learning grid w-full gap-4 rounded-[8px] border bg-white p-6">
        <HeadVocabulary doingAction={doingAction} />

        <div className="learning-bottom grid grid-cols-4 gap-6">
          {(wordTopic || []).map((word) => (
            <WordVocabulary
              key={word.id}
              word={word}
              setActiveId={setActiveId}
              detailAction={detailAction}
              isOpen={isOpen}
              setOpen={setOpen}
              activeId={activeId}
            />
          ))}
        </div>
      </div>

      <button className="see-more w-full rounded-[8px] border bg-white p-2 text-[#2E2E2E] text-opacity-80">
        Xem thêm
      </button>
    </>
  );
}
