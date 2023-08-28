// Node modules
import { useParams } from "react-router-dom";

// Project files
import data from "data/candidates.json";
import Hero from "./profile/Hero";
import Skills from "./profile/Skills";
import Blockquote from "./profile/Blockquote";
import Projects from "./profile/Projects";

// Interface
type PropParams = {
  url: string;
};

export default function Profile() {
  // Properties
  const { url } = useParams<PropParams>();
  const candidate = data.find((item) => item.url === url);

  // Safeguard
  if (candidate === undefined) return <p>No candidate found</p>;

  return (
    <div id="profile" className="page">
      <Hero item={candidate} />
      <Skills item={candidate.skill_set} />
      <Blockquote item={candidate} />
      <Projects item={candidate} />
    </div>
  );
}
