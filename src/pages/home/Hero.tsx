// Node modules
import { useEffect } from "react";
// @ts-ignore
import VANTA_EFFECT from "vanta/src/vanta.globe";

export default function Hero() {
  /**
   * Warning:
   * Vanta has a hardcoded dependency called three.js for handling 3d graphics.
   * It is install on the file public/index.html inside the <head> tag.
   */
  // Properties
  const vantaSettings = {
    el: "#vanta",
    mouseControls: true,
    gyroControls: true,
    color: "#D1A19D",
    color2: "#FFFFFF",
    backgroundColor: "#522B45",
  };

  // Methods
  useEffect(() => VANTA_EFFECT(vantaSettings), []);

  return (
    <header id="vanta" className="hero">
      <div className="container">
        <h1 className="title">
          Frontend &
          <br />
          Backend
        </h1>
        <h2 className="subtitle">
          Training Courses
          <br />
          Summer 2023 - Autumn 2023
        </h2>
      </div>
    </header>
  );
}
