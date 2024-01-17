import { buttonVariants as button } from "./partials/button";
const defaultStyles = {
  borderRadius: "rounded-md",
  padding: "py-2 px-4",
  fontSize: "text-sm",
  fontWeight: "font-medium",
};

export const theme = {
  defaultStyles,
  variants: {
    button,
    text: {
      primary: {
        textColor: "text-blue-500",
        border: "",
        backgroundColor: "bg-transparent",
      },
      secondary: {
        textColor: "text-green-100",
        border: "",
        backgroundColor: "bg-transparent",
      },
      // ...
    },
    outlined: {
      primary: {
        textColor: "text-blue-500",
        border: "border border-blue-500",
        backgroundColor: "bg-transparent",
      },
      secondary: {
        textColor: "text-white",
        border: "border border-green-500",
        backgroundColor: "bg-transparent",
      },
    },
    contained: {
      primary: {
        textColor: "text-white",
        border: "",
        backgroundColor: "bg-blue-500",
      },
      secondary: {
        textColor: "text-white",
        border: "border border-green-500",
        backgroundColor: "bg-green-500",
      },
    },
  },
  // ...
};
