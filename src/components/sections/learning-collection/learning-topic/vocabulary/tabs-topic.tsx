import ButtonSpotlight from "@/components/common/button-spotlight";
import { CircleCheck, Loader2 } from "lucide-react";
import React from "react";

export default function TabsTopic({ topic }: any) {
  return (
    <ButtonSpotlight
      pill="roundedFull"
      spaceSide="space"
      className={`flex items-center border ${topic.id ? "gradient-secondary text-white" : "bg-white"}`}
      //   onClick={() => {
      //     onClick(topic.id);
      //   }}
    >
      <div className="text-base">{topic.title}</div>
      {(topic.check || topic.loading) && (
        <div className="icon-check-loading ml-2">
          {topic.check && (
            <CircleCheck className="size-5" fill="#188E7E" color="white" />
          )}
          {topic.loading && <Loader2 className="size-4 text-[#25A28D]" />}
        </div>
      )}
    </ButtonSpotlight>
  );
}
