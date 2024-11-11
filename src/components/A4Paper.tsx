import clsx from "clsx";
import React, { PropsWithChildren } from "react";

type A4PaperProps = PropsWithChildren & {
  showBounds?: boolean;
};

const A4Paper: React.FC<A4PaperProps> = ({ children, showBounds }) => {
  //h-auto aspect-[1/1.414]
  return (
    <article className="bg-white w-screen h-full shadow-2xl py-4 px-6">
      <div
        className={clsx("content w-full h-full text-xs", {
          "border border-red-500": showBounds,
        })}
      >
        {children}
      </div>
    </article>
    // <article className="bg-white w-[155rem] h-[219.25rem]">{children}</article>
  );
};

export default A4Paper;
