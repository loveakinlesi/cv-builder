import A4Paper from "./components/A4Paper";
import Certifications from "./components/Certificates";
import ContactInfo from "./components/ContactInfo";
import Education from "./components/Education";
import Interests from "./components/Interests";
import ProfessionalSummary from "./components/ProfessionalSummary";
import ListSection from "./components/ListSection";
import WorkExperience from "./components/WorkExperience";
import { content } from "./lib/content";

function App() {
  const technicalSkills =
    `<ul class="list-disc list-outside pl-4">` +
    content.technicalSkills
      .map((skills, i) => `<li key="${i}" class="marker:!mr-2">${skills}</li>`)
      .join(" ") +
    `</ul>`;

  return (
    <main className=" w-screen h-full overflow-auto">
      {/* <div className="w-screen min-h-screen bg-slate-300 overflow-scroll"> */}
      <A4Paper>
        <ContactInfo {...content.contact} />
        <ProfessionalSummary {...content.professionalSummary} />
        <ListSection
          id="core-competencies"
          title="Core Competencies"
          list={content.skills}
          type="bullet"
        />
        <WorkExperience
          title="Professional Experience"
          experience={content.professionalExperience}
        />
        <WorkExperience
          title="Additional Experience"
          experience={content.additionalExperience}
        />
        <Education history={content.educationHistory} />

        <ListSection
          id="skills"
          title="Skills"
          list={[
            `<b>Technical Skills:</b> ${technicalSkills}`,
            `<b>Soft Skills:</b> ${content.softSkills.join(", ")}`,
          ]}
        />
        <Certifications certifications={content.certifications} />
        <Interests interests={content.interests} />
      </A4Paper>
      {/* </div> */}
    </main>
  );
}

export default App;
