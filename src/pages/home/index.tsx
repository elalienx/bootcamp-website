// Project files
import data from "data/candidates.json";
import MiniCandidates from "./MiniCandidates";
import Hero from "./Hero";
import About from "./About";

export default function Home() {
  return (
    <div id="home">
      <Hero />
      <About />
      <MiniCandidates candidates={data} />
    </div>
  );
}
