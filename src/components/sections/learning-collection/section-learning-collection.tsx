"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ButtonSpotlight from "@/components/common/button-spotlight";
import ButtonCommon from "@/components/common/button-common";
import useSWR from "swr";
import SplashScreen from "@/components/common/splash-screen";

export default function SectionLearningCollection() {
  const router = useRouter();
  const { data: collection, isLoading } = useSWR("/items/collection?fields=*");
  const [active, setActive] = useState(false);

  if (isLoading || active) return <SplashScreen />;

  return (
    <div className="content container mx-auto">
      <div className="relative grid gap-10 px-40 pb-40">
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
        {(collection?.data || []).map((item: any) => (
          <div className="basic-topic grid gap-3" key={item.id}>
            <div className="title-basic flex items-center justify-between">
              <div className="flex items-center">
                <ButtonCommon
                  pill="rounded"
                  color={item.id % 2 === 0 ? "primary1" : "secondary1"}
                  spaceSide="space"
                >
                  <div className="text-3xl font-bold text-white">{item.id}</div>
                </ButtonCommon>
                <div className="ml-10 text-xl font-bold uppercase">
                  Chủ đề {item.title}
                </div>
              </div>
              <ButtonSpotlight
                type="button"
                color="gradientPrimary"
                pill="roundedFull"
                className="text-[14px] text-white"
                spaceSide="default"
                onClick={() => {
                  setActive(true);
                  router.push(`/learning-collection/${item.id}`);
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
                      {/* {item.word.length} */} 100
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
                    {/* {item.word.length} */} 100
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
