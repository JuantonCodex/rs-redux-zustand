import { theme, TButtonVariant, TButtonColor } from "../../theme";

export const getClassNames = (variant: TButtonVariant, color: TButtonColor) => {
  const defaultClassNames = Object.values(theme.defaultStyles).join(" ");

  const { textColor, border, backgroundColor } =
    theme.variants.button[variant][color];

  return `${defaultClassNames} ${textColor} ${border} ${backgroundColor}`;
};
