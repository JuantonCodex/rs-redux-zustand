import { TButtonColor, TButtonVariant } from "../../theme/types";
import { getClassNames } from "./Buttons.styles";

interface IButtonProps {
  variant?: TButtonVariant;
  color?: TButtonColor;
  children: React.ReactNode;
}

export function Button({
  variant = "text",
  color = "primary",
  children,
}: Readonly<IButtonProps>) {
  const classNames = getClassNames(variant, color);
  return <button className={classNames}>{children}</button>;
}
