import React, { useState } from "react";
import Modal from "@/components/modal";
import { CircleCheck, Loader2 } from "lucide-react";
import ButtonSpotlight from "@/components/common/button-spotlight";
import { ITopic } from "@/types/topic";

type IProps = {
  isOpen: boolean;
  setOpen: VoidFunction;
  topics: ITopic[];
  active: number;
  onClick: (id: number) => void;
};

export default function ModalChooseTopic({
  isOpen,
  setOpen,
  topics,
  active,
  onClick,
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
            {topics.map((topic) => (
              <ButtonSpotlight
                key={topic.id}
                pill="roundedFull"
                spaceSide="space"
                className={`topics-center flex border ${active === topic.id ? "gradient-secondary text-white" : "bg-white"}`}
                onClick={() => {
                  onClick(topic.id);
                  setOpen();
                }}
              >
                <div className="text-base">{topic.title}</div>
                {/* {(topic.check || topic.loading) && (
                  <div className="icon-check-loading ml-2">
                    {topic.check && (
                      <CircleCheck
                        className="size-5"
                        fill="#188E7E"
                        color="white"
                      />
                    )}
                    {topic.loading && (
                      <Loader2 className="size-4 text-[#25A28D]" />
                    )}
                  </div>
                )} */}
              </ButtonSpotlight>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}
