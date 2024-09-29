import { IWord } from "@/types/word";
import ModalChooseDetail from "../modal-choose/modal-choose-detail";
import HeadVocabulary from "./head-vocabulary";
import Panigation from "@/components/common/panigation";
import ItemWord from "./item-word";
import ModalChooseDoing from "../modal-choose/modal-choose-doing";
import SkeletonUI from "@/components/common/skeleton";
import { useState } from "react";
import { useBoolean } from "usehooks-ts";

type IProps = {
  length: number;
  pages: number;
  words: IWord[];
  limit: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  isLoading: boolean;
  onClick: VoidFunction;
};

export default function WordVocabulary({
  page,
  setPage,
  length,
  pages,
  words,
  limit,
  isLoading,
  onClick,
}: IProps) {
  const activeItemWord = useBoolean();

  const [idItemWord, setIdItemWord] = useState<number | null>();

  const hanldeShowModalItemWord = (id: number) => {
    activeItemWord.setTrue();
    setIdItemWord(id);
  };
  return (
    <>
      <HeadVocabulary words={length} onClick={onClick} />
      <div className="learning-bottom grid grid-cols-4 gap-6">
        <>
          {words?.map((word: IWord, index: number) => (
            <div key={word.id}>
              <ItemWord
                word={word}
                onClick={hanldeShowModalItemWord}
                index={index}
              />

              {idItemWord === index && (
                <ModalChooseDetail
                  isOpen={activeItemWord.value}
                  setOpen={activeItemWord.setFalse}
                  itemWord={word}
                  setIdItemWord={setIdItemWord}
                  index={index}
                  limit={limit}
                />
              )}
            </div>
          ))}
        </>
      </div>
      {words && words.length > 0 && (
        <Panigation page={page} setPage={setPage} pages={pages} />
      )}
    </>
  );
}
