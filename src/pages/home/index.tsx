// Project files
import About from "./About";
import PreviewCandidates from "./PreviewCandidates";
import Hero from "./Hero";

export default function Home() {
  return (
    <div id="home">
      <Hero />
      <About />
      <PreviewCandidates />
    </div>
  );
}
