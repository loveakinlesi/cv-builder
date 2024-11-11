import React, { PropsWithChildren } from "react";

const Title: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <h2 className="font-bold text-sm w-full uppercase mb-2 border-b-2 border-black">
      {children}
    </h2>
  );
};

export default Title;
