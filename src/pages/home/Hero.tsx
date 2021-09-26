import { useState, useEffect, useRef } from "react";

import * as THREE from "three";
import GLOBE from "scripts/vanta.globe.min.js";

// Project files
import "styles/pages/home/Hero.sass";

export default function Hero() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: myRef.current,
          THREE: THREE,
        })
      );
    }
    return () => {
      // @ts-ignore
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <header id="vanta-hero" ref={myRef} className="hero">
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
