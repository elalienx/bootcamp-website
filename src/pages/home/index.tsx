// Project files
import About from "./About";
import MiniCandidates from "./MiniCandidates";
import Hero from "./Hero";

export default function Home() {
  return (
    <div id="home">
      <Hero />
      <About />
      <MiniCandidates />
    </div>
  );
}
