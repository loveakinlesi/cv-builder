import clsx from "clsx";
import React, { CSSProperties, FC } from "react";
import { tv } from "tailwind-variants";

const textVariants = tv({
  base: "scroll-m-20 text-black dark:text-white",
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "px-4 py-3 text-base",
    },
  },
  compoundVariants: [
    {
      size: ["sm", "md"],
      class: "px-3 py-1",
    },
  ],
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

export type TextProps = {
  align: CSSProperties["textAlign"];
};

export const H1: FC<TextProps> = ({ ...props }) => {
  return (
    <h1
      className={clsx(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
        // className
      )}
      {...props}
    />
  );
};
