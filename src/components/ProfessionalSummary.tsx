import React from "react";
import Title from "./Title";

type ProfessionalSummaryProps = {
  content: string;
};

const ProfessionalSummary: React.FC<ProfessionalSummaryProps> = ({
  content,
}) => {
  return (
    <section id="professional-summary" className="w-full mb-5 text-sm">
      <Title>Professional Summary</Title>
      <p className="text-justify text-xs">{content}</p>
    </section>
  );
};

export default ProfessionalSummary;
