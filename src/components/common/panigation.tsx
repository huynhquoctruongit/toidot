import { ChevronRightIcon } from "lucide-react";
import React from "react";

type IProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  pages: any;
};

export default function Panigation({ page, pages, setPage }: IProps) {
  return (
    <nav className="woocommerce-pagination">
      <ul className="page-numbers flex items-center">
        {Array(pages)
          .fill(null)
          .map((element: any, index: number) => {
            return (
              <li
                key={index + "arrayket"}
                className={
                  "button-contact mx-2 flex size-10 cursor-pointer items-center justify-center rounded-full border text-center leading-[40px] transition-all duration-300 ease-in-out hover:bg-[#fef7f5] " +
                  (index === page
                    ? "gradient-secondary text-white"
                    : "bg-[#f2f2f2]")
                }
                onClick={() => setPage(index)}
              >
                <a className="page-numbers">{index + 1}</a>
              </li>
            );
          })}
        {pages > 0 && (
          <li
            onClick={() => {
              if (page + 1 >= pages) return;
              setPage((state: number) => state + 1);
            }}
            className={
              "mx-2 flex size-10 cursor-pointer items-center justify-center rounded-full border bg-[#fef7f5] text-center leading-[40px] transition-all duration-300 ease-in-out " +
              (page + 1 >= pages ? "" : "hover:bg-[#f2f2f2]")
            }
          >
            <a
              className={
                "next page-numbers " + (page + 1 >= pages ? " opacity-30" : " ")
              }
            >
              {" "}
              <ChevronRightIcon className="size-3 text-black" />
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
