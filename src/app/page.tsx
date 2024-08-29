import Button from "@/components/common/button";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tôi dốt",
  description: "Tôi dốt",
  keywords: "Tôi dốt",
};

export default function Home() {
  return (
    <div className="content flex flex-col items-center h-full">
      <div className="text-[20px]">Chào mừng cậu đến với</div>
      <div className="text-[40px] text-[#2b2b2b] font-bold">Tôi dốt</div>
      <div className="text-[14px]">
        Lấy lại căn bản tiếng anh hoàn toàn miễn phí
      </div>
      <div>
        <Button
          invert
          type="button"
          className="background-gradient-1 text-white px-4 flex items-center"
        >
          Luyện tập ngay
        </Button>
        <div></div>
      </div>
      <div>BẠN KHÔNG MỘT MÌNH</div>
    </div>
  );
}
