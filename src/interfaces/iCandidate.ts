// Project files
import iResume from "./iResume";
import iSkill from "./iSkill";

export default interface iCandidate {
  id: number;
  name: string;
  url: string;
  city: string;
  is_willing_to_relocate: boolean;
  portofolio_url: string;
  education: iResume[];
  work_experience: iResume[];
  tech_skills: iSkill[];
  languages_spoken: iSkill[];
}
