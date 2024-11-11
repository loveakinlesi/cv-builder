import React from "react";
import Title from "./Title";

type InterestsProps = {
  interests: string[];
};

const Interests: React.FC<InterestsProps> = ({ interests }) => {
  return (
    <section id="interests" className="w-full mb-5 text-sm">
      <Title>Interests</Title>
      <p className="text-xs">{interests.join(", ")}</p>
    </section>
  );
};

export default Interests;
