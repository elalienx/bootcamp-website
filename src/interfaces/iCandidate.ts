// Project files
import iSkill from "./iSkill";

export default interface iCandidate {
  // ID
  id: number;
  url: string;

  // Control
  iteration: number;
  hired: boolean;
  graduated: boolean;

  // Bio
  name: string;
  about: string;
  swedish_level: number;
  pronoun: string;
  quote_text: string;
  quote_author: string;
  tech_skills: iSkill[];

  // Links
  cv_url: string;
  portfolio_url: string;
}
