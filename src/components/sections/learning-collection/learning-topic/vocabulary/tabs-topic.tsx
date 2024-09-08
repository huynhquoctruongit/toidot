import ButtonSpotlight from "@/components/common/button-spotlight";
import { ITopicFilters } from "@/types/topic";
import { CircleCheck, Loader2 } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type IProps = {
  topic: string;
  setOpen?: VoidFunction;
};
export default function TabsTopic({ topic, setOpen }: IProps) {
  const pathname = usePathname();
  const params = useSearchParams();
  const objParams: any = {};
  params.forEach((value: string, key: string) => {
    objParams[key] = value;
  });
  const urlParams = new URLSearchParams({
    ...objParams,
    title: topic,
  }).toString();

  return (
    <Link href={`${pathname}?${urlParams}`}>
      <ButtonSpotlight
        pill="roundedFull"
        spaceSide="space"
        className={`flex items-center border ${params.get("title") === topic ? "gradient-secondary text-white" : "bg-white"}`}
        onClick={() => {
          if (setOpen) setOpen();
        }}
      >
        <div className="text-base">{topic}</div>
      </ButtonSpotlight>
    </Link>
  );
}
