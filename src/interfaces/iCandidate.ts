// Project files
import iResume from "./iResume";
import iSkill from "./iSkill";

export default interface iCandidate {
  id: number;
  name: string;
  description: string;
  url: string;
  city: string;
  isHired: boolean;
  willing_to_relocate: boolean;
  portofolio_url: string;
  education: iResume[];
  work_experience: iResume[];
  tech_skills: iSkill[];
  languages_spoken: iSkill[];
}
