import React from "react";
import Modal from "@/components/modal";
import { CircleCheck, Loader2 } from "lucide-react";
import Button from "@/components/common/button";

type ISelectionChoose = {
  id: string | number;
  title: string;
  check?: boolean;
  loading?: boolean;
};

const selectionChoose: ISelectionChoose[] = [
  {
    id: 1,
    title: "Tất cả",
    check: false,
    loading: false,
  },

  {
    id: 2,
    title: "Động vật và thiên nhiên ",
    check: false,
    loading: true,
  },
  {
    id: 3,
    title: "Gia đình và bạn bè",
    check: false,
    loading: true,
  },
  {
    id: 4,
    title: "Ngày tháng và thời tiết",
    check: false,
    loading: true,
  },
  {
    id: 5,
    title: "Thực phẩm và đồ uống",
    check: false,
    loading: false,
  },
  {
    id: 6,
    title: "Động vật và thiên nhiên ",
    check: true,
    loading: false,
  },
  {
    id: 8,
    title: "Gia đình và bạn bè ",
    check: false,
    loading: false,
  },
  {
    id: 9,
    title: "Ngày tháng và thời tiết ",
    check: false,
    loading: true,
  },
  {
    id: 10,
    title: "Thực phẩm và đồ uống ",
    check: false,
    loading: false,
  },
  {
    id: 11,
    title: "Động vật và thiên nhiên ",
    check: true,
    loading: false,
  },
  {
    id: 12,
    title: "Ngày tháng và thời tiết ",
    check: false,
    loading: false,
  },
  {
    id: 13,
    title: "Thực phẩm và đồ uống ",
    check: true,
    loading: false,
  },
];

type IProps = {
  isOpen: boolean;
  setOpen: VoidFunction;
};

export default function ModalChooseTopic({ isOpen, setOpen }: IProps) {
  return (
    <Modal isOpen={isOpen} setOpen={setOpen} className="choose-topic">
      <div className="max-w-4xl rounded-[10px] bg-white px-6 py-5">
        <div className="grid gap-4 text-center">
          <div className="text-xl font-bold">Chọn chủ đề </div>
          <div className="text-[#2E2E2E] text-opacity-30">
            Chọn chủ đề để bắt đầu luyện tập ngay
          </div>
          <div className="flex max-w-full flex-wrap gap-4">
            {selectionChoose.slice(2, 9).map((item) => (
              <Button invert key={item.id} className="flex items-center border">
                <div className="text-base">{item.title}</div>
                <div className="icon-check-loading ml-2">
                  {item.check ? (
                    <CircleCheck
                      className="size-5"
                      fill="#188E7E"
                      color="white"
                    />
                  ) : (
                    <Loader2 className="size-4 text-[#25A28D]" />
                  )}
                </div>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}
