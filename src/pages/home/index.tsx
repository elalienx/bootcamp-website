// Project files
import About from "./About";
import MiniCandidates from "./MiniCandidates";
import Hero from "./Hero";
import data from "data/candidates.json";

export default function Home() {
  return (
    <div id="home">
      <Hero />
      <About />
      <MiniCandidates candidates={data} />
    </div>
  );
}
