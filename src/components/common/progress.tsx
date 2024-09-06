"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Progress() {
  const inittial = 15;

  const [percentage, setPercentage] = useState<number>(inittial);
  const radius = 20;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / inittial;
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (percentage > 0) {
        setPercentage((prevPercentage) => prevPercentage - 1);
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
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
