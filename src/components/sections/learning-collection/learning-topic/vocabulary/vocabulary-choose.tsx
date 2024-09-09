"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import TabsTopic from "./tabs-topic";
import WordVocabulary from "./word-vocabulary";
import { ITopic } from "@/types/topic";
import ButtonSpotlight from "@/components/common/button-spotlight";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

type IProps = {
  doingAction?: VoidFunction;
  topics: ITopic[];
  idCollection: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

//------------------------------------------
export default function VocabularyChoose({
  doingAction,
  topics,
  idCollection,
  page,
  setPage,
}: IProps) {
  const pathname = usePathname();

  const params = useSearchParams();

  return (
    <>
      <div className="selection-choose flex max-w-full flex-wrap gap-4">
        <Link href={pathname} className="rounded-full border">
          <ButtonSpotlight
            pill="roundedFull"
            spaceSide="space"
            className={`flex items-center ${pathname === pathname + params.toString() ? "gradient-secondary text-white" : "bg-white"}`}
          >
            <div className="text-base">Tất cả</div>
          </ButtonSpotlight>
        </Link>

        {topics.map((topic) => (
          <TabsTopic key={topic.id} topic={topic.title} setPage={setPage} />
        ))}
      </div>

      <div className="table-learning grid w-full gap-4 rounded-[8px] border bg-white p-6">
        <WordVocabulary
          idCollection={idCollection}
          page={page}
          setPage={setPage}
          doingAction={doingAction}
        />
      </div>
    </>
  );
}
