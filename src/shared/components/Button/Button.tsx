import { ButtonHTMLAttributes } from "react";
import { TButtonColor, TButtonVariant } from "../../../theme/types";
import { getClassNames } from "./Buttons.styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TButtonVariant;
  color?: TButtonColor;
  children: React.ReactNode;
}

export function Button({
  variant = "text",
  color = "primary",
  children,
  ...rest
}: Readonly<IButtonProps>) {
  const classNames = getClassNames(variant, color);
  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
}
