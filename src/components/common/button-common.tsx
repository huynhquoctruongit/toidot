"use client";
type IColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info";

type IPill = "default" | "rounded" | "roundedFull";

type ISpaceSides = "default" | "space" | "spaceSm";

interface IButtonCommon {
  color?: IColor;
  icon?: string;
  children: string | any;
  className?: string;
  pill?: IPill;
  spaceSide?: ISpaceSides;
  onClick?: (...arg: any) => void;
}

const colors = {
  default: "btn-default",
  primary: "btn-primary",
  secondary: "btn-secondary",
  success: "btn-success",
  danger: "btn-danger",
  warning: "btn-warning",
  info: "btn-info",
};

const pills = {
  default: "rounded-[10px]",
  rounded: "rounded",
  roundedFull: "rounded-full",
};

const spaceSides = {
  default: "px-4 py-4",
  space: "py-2 px-4",
  spaceSm: "px-4 py-2",
};

const ButtonCommon = ({
  color = "primary",
  children,
  className,
  pill = "default",
  icon,
  spaceSide = "default",
  onClick,
}: IButtonCommon) => {
  const base = "text-white text-right relative  max-w-[200px]";

  return (
    <button
      className={`${base} ${colors[color]} ${pills[pill]} ${spaceSides[spaceSide]} ${className} `}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
};
export default ButtonCommon;
