"use client";
type IColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info";

type IPill = "default" | "rounded";

interface IButtonCommon {
  color?: IColor;
  icon?: string;
  children: string | any;
  className?: string;
  pill?: IPill;
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
  rounded: "rounded-full",
};

const ButtonCommon = ({
  color = "primary",
  children,
  className,
  pill = "default",
  icon,
  onClick,
}: IButtonCommon) => {
  const base = "text-white text-right relative px-4 py-4 w-[200px]";

  return (
    <button
      className={`${base} ${colors[color]} ${pills[pill]} ${className} `}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
};
export default ButtonCommon;
