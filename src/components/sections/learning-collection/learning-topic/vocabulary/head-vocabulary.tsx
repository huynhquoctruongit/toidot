import ButtonSpotlight from "@/components/common/button-spotlight";
import React from "react";

export default function HeadVocabulary({
  doingAction,
}: {
  doingAction?: VoidFunction;
}) {
  return (
    <div className="learning-top flex items-center justify-between">
      <div className="title-learning">
        <div className="text-xl font-bold leading-[30px]">Từ vựng</div>
        <div className="mt-2 text-[14px]">Danh sách từ vựng bla bla</div>
      </div>
      <div>
        <ButtonSpotlight
          type="button"
          color="gradientPrimary"
          pill="roundedFull"
          spaceSide="default"
          // onClick={() => {
          //   doingAction();
          // }}
          className="text-[14px] text-white"
        >
          Luyện tập
        </ButtonSpotlight>
      </div>
    </div>
  );
}
