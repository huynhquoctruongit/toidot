
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tôi dốt",
  description:
    "Tôi dốt",
  keywords:
    "Tôi dốt",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-2xl font-bold">Chào mừng bạn đến với</h1>
      <h2 className="text-4xl font-extrabold mt-2">Tôi dốt</h2>
      <p className="mt-2">Lấy lại căn bản tiếng anh hoàn toàn miễn phí</p>
      <button className="mt-4 px-6 py-3 ">KHÔNG ĐỂ BẠN ĐỢI LÂU</button>
      <button className="mt-4 px-6 py-3 bg-green-700 text-white rounded-full">Luyện tập ngay</button>
      <div className="mt-8 flex space-x-4">
        <button className="min-h-20 px-6 py-3 bg-yellow-400 text-white rounded-lg font-bold">NGỮ PHÁP</button>
        <button className="min-h-20 px-6 py-3 bg-green-400 text-white rounded-lg font-bold">TỪ VỰNG</button>
        <button className="min-h-20 px-6 py-3 bg-orange-400 text-white rounded-lg font-bold">ĐỘNG TỪ</button>
        <button className="min-h-20 px-6 py-3 bg-red-400 text-white rounded-lg font-bold">GHI NHỚ</button>
      </div>
      <button className="mt-8 px-6 py-3 text-black rounded-lg">Kiểm tra trình độ hiện tại</button>
    </div>
  );
}
