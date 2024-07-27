"use client";

type IColor = "primary" | "primary2" | "secondary" | "bordered";
type IPill = "default" | "rounded";
interface IButton {
  color?: IColor;
  children: string | any;
  className?: string;
  classNameWrap?: string;
  pill?: IPill;
  onClick?: (...arg: any) => void;
  invert?: boolean;
  type?: "button" | "submit" | "reset";
}

const colors = {
  primary: "bg-primary-01 text-white hover:bg-primary-06",
  primary2: "bg-primary-02 text-primary1 hover:bg-primary-03",
  secondary: "bg-secondary text-white",
  bordered: "bg-white text-black hover:bg-neu6",
};

const borderBottom = {
  primary: "border-b-[#df8200]",
  primary2: "border-b-[#df8200]",
  secondary: "border-b-[#2e2e41]",
  bordered: "",
};

const colorInvert = {
  primary: "border-primary-01 bg-white",
  primary2: "bg-primary-02 text-primary1 hover:bg-primary-03 border-primary-01 border-[1px]",
  secondary: "border border-secondary bg-white text-light-02 hover:border-secondary/70",
  bordered:
    "border border-neutral-06 bg-white text-light-02 hover:text-light-01 hover:fill-light-01 fill-light-02 hover:border-light-02 hover:bg-neu6 hover:border-neu6",
};

const pills = {
  default: "rounded-[20px]",
  rounded: "rounded-full",
};
const Button = ({
  color = "primary",
  children,
  type = "button",
  className,
  onClick = () => {},
  invert = false,
  pill = "default",
}: IButton) => {
  const clsColor = !invert ? colors[color] : colorInvert[color];
  const bottom = borderBottom[color];
  const clsPill = pills[pill];
  const base = "px-4 py-[8px] duration-200 text-button-small relative z-10";
  return (
    <button type={type} onClick={onClick} className={`${base} ${clsColor} ${clsPill} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
