import ButtonSpotlight from "@/components/common/button-spotlight";
import { ITopic, ITopicFilters } from "@/types/topic";
import { CircleCheck, Loader2 } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type IProps = {
  topic: ITopic;
  setOpen?: VoidFunction;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};
export default function TabsTopic({ topic, setOpen, setPage }: IProps) {
  const pathname = usePathname();
  const params = useSearchParams();
  const objParams: any = {};
  params.forEach((value: string, key: string) => {
    objParams[key] = value;
  });
  const urlParams = new URLSearchParams({
    ...objParams,
    id: topic.id,
  }).toString();

  return (
    <Link href={`${pathname}?${urlParams}`}>
      <ButtonSpotlight
        pill="roundedFull"
        spaceSide="space"
        className={`flex items-center border ${params.get("id") === topic?.id?.toString() ? "gradient-secondary text-white" : "bg-white"}`}
        onClick={() => {
          setPage(0);
          if (setOpen) setOpen();
        }}
      >
        <div className="text-base">{topic.title}</div>
      </ButtonSpotlight>
    </Link>
  );
}
