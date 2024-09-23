"use client";
import React, { useEffect, useState } from "react";

type IProps = {
  inittial: number;
  setPercentage: React.Dispatch<React.SetStateAction<number>>;
  percentage: number;
  timeoutId: React.MutableRefObject<NodeJS.Timeout | undefined>;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
};

export default function Progress({
  inittial,
  setPercentage,
  percentage,
  timeoutId,
  setDisabled,
  setError,
}: IProps) {
  const radius = 20;

  const dashArray = radius * Math.PI * 2;

  const dashOffset = dashArray - (dashArray * percentage) / inittial;

  useEffect(() => {
    if (percentage > 0) {
      timeoutId.current = setInterval(() => {
        setPercentage((prevPercentage) => prevPercentage - 1);
      }, 1000);
    }
    if (percentage === 0) {
      setDisabled(true);
      setError("Sao không trả lời đi bạn? Không còn cơ hội nữa rồi!");
    }
    return () => clearInterval(timeoutId.current);
  }, [percentage]);

  return (
    <div className="flex items-center">
      <div className="relative">
        <svg width={50} height={50} viewBox={`0 0 50 50`}>
          <circle
            cx={50 / 2}
            cy={50 / 2}
            strokeWidth={5}
            r={20}
            className="circle-backgroud"
          />
          <circle
            cx={50 / 2}
            cy={50 / 2}
            strokeWidth={5}
            r={20}
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
            className="circle-progress"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="rotate(-90 25 25)"
          />
          <text x="50%" y="60%" textAnchor="middle" className="circle-text">
            {percentage}
          </text>
        </svg>
      </div>
      <input
        type="range"
        className="w-0 opacity-0"
        min={1}
        max={inittial}
        value={percentage}
        onChange={(e) => {
          setPercentage(Number(e.target.value));
        }}
      />
    </div>
  );
}
