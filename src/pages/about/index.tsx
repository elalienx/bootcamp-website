// Project files
import Introduction from "./Introduction";
import Technologies from "./Technologies";
import Projects from "./Projects";
import MoreInformation from "./MoreInformation";
import "styles/pages/about/About.sass";

export default function About() {
  return (
    <div id="about">
      <Introduction />
      <Technologies />
      <Projects />
      <MoreInformation />
    </div>
  );
}
