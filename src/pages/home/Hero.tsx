// NPM packages
import { useState, useEffect, useRef } from "react";
import * as THREE from "three"; // v124
// @ts-ignore
import GLOBE from "vanta/dist/vanta.globe.min"; // v5.31

// Project files
import "styles/pages/home/Hero.sass";

export default function Hero() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  // Methods
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: myRef.current,
          THREE: THREE,
          backgroundColor: 0x522b45,
        })
      );
    }
    return () => {
      // @ts-ignore
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <header className="hero" ref={myRef}>
      <div className="container">
        <h1 className="title">
          Front
          <br />
          End
          <br />
          Course
        </h1>
        <h2 className="subtitle">
          Training Program
          <br />
          Autum 2021
        </h2>
      </div>
    </header>
  );
}
