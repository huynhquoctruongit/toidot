"use client";
import Button from "@/components/common/button";
import ButtonCommon from "@/components/common/button-common";
import { PlayIcon } from "@heroicons/react/24/solid";
import {
  BookA,
  GraduationCap,
  Grid2x2Check,
  NotebookText,
  Youtube,
  BookOpen,
  BookType,
  BoomBox,
  LockOpen,
} from "lucide-react";

import { Metadata } from "next";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const metadata: Metadata = {
  title: "Tôi dốt",
  description: "Tôi dốt",
  keywords: "Tôi dốt",
};

export default function SectionHome() {
  const router = useRouter();

  return (
    <>
      <div className="content relative h-[calc(100vh-68px)] overflow-hidden">
        <div className="flex h-full flex-col items-center justify-between">
          <div className="text-[20px]">Chào mừng cậu đến với</div>
          <div className="text-[40px] font-bold text-[#2b2b2b]">Tôi dốt</div>
          <div className="text-[14px]">
            Lấy lại căn bản tiếng anh hoàn toàn miễn phí
          </div>
          <div>
            <Button
              invert
              type="button"
              className="background-gradient-1 flex items-center px-4 text-white"
              onClick={() => {
                router.push("/learning-path");
              }}
            >
              Luyện tập ngay
              <PlayIcon className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="text-[20px] font-bold text-[#2e2e2e] opacity-80">
            BẠN KHÔNG MỘT MÌNH
          </div>

          <div className="list-btn">
            <div className="btn-see-number-student-learn grid grid-flow-col gap-10">
              <ButtonCommon color="primary">
                <Grid2x2Check className="size-6 bg-transparent stroke-[1.5] text-[#226960] opacity-40" />
                <div className="text-2xl font-bold leading-9">291 bạn</div>
                <div className="leading-6">
                  <strong>đang học</strong> <br />
                  cùng với bạn
                </div>
              </ButtonCommon>

              <ButtonCommon color="secondary">
                <GraduationCap className="size-6 bg-transparent stroke-[1.5] text-[#DE543D] opacity-40" />
                <div className="leading-6">Hôm nay có</div>
                <div className="text-2xl font-bold leading-9">200</div>
                <div className="leading-6">bài tập đã làm</div>
              </ButtonCommon>

              <ButtonCommon color="success">
                <BookA className="size-6 bg-transparent stroke-[1.5] text-[#DE543D] opacity-40" />
                <div className="leading-6">Kho từ vựng</div>
                <div className="text-2xl font-bold leading-9">
                  3000
                  <span className="text-base font-light">&nbsp;từ</span>
                </div>
                <div className="leading-6">làm tẹt ga giường</div>
              </ButtonCommon>

              <ButtonCommon color="danger">
                <NotebookText className="size-6 bg-transparent stroke-[1.5] text-[#226960] opacity-40" />
                <div className="leading-6">Nhiều phương pháp</div>
                <div className="text-2xl font-bold leading-9">ĐỘC LẠ</div>
                <div className="leading-6">Để học từ vựng</div>
              </ButtonCommon>
            </div>
          </div>

          <div className="note-suggest">
            <div className="max-w-[350px] text-center leading-6">
              # Hãy vào website mỗi ngày để có thói quen và động lực học nhé
              ahihi
            </div>
            <div className="max-w-[350px] py-5 text-center leading-6">
              Chúng tớ DỐT nhưng muốn cậu giỏi 😍
            </div>
          </div>

          <div className="socical-icon z-6 relative bottom-5 flex w-[910px] items-center justify-between">
            <div className="socical-fb">
              <Image
                src={"/images/facebook.png"}
                alt={"/facebok"}
                width={100}
                height={100}
                quality={100}
                priority
                className="size-28"
              />
            </div>

            <div className="">
              <Youtube className="size-11 bg-transparent stroke-[0.4] text-[#000000] opacity-10" />
            </div>

            <div className="socical-tiktok">
              <Image
                src={"/images/tiktok.png"}
                alt={"/facebok"}
                width={100}
                height={100}
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[60%] size-[90%] rounded-[100%] bg-[#56BEB0] bg-opacity-5"></div>
      </div>

      <div className="icon-see z-2 absolute left-2/4 top-2/4 h-[719px] w-[910px] -translate-x-2/4 -translate-y-2/4">
        <div className="icon relative size-full">
          <div className="absolute left-0 top-0">
            <BoomBox className="size-20 bg-transparent stroke-[0.4] text-[#000000] opacity-10" />
          </div>
          <div className="absolute right-[20%] top-0">
            <BookOpen className="size-20 rotate-45 bg-transparent stroke-[0.4] text-[#000000] opacity-10" />
          </div>
          <div className="absolute bottom-0 left-0">
            <BookType className="size-16 bg-transparent stroke-[0.4] text-[#000000] opacity-10" />
          </div>
          <div className="absolute bottom-0 right-0">
            <BoomBox className="size-20 bg-transparent stroke-[0.4] text-[#000000] opacity-10" />
          </div>

          <div className="absolute left-[30%] top-1/3">
            <NotebookText className="size-11 bg-transparent stroke-[0.4] text-[#000000] opacity-10" />
          </div>

          <div className="absolute right-[10%] top-1/4">
            <LockOpen className="size-11 bg-transparent stroke-[0.4] text-[#000000] opacity-10" />
          </div>
        </div>
      </div>
    </>
  );
}
