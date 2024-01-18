import { TBadgeVariant } from "../../../theme/types";
import { getClassNames } from "./Badge.styles";

interface IBadgeProps {
  variant?: TBadgeVariant;
  color?: "primary" | "secondary";
  children: React.ReactNode;
}

export function Button({
  variant = "standard",
  color = "primary",
  children,
}: Readonly<IBadgeProps>) {
  const classNames = getClassNames(variant, color);
  return <div className={classNames}>{children}</div>;
}
