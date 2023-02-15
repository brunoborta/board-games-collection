import React, { useLayoutEffect, useRef } from "react";
import { Container, GlitchEffect } from "./styles";
import { gsap, Power4 } from "gsap/all";

function Home() {
  const containerRef = useRef(null);
  const glitchEffectRef = useRef(null);
  const tlRef = useRef(null);

  useLayoutEffect(() => {
    initAnimation();
  }, []);
  function initAnimation() {
    const slices = [
      "inset(50% 0 30% 0)",
      "inset(20% 0 60% 0)",
      "inset(40% 0 43% 0)",
      "inset(80% 0 5% 0)",
      "inset(0% 0% 0% 0)",
      "inset(0% 100% 0% 0%)",
    ];

    tlRef.current = gsap.timeline();
    tlRef.current
      .fromTo(
        containerRef.current,
        {
          clipPath: slices[5],
        },
        {
          duration: 1.5,
          clipPath: slices[4],
          ease: Power4.easeInOut,
        }
      )
      .to(glitchEffectRef.current, {
        duration: 0.4,
        clipPath: slices[1],
        filter: "hue-rotate(180deg)",
        transform: "translate(-30px, -15px)",
      })
      .to(glitchEffectRef.current, {
        duration: 0.8,
        clipPath: slices[3],
        filter: "hue-rotate(90deg)",
        transform: "translate(10px, 10px)",
      })
      .to(glitchEffectRef.current, {
        duration: 0.2,
        clipPath: slices[1],
        filter: "hue-rotate(45deg)",
        transform: "translate(-30px, 5px)",
      })
      .to(glitchEffectRef.current, {
        duration: 1,
        clipPath: slices[2],
        filter: "hue-rotate(120deg)",
        transform: "translate(15px, -25px)",
      })
      .to(glitchEffectRef.current, {
        duration: 0.6,
        clipPath: slices[0],
        filter: "hue-rotate(150deg)",
        transform: "translate(15px, -5px)",
      })
      .to(glitchEffectRef.current, {
        duration: 0.6,
        clipPath: slices[2],
        filter: "hue-rotate(90deg)",
        transform: "translate(-20px, 10px)",
      })
      .to(glitchEffectRef.current, {
        duration: 0.6,
        clipPath: slices[2],
        filter: "hue-rotate(30deg)",
        transform: "translate(0px, 5px)",
      })
      .to(glitchEffectRef.current, {
        duration: 1,
        clipPath: slices[4],
        filter: "hue-rotate(0deg)",
        transform: "translate(0)",
      });
  }
  return (
    <Container ref={containerRef}>
      <GlitchEffect ref={glitchEffectRef} />
    </Container>
  );
}

export default Home;
