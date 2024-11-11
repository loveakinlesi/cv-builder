import React from "react";
import Title from "./Title";

type Education = {
  degree: string;
  program: string;
  school: string;
  location: string;
  endDate: string;
  grade?: string;
};

type EducationProps = {
  history: Education[];
};

const Education: React.FC<EducationProps> = ({ history }) => {
  return (
    <section id="education" className="w-full mb-5 text-sm">
      <Title>Education</Title>
      {history.map(({ degree, program, location, school, endDate }, index) => (
        <div className="mb-3" key={index}>
          <p className="">
            <span className="font-semibold">{degree}</span> {program}{" "}
            {/* {grade && <span className="font-semibold italic">{grade}</span>} */}
          </p>
          <div className="flex justify-between items-center text-xs mb-2">
            <p className="">
              <span className="font-semibold">{school}</span> - {location}
            </p>
            <p className="">{endDate}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Education;
