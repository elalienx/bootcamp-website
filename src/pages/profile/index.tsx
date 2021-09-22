// NPM packages
import { useParams } from "react-router-dom";

// Project files
import Footer from "./Footer";
import Introduction from "./Introduction";
import Resume from "./Resume";
import Skills from "./Skills";
import data from "data/candidates.json";
import "./Profile.sass";

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
      <Resume candidate={candidate} />
      <Skills candidate={candidate} />
      <Footer candidate={candidate} />
    </div>
  );
}
