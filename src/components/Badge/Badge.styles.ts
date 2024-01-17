import { theme, TBadgeVariant, TButtonColor } from "../../theme";

export const getClassNames = (variant: TBadgeVariant, color: TButtonColor) => {
  const defaultClassNames = Object.values(theme.defaultStyles).join(" ");

  const { textColor, border, backgroundColor } =
    theme.variants.badge[variant][color];

  return `${defaultClassNames} ${textColor} ${border} ${backgroundColor}`;
};
