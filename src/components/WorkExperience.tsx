import React from "react";
import Title from "./Title";

type WorkExperience = {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  points: string[];
};

type WorkExperienceProps = {
  title?: string;
  experience: WorkExperience[];
};

const WorkExperience: React.FC<WorkExperienceProps> = ({
  title = "Work Experience",
  experience,
}) => {
  return (
    <section id="work-experience" className="w-full mb-5 text-sm">
      <Title>{title}</Title>
      {experience.map(
        ({ role, company, location, startDate, endDate, points }, index) => (
          <div className="mb-3" key={index}>
            <p className="text-sm italic font-semibold">{role}</p>
            <div className="flex justify-between items-center text-xs mb-2">
              <p className="">
                <span className="font-semibold">{company}</span> - {location}
              </p>
              <p className="">
                {startDate} - {endDate ?? "Till Date"}
              </p>
            </div>

            <ul className="list-disc list-outside pl-4 space-y-1 text-xs">
              {points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        )
      )}
    </section>
  );
};

export default WorkExperience;
