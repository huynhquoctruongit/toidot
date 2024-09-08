import React, { useState } from "react";
import Modal from "@/components/modal";
import { CircleCheck, Loader2 } from "lucide-react";
import ButtonSpotlight from "@/components/common/button-spotlight";
import { ITopic, ITopicFilters } from "@/types/topic";
import TabsTopic from "../vocabulary/tabs-topic";

type IProps = {
  isOpen: boolean;
  setOpen: VoidFunction;
  topicTitle?: string[];
  filters: ITopicFilters;
  handleFilterPublish: (action: string, topic: string) => void;
};

export default function ModalChooseTopic({
  isOpen,
  setOpen,
  topicTitle,
  filters,
  handleFilterPublish,
}: IProps) {
  return (
    <Modal isOpen={isOpen} setOpen={setOpen} className="choose-topic">
      <div className="max-w-4xl rounded-[10px] bg-white px-6 py-5">
        <div className="grid gap-4 text-center">
          <div className="text-xl font-bold">Chọn chủ đề </div>
          <div className="text-[#2E2E2E] text-opacity-30">
            Chọn chủ đề để bắt đầu luyện tập ngay
          </div>
          <div className="flex max-w-full flex-wrap gap-4">
            {topicTitle?.map((topic) => (
              <TabsTopic
                key={topic}
                topic={topic}
                filters={filters}
                handleFilterPublish={(action: string, topic: string) =>
                  handleFilterPublish(action, topic)
                }
                setOpen={setOpen}
              />
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}
