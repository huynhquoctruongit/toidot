"use client";

import React, { useState } from "react";
import Image from "next/image";

import ButtonSpotlight from "@/components/common/button-spotlight";
import ButtonCommon from "@/components/common/button-common";
import { ICollection } from "@/types/collection";

type IProps = {
  collections: ICollection[];
};

export default function HeadLearningTopic({ collections }: IProps) {
  return (
    <div className="content-top bg-gradient-basic w-full">
      {collections.map((collection) => (
        <div
          className="container mx-auto grid grid-cols-3 py-10"
          key={collection.id}
        >
          <div className="col-span-2">
            <div className="grid gap-8">
              <div className="collections-center flex">
                <ButtonCommon
                  pill="rounded"
                  color={collection.id % 2 === 0 ? "primary1" : "secondary1"}
                  spaceSide="space"
                >
                  <div className="text-3xl font-bold text-white">
                    {collection.id}
                  </div>
                </ButtonCommon>
                <div className="ml-10 text-xl font-bold uppercase">
                  Chủ đề {collection.title}
                </div>
              </div>
              <div className="content max-w-2xl text-[#2E2E2E] opacity-80">
                {collection.description
                  ? collection.description
                  : "Cải thiện kỹ năng giao tiếp: Bạn có thể giao tiếp hiệu quả hơn trong các tình huống hàng ngày, chẳng hạn như mua sắm, đặt món ăn, hỏi đường, và tham gia các cuộc trò chuyện đơn giản."}
              </div>
              <div>
                <ButtonSpotlight
                  type="button"
                  color="gradientPrimary"
                  pill="roundedFull"
                  spaceSide="space"
                  //   onClick={() => {
                  //     comfirmTopic.onTrue();
                  //   }}
                  className="text-white"
                >
                  Luyện tập ngay
                </ButtonSpotlight>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <Image
              src="/images/image 17.png"
              alt="logo"
              width={339}
              height={265}
              priority
              quality={100}
              className="flex object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
