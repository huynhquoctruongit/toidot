import ButtonSpotlight from "@/components/common/button-spotlight";
import { CircleCheck, Loader2 } from "lucide-react";
import { useState } from "react";

type IProps = {
  topic: string;
  handleFilterPublish: (action: string, topic: string) => void;
  filters: any;
};
export default function TabsTopic({
  topic,
  handleFilterPublish,
  filters,
}: IProps) {
  return (
    <>
      <ButtonSpotlight
        pill="roundedFull"
        spaceSide="space"
        className={`flex items-center border ${topic === filters.publish ? "gradient-secondary text-white" : "bg-white"}`}
        onClick={() => {
          handleFilterPublish("publish", topic);
        }}
      >
        <div className="text-base">{topic}</div>
        {/* {(topic.check || topic.loading) && (
          <div className="icon-check-loading ml-2">
            {topic.check && (
              <CircleCheck className="size-5" fill="#188E7E" color="white" />
            )}
            {topic.loading && <Loader2 className="size-4 text-[#25A28D]" />}
          </div>
        )} */}
      </ButtonSpotlight>
    </>
  );
}
