import React from "react";
import Image from "next/image";

type IStructure = {
  id: string | number;
  v: string;
};

const regularVerbs: IStructure[] = [
  {
    id: 1,
    v: "- (+) S + V(s/es) + O",
  },
  {
    id: 2,
    v: "(-) S + don’t/ doesn’t + V + O",
  },
  {
    id: 3,
    v: "(?) Do/Does + V + O?",
  },
  {
    id: 4,
    v: "(?) WH-word + am/ are/ is + S +…?",
  },
];

const verbToBe: IStructure[] = [
  {
    id: 1,
    v: "(+) S + am/ are/ is + N/ Adj ",
  },
  {
    id: 2,
    v: "(-) S + am/ are/ is + not + N/ Adj",
  },
  {
    id: 3,
    v: "(?) Am/ Are/ is + S + N/ Adj?",
  },
  {
    id: 4,
    v: "(?) WH-word + am/ are/ is + S +…?",
  },
];

type IExamle = {
  id: string | number;
  title: string;
  ex: string;
  thumnail: string;
};

const exampleDescription: IExamle[] = [
  {
    id: 1,
    title: "Diễn tả một thói quen hay hành động được lặp đi lặp lại.",
    ex: "She goes to the gym every day. Vietnamese: Cô ấy đi tập gym mỗi ngày.",
    thumnail: "/images/image 20.png",
  },
  {
    id: 2,
    title: "Diễn tả một sự thật hiển nhiên.",
    ex: "The sun rises in the east. Vietnamese: Mặt trời mọc ở phía đông.",
    thumnail: "/images/image 22.png",
  },
  {
    id: 3,
    title:
      "Diễn tả sự việc đã có kế hoạch từ trước và sẽ xảy ra trong tương lai (thời gian biểu, lịch trình định sẵn, thời khóa biểu).",
    ex: "The train leaves at 7 AM tomorrow. Vietnamese: Tàu rời ga lúc 7 giờ sáng mai.",
    thumnail: "/images/image 23.png",
  },
  {
    id: 4,
    title: "Diễn tả khả năng, năng lực của một người.",
    ex: "He speaks three languages fluently. Vietnamese: Anh ấy nói lưu loát ba ngôn ngữ.",
    thumnail: "/images/image 24.png",
  },
  {
    id: 5,
    title: "Dùng trong câu điều kiện loại 1 mệnh đề “if” (dạng 0 +1).",
    ex: "If it rains, we stay indoors. Vietnamese: Nếu trời mưa, chúng ta sẽ ở trong nhà.",
    thumnail: "/images/image 26.png",
  },
];

export default function GrammarChoose() {
  return (
    <>
      <div className="title-description flex items-center justify-center">
        <div className="grid max-w-3xl gap-4">
          <div className="text-[30px] font-bold">Simple Present Tense</div>
          <div className="decoration text-[14px] leading-8 text-gray-700">
            Thì hiện tại đơn: Diễn tả một thói quen hay hành động được lặp đi
            lặp lại. Diễn tả một sự thật hiển nhiên. Diễn tả sự việc đã có kế
            hoạch từ trước và sẽ xảy ra trong tương lai (thời gian biểu, lịch
            trình định sẵn, thời khóa biểu). Diễn tả khả năng, năng lực của một
            người. Dùng trong câu điều kiện loại 1 mệnh đề “if” (dạng 0 +1).
          </div>
        </div>
      </div>

      <div className="table-structure relative grid grid-cols-2 rounded-[8px] border border-[#2E2E2E] border-opacity-80 bg-white">
        <div className="grid grid-cols-3 items-center gap-2 border-r border-[#2E2E2E] border-opacity-80 p-6">
          <div className="col-span-2 grid gap-2">
            <div className="title-structure text-xl font-bold">
              Cấu trúc với động từ thường:
            </div>
            <div className="structure-regular-verbs grid gap-2">
              {regularVerbs.map((item) => (
                <div
                  key={item.id}
                  className="w-fit rounded-[6px] border border-dashed px-2 py-1"
                >
                  {item.v}
                </div>
              ))}
            </div>
          </div>
          <Image
            src="/images/ahihi 1.png"
            alt="logo"
            width={200}
            height={152}
            priority
            quality={100}
            className="flex object-cover"
          />
        </div>
        <div className="grid grid-cols-3 items-center gap-2 p-6">
          <div className="col-span-2 grid gap-2">
            <div className="title-structure text-xl font-bold">
              Cấu trúc với động từ “to be”:
            </div>
            <div className="structure-regular-verbs grid gap-2">
              {verbToBe.map((item) => (
                <div
                  key={item.id}
                  className="w-fit rounded-[6px] border border-dashed px-2 py-1"
                >
                  {item.v}
                </div>
              ))}
            </div>
          </div>
          <Image
            src="/images/cute.png"
            alt="logo"
            width={120}
            height={100}
            priority
            quality={100}
            className="flex object-cover"
          />
        </div>
      </div>

      <div className="example-description grid items-center justify-center gap-10">
        {exampleDescription.map((item) => (
          <div key={item.id} className={`grid max-w-3xl grid-flow-col gap-10`}>
            <div
              className={`max-w-3xl leading-[30px] ${Number(item.id) % 2 === 0 ? "order-last" : ""}`}
            >
              <div className="title-ex font-bold">{item.title}</div>
              <div className="example text-[14px]">Example : {item.ex}</div>
            </div>
            <div className="thumnail h-[150px] w-[300px] rounded p-[1px] shadow-md">
              <Image
                src={item.thumnail}
                alt="logo"
                width={300}
                height={150}
                priority
                quality={100}
                className="flex object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
