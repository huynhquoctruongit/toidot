import React, { useState } from "react";
import Modal from "@/components/modal";
import { CircleCheck, Loader2 } from "lucide-react";
import ButtonSpotlight from "@/components/common/button-spotlight";
import { ITopic, ITopicFilters } from "@/types/topic";
import TabsTopic from "../vocabulary/tabs-topic";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

type IProps = {
  isOpen: boolean;
  setOpen: VoidFunction;
  topics: ITopic[];
};

export default function ModalChooseTopic({ isOpen, setOpen, topics }: IProps) {
  const pathname = usePathname();
  const params = useSearchParams();
  return (
    <Modal isOpen={isOpen} setOpen={setOpen} className="choose-topic">
      <div className="max-w-4xl rounded-[10px] bg-white px-6 py-5">
        <div className="grid gap-4 text-center">
          <div className="text-xl font-bold">Chọn chủ đề </div>
          <div className="text-[#2E2E2E] text-opacity-30">
            Chọn chủ đề để bắt đầu luyện tập ngay
          </div>
          <div className="flex max-w-full flex-wrap gap-4">
            <Link href={pathname} className="rounded-full border">
              <ButtonSpotlight
                pill="roundedFull"
                spaceSide="space"
                className={`flex items-center ${pathname === pathname + params.toString() ? "gradient-secondary text-white" : "bg-white"}`}
                onClick={() => {
                  setOpen();
                }}
              >
                <div className="text-base">Tất cả</div>
              </ButtonSpotlight>
            </Link>
            {topics.map((topic) => (
              <TabsTopic key={topic.id} topic={topic.title} setOpen={setOpen} />
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}
