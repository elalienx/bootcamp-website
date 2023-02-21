// Project files
import Introduction from "./about/Introduction";
import Technologies from "./about/Technologies";
import Process from "./about/Process";
import Projects from "./about/Projects";
import MoreInformation from "./about/MoreInformation";

export default function About() {
  return (
    <div id="about" className="page">
      <Introduction />
      <Process />
      <Technologies />
      <Projects />
      <MoreInformation />
    </div>
  );
}
