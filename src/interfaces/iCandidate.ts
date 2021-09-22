import iResume from "./iResume";
import iSkill from "./iSkill";

export default interface iCandidate {
  id: number;
  name: string;
  url: string;
  education: iResume[];
  tech_skills: iSkill[];
}
