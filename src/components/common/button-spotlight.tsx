"use client";

type IColor =
  | "default"
  | "gradientSecondary"
  | "gradientPrimary"
  | "gradientSuccess"
  | "gradientLight";

type IPill = "default" | "rounded" | "roundedFull";

type ISpaceSides =
  | "default"
  | "space"
  | "spaceSm"
  | "space_1"
  | "space_2"
  | "space_3";

const colors = {
  default: "bg-white",
  gradientSecondary: "gradient-secondary",
  gradientPrimary: "gradient-primary",
  gradientSuccess: "gradient-success",
  gradientLight: "gradient-light",
};

const pills = {
  default: "rounded",
  rounded: "rounded-[10px]",
  roundedFull: "rounded-full",
};

const spaceSides = {
  default: "px-6 py-2",
  space: "py-3.5 px-6",
  spaceSm: "px-4 py-2",
  space_1: "px-4 py-1",
  space_2: "px-4 py-2",
  space_3: "px-4 py-3",
};

interface IButtonSpotlight {
  color?: IColor;
  icon?: string;
  children: string | any;
  className?: string;
  pill?: IPill;
  spaceSide?: ISpaceSides;
  onClick?: (...arg: any) => void;
  type?: "button" | "submit" | "reset";
}

export default function ButtonSpotlight({
  color = "default",
  children,
  className,
  pill = "default",
  spaceSide = "default",
  icon,
  onClick,
}: IButtonSpotlight) {
  const base =
    "relative flex items-center text-center duration-200 z-[10] ease-linear";
  return (
    <button
      className={`${base} ${colors[color]} ${pills[pill]} ${spaceSides[spaceSide]} ${className}`}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
}
