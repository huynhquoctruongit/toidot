import ButtonSpotlight from "@/components/common/button-spotlight";
import React from "react";

export default function HeadVocabulary({
  doingAction,
  words,
  onClick,
}: {
  doingAction?: VoidFunction;
  words: any;
  onClick: VoidFunction;
}) {
  return (
    <div className="learning-top flex items-center justify-between">
      <div className="title-learning">
        <div className="flex items-center text-xl font-bold leading-[30px]">
          <span className="text-gradient-1">{words}&ensp;</span>Từ vựng
        </div>
        <div className="mt-2 text-[14px]">Danh sách từ vựng bla bla</div>
      </div>
      <div>
        <ButtonSpotlight
          type="button"
          color="gradientPrimary"
          pill="roundedFull"
          spaceSide="default"
          onClick={onClick}
          className="text-[14px] text-white"
        >
          Luyện tập
        </ButtonSpotlight>
      </div>
    </div>
  );
}
