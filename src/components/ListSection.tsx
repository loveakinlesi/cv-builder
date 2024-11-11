import { cn } from "@/lib/utils";
import React from "react";
import Title from "./Title";

type ListSectionProps = {
  id: string;
  title: string;
  list: string[];
  type?: "bullet" | "list";
};

const ListSection: React.FC<ListSectionProps> = ({
  id,
  title,
  list,
  type = "list",
}) => {
  return (
    <section id={id} className="w-full mb-5 text-sm">
      <Title>{title}</Title>
      <ul
        className={cn({
          "grid grid-cols-2 gap-y-1 gap-x-4 list-disc list-outside pl-4":
            type === "bullet",
        })}
      >
        {list.map((item, index) => (
          <li
            className="text-xs mb-1"
            key={index}
            dangerouslySetInnerHTML={{ __html: item }}
          ></li>
        ))}
      </ul>
    </section>
  );
};

export default ListSection;
