import { cva, VariantProps } from "class-variance-authority";

const button = cva(["flex items-center gap-1 duration-200 rounded-full"], {
  variants: {
    variant: {
      primary: ["bg-primary-01 text-dark-05 hover:bg-primary-06", "hover:bg-primary-06 disbaled:bg-slate-50"],
      "disabled-primary": ["bg-neutral-06 text-light-03"],
      "border-primary": "border-primary-01 text-primary-01 hover:border-primary-06 ",
      secondary: ["bg-neutral-06 border-2 border-transparent", "text-light-01", "border-neutral-05", "hover:border-neutral-03"],

      "border-secondary": [
        "border-neutral-06 border text-light-02 border-neutral-05",
        "hover:bg-neutral-05 hover:text-light-01 hover:border-neutral-03",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-button py-2 px-4"],
    },
  },
  compoundVariants: [
    {
      variant: "primary",
      size: "medium",
      class: "",
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

type variantProps = "primary" | "secondary" | "border-primary" | "border-secondary" | "disabled-primary" | any;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
  variant?: variantProps;
}
export const Button: React.FC<ButtonProps> = ({ className, disabled, variant = "primary", size, ...props }) => (
  <button
    disabled={disabled}
    className={button({ variant: disabled ? "disabled-" + variant : variant, size, className })}
    {...props}
  />
);
