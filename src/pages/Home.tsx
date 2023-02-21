// Project files
import data from "data/candidates.json";
import MiniCandidates from "./home/MiniCandidates";
import Hero from "./home/Hero";
import About from "./home/About";

export default function Home() {
  return (
    <div id="home">
      <Hero />
      <About />
      <MiniCandidates candidates={data} />
    </div>
  );
}
