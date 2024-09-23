import React, { useRef, useState } from "react";

import Image from "next/image";
import Progress from "@/components/common/progress";
import { IWord } from "@/types/word";
import { MyImage } from "@/components/common/image";
import AxiosClient from "@/lib/api/axios-client";

export default function ChooseActionDoing({
  practiceWord,
  word,
}: {
  practiceWord: IWord[];
  word: IWord;
}) {
  const timeoutId = useRef<NodeJS.Timeout>();

  const inittial = 10;

  const [percentage, setPercentage] = useState<number>(inittial);

  const handleStop = () => {
    clearInterval(timeoutId.current);
  };

  const [active, setActive] = useState<number | null>(null);

  const [disabled, setDisabled] = useState(false);

  const [error, setError] = useState("");

  const [choose, setChoose] = useState<number | null>(null);

  const hanldeAnswer = async (item: IWord) => {
    try {
      if (word.id === item.id) {
        setActive(item.id);
        setError("Trả lời đúng rồi!");
      } else setError("Sai rồi!");
      setChoose(item.id);
      setDisabled(true);
      handleStop();
      await AxiosClient.post(`items/vocab_anwer`, {
        status: "published",
        word,
        answer: item.title,
        correct:
          word.id === item.id && word.title === item.title ? true : false,
        extra: `{ "duration": ${percentage}, "question": "${word.title}", "answer": "${item.title}" }`,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="progress-timing">
        <Progress
          inittial={inittial}
          setPercentage={setPercentage}
          percentage={percentage}
          timeoutId={timeoutId}
          setDisabled={setDisabled}
          setError={setError}
        />
      </div>
      <div
        className={`text-xs ${active === word?.id ? "text-[#226960]" : "text-red-700"}`}
      >
        {error}
      </div>
      <div className="thumbnail grid grid-flow-col gap-10">
        {(practiceWord || []).map((item, index) => (
          <ChooseAction
            key={item?.id ? item?.id : index}
            item={item}
            hanldeAnswer={hanldeAnswer}
            active={active}
            disabled={disabled}
            choose={choose}
          />
        ))}
      </div>
    </>
  );
}

function ChooseAction({
  item,
  active,
  hanldeAnswer,
  disabled,
  choose,
}: {
  item: IWord;
  active: number | null;
  hanldeAnswer: (item: IWord) => void;
  disabled: boolean;
  choose: number | null;
}) {
  return (
    <>
      {item?.image?.id && (
        <div className="flex cursor-pointer flex-col items-center gap-3">
          <button
            className={`size-[124px] rounded-[6px] border-[2px] p-1 ${active === item.id ? "border-solid border-[#226960]" : "border-dashed"} ${choose === item.id && "border-[#226960]"} `}
            onClick={() => {
              hanldeAnswer(item);
            }}
            disabled={disabled}
          >
            <MyImage
              src={item?.image?.id}
              width={120}
              height={120}
              className="relative flex h-full w-full items-center rounded object-contain"
            />
          </button>
          <div className="max-w-[124px] text-center">{item?.meanings}</div>
        </div>
      )}
    </>
  );
}
