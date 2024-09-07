import React, { useState } from "react";
import Modal from "@/components/modal";
import { CircleCheck, Loader2 } from "lucide-react";
import ButtonSpotlight from "@/components/common/button-spotlight";

type IProps = {
  isOpen: boolean;
  setOpen: VoidFunction;
  topic: any;
  active: any;
  onClick: (id: number) => void;
};

export default function ModalChooseTopic({
  isOpen,
  setOpen,
  topic,
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
            {topic.map((item: any) => (
              <ButtonSpotlight
                key={item.id}
                pill="roundedFull"
                spaceSide="space"
                className={`flex items-center border ${active === item.id ? "gradient-secondary text-white" : "bg-white"}`}
                onClick={() => {
                  onClick(item.id);
                  setOpen();
                }}
              >
                <div className="text-base">{item.title}</div>
                {(item.check || item.loading) && (
                  <div className="icon-check-loading ml-2">
                    {item.check && (
                      <CircleCheck
                        className="size-5"
                        fill="#188E7E"
                        color="white"
                      />
                    )}
                    {item.loading && (
                      <Loader2 className="size-4 text-[#25A28D]" />
                    )}
                  </div>
                )}
              </ButtonSpotlight>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}
