// Project files
import iResume from "./iResume";

export default interface iCandidate {
  id: number;
  name: string;
  url: string;
  is_willing_to_relocate: boolean;
  portofolio_url: string;
  education: iResume[];
  work_experience: iResume[];
}
