import React from "react";
import Title from "./Title";
import { sortItems } from "@/lib/utils";

type Certification = {
  title: string;
  year: string;
};

type CertificationsProps = {
  certifications: Certification[];
};

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <section id="certifications" className="w-full mb-5 text-sm">
      <Title>Certifications</Title>
      <div className="">
        {sortItems(certifications).map(({ title, year }, index) => (
          <p className="text-xs" key={index}>
            <span className="">{title}</span>,{" "}
            <span className="font-semibold"> {year}</span>
          </p>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
