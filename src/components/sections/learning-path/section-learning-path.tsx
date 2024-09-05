"use client";
import React from "react";

import Button from "@/components/common/button";
import { useRouter } from "next/navigation";
import ButtonSpotlight from "@/components/common/button-spotlight";
import ButtonCommon from "@/components/common/button-common";

export default function SectionLearningPath() {
  const router = useRouter();

  return (
    <div className="content container relative mx-auto">
      <div className="grid gap-10 px-40 pb-40">
        <div className="title-learning-path text-center text-2xl font-bold leading-9">
          LỘ TRÌNH HỌC TỪ VỰNG CỦA CHÚNG MÌNH
        </div>
        <div className="description grid gap-5 text-[20px]">
          <div>
            "Việc học từng từ vựng tiếng Anh mới là từng bước nhỏ dẫn đến hành
            trình lớn lao của sự thành công và khám phá thế giới!" -
          </div>
          <div>
            "Từ vựng là sức mạnh giúp bạn chinh phục tiếng Anh và mở rộng thế
            giới của mình."
          </div>
          <div>
            "Học tiếng Anh mỗi ngày là đầu tư vào chính tương lai tươi sáng của
            bạn."
          </div>
          <div className="text-right text-[#2E2E2E] text-opacity-80">
            ChatGPT
          </div>
        </div>

        <div className="basic-topic grid gap-3">
          <div className="title-basic flex items-center justify-between">
            <div className="flex items-center">
              <ButtonCommon
                pill="rounded"
                className="btn-secondary1"
                spaceSide="space"
              >
                <div className="text-3xl font-bold text-white">1</div>
              </ButtonCommon>
              <div className="ml-10 text-xl font-bold uppercase">
                Chủ đề cơ bản
              </div>
            </div>
            <ButtonSpotlight
              type="button"
              color="gradientPrimary"
              pill="roundedFull"
              className="text-[14px] text-white"
              spaceSide="default"
              onClick={() => {
                router.push("/learning-path/basic-topic");
              }}
            >
              Bắt đầu học
            </ButtonSpotlight>
          </div>

          <div className="grid grid-cols-3 bg-white text-base">
            <div className="content-left col-span-2 rounded-bl rounded-tl border-y border-l p-4">
              <div className="grid gap-16">
                <div className="top-content">
                  <div className="btn-item flex items-center gap-1">
                    <button className="background-gradient-1 rounded border p-2"></button>
                    <button className="background-gradient-1 rounded border p-2"></button>
                    <button className="rounded border bg-[#2E2E2E] p-2 opacity-20"></button>
                    <button className="rounded border bg-[#2E2E2E] p-2 opacity-20"></button>
                  </div>
                  <div className="opacity-50">
                    <div>Gia đình và bạn bè: bố, mẹ, anh, chị.. </div>
                    <div>Đồ dùng hàng ngày: bàn,ghế, bút, sách...</div>
                    <div> Màu sắc: đỏ, xanh, vàng, trắng... </div>
                    <div>Số đếm: một,hai, ba, bốn, v.v.</div>
                    <div>Thời gian: ngày, tháng, năm, giờ, phút...</div>
                  </div>
                </div>
                <div className="flex items-center text-[14px]">
                  <div className="text-[#2e2e2e] opacity-80">Từ vựng</div>
                  <span className="ml-3 rounded border px-1 py-[1px] font-bold">
                    100
                  </span>
                </div>
              </div>
            </div>

            <div className="content-right grid gap-16 rounded-br rounded-tr border p-4">
              <div className="grid gap-3">
                <div className="top-content flex flex-col">
                  <div className="flex gap-1">
                    <button className="rounded border bg-[#2E2E2E] p-2 opacity-20"></button>
                    <button className="rounded border bg-[#2E2E2E] p-2 opacity-20"></button>
                  </div>
                  <div>
                    <div className="opacity-50">Hiện tại đơn</div>
                    <li className="m text-[14px] italic">The sun is hot </li>
                  </div>
                  <div>
                    <div className="opacity-50">Hiện tại tiếp diễn</div>
                    <li className="text-[14px] italic">
                      I’am leanrning English
                    </li>
                  </div>
                </div>
              </div>
              <div className="flex items-center text-[14px]">
                <div className="text-[#2e2e2e] opacity-80">Từ vựng</div>
                <span className="ml-3 rounded border px-1 py-[1px] font-bold">
                  100
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="popular-topics grid gap-3">
          <div className="title-basic flex items-center justify-between">
            <div className="flex items-center">
              <ButtonCommon
                pill="rounded"
                className="btn-primary1"
                spaceSide="space"
              >
                <div className="text-3xl font-bold text-white">2</div>
              </ButtonCommon>
              <div className="ml-10 text-xl font-bold uppercase">
                Chủ đề thông dụng
              </div>
            </div>
            <ButtonSpotlight
              type="button"
              color="gradientPrimary"
              pill="roundedFull"
              className="text-[14px] text-white"
              spaceSide="default"
            >
              Bắt đầu học
            </ButtonSpotlight>
          </div>

          <div className="grid grid-cols-3 bg-white text-base">
            <div className="content-left col-span-2 rounded-bl rounded-tl border-y border-l p-4">
              <div className="grid gap-16">
                <div className="top-content">
                  <div className="btn-item flex items-center gap-1">
                    <button className="background-gradient-1 rounded border p-2"></button>
                    <button className="background-gradient-1 rounded border p-2"></button>
                    <button className="rounded border bg-[#2E2E2E] p-2 opacity-20"></button>
                    <button className="rounded border bg-[#2E2E2E] p-2 opacity-20"></button>
                  </div>
                  <div className="opacity-50">
                    <div>Thức ăn và đồ uống: cơm, bánh mì, nước...</div>
                    <div>Động vật: chó, mèo, cá, chim...</div>
                    <div>Công việc và nghề nghiệp: giáo viên,...</div>
                    <div>Phương tiện giao thông: xe đạp, ô tô...</div>
                    <div>Thời tiết: nắng, mưa, gió, tuyết..</div>
                  </div>
                </div>
                <div className="flex items-center text-[14px]">
                  <div className="text-[#2e2e2e] opacity-80">Từ vựng</div>
                  <span className="ml-3 rounded border px-1 py-[1px] font-bold">
                    100
                  </span>
                </div>
              </div>
            </div>

            <div className="content-right grid gap-16 rounded-br rounded-tr border p-4">
              <div className="top-content flex flex-col">
                <div className="flex gap-1">
                  <button className="rounded border bg-[#2E2E2E] p-2 opacity-20"></button>
                  <button className="rounded border bg-[#2E2E2E] p-2 opacity-20"></button>
                </div>
                <div className="grid gap-3">
                  <div>
                    <div className="opacity-50">Hiện tại đơn</div>
                    <li className="m text-[14px] italic">The sun is hot </li>
                  </div>
                  <div>
                    <div className="opacity-50">Hiện tại tiếp diễn</div>
                    <li className="text-[14px] italic">
                      I’am leanrning English
                    </li>
                  </div>
                </div>
              </div>
              <div className="flex items-center text-[14px]">
                <div className="text-[#2e2e2e] opacity-80">Từ vựng</div>
                <span className="ml-3 rounded border px-1 py-[1px] font-bold">
                  100
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
