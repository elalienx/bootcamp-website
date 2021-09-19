// Project files
import About from "./About";
import Candidates from "./Candidates";
import Hero from "./Hero";

export default function Home() {
  return (
    <div id="home">
      <Hero />
      <About />
      <Candidates />
    </div>
  );
}
