import React from "react";
import { Skeleton } from "../ui/skeleton";

export default function SkeletonUI() {
  return (
    <div className="cursor-pointer rounded-[8px] border">
      <div className="grid grid-cols-3">
        <div className="thumnail-choose-table col-span-1 flex items-center justify-center border-r bg-[#FFAA00] bg-opacity-5">
          <div className="flex w-full items-center justify-center p-1 md:h-[100px]">
            <Skeleton className="flex size-[90px] items-center rounded" />
          </div>
        </div>

        <div className="col-span-2 ml-2 flex flex-col justify-between p-1 text-[14px] text-[#2E2E2E]">
          <div>
            <Skeleton className="h-4 w-[150px] uppercase"></Skeleton>
            <Skeleton className="mt-2 h-4 w-[100px] opacity-30"></Skeleton>
          </div>
          <Skeleton className="h-4 w-[120px] capitalize opacity-80"></Skeleton>
        </div>
      </div>
    </div>
  );
}
