// NPM packages
import { useParams } from "react-router-dom";

// Project files
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
      <h1>Student profile</h1>
    </div>
  );
}
