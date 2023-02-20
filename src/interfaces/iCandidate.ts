// Project files
import iSkillSet from "./iSkillSet";

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
  skill_set: iSkillSet[];

  // Links
  cv_url: string;
  portfolio_url: string;
}
