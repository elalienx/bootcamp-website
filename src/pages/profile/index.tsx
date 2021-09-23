// NPM packages
import { useParams } from "react-router-dom";

// Project files
import Footer from "./Footer";
import Introduction from "./Introduction";
import Resume from "./Resume";
import Skills from "./Skills";
import data from "data/candidates.json";
import "styles/pages/profile/Profile.sass";

// Interface
type PropParams = {
  url: string;
};

export default function Profile() {
  // Properties
  const { url } = useParams<PropParams>();
  const candidate = data.find((item) => item.url === url);

  // safeguard
  if (candidate === undefined) return <p>No candidate found</p>;

  return (
    <div id="profile">
      <Introduction candidate={candidate} />

      {/* Vertical on mobile | Horizontal on desktop */}
      <div className="container grid">
        <Resume candidate={candidate} />
        <Skills candidate={candidate} />
      </div>

      <Footer candidate={candidate} />
    </div>
  );
}
