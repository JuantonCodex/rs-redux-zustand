import theme from "../theme/theme";
import { TBadgeVariant } from "../theme/types";

interface IBadgeProps {
  variant?: TBadgeVariant;
  color?: "primary" | "secondary";
  children: React.ReactNode;
}

export function Button({
  variant = "standard",
  color = "primary",
  children,
}: IBadgeProps) {
  const defaultClassNames = Object.values(theme.defaultStyles).join(" ");
  const variantStyles = theme.variants[variant][color];
  const className = `${defaultClassNames} ${variantStyles.textColor} ${variantStyles.border} ${variantStyles.backgroundColor}`;

  return <div className={className}>{children}</div>;
}
