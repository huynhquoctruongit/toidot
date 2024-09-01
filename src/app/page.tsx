import Button from "@/components/common/button";
import ButtonCommon from "@/components/common/button-common";
import { PlayIcon } from "@heroicons/react/24/solid";
import {
  BookA,
  GraduationCap,
  Grid2x2Check,
  NotebookText,
  Youtube,
} from "lucide-react";

import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tôi dốt",
  description: "Tôi dốt",
  keywords: "Tôi dốt",
};

export default function Home() {
  return (
    <>
      <div className="content flex h-full flex-col items-center justify-around">
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
            # Hãy vào website mỗi ngày để có thói quen và động lực học nhé ahihi
          </div>
          <div className="max-w-[350px] py-5 text-center leading-6">
            Chúng tớ DỐT nhưng muốn cậu giỏi 😍
          </div>
        </div>
        <div className="socical-icon flex w-[910px] items-center justify-between">
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
    </>
  );
}
