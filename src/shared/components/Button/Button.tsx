import { ButtonHTMLAttributes } from "react";
import { TButtonColor, TButtonVariant } from "../../../theme/types";
import { getClassNames } from "./Buttons.styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TButtonVariant;
  color?: TButtonColor;
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export function Button({
  variant = "text",
  color = "primary",
  children,
  startIcon,
  endIcon,
  ...rest
}: Readonly<IButtonProps>) {
  const classNames = getClassNames(variant, color);
  return (
    <button className={`inline-flex items-center ${classNames}`} {...rest}>
      {startIcon && <span className="inline-flex mr-1">{startIcon}</span>}
      <span className="inline-flex">{children}</span>
      {endIcon && <span className="inline-flex ml-1">{endIcon}</span>}
    </button>
  );
}
