import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-image: url("/images/bg0.jpg");
  overflow: hidden;
  clip-path: inset(50% -6px 30% 0);
`;

export const GlitchEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0px;
  width: 100%;
  height: 100vh;
  opacity: 0.5;
  background-image: url("/images/bg0.jpg");
  background-size: cover;
  mix-blend-mode: hard-light;
  /* animation: glitch 4s; */
  /* 
    --slice-0: inset(50% 0 30% 0);
    --slice-1: inset(20% 0 60% 0);
    --slice-2: inset(40% 0 43% 0);
    --slice-3: inset(80% 0 5% 0);
    --slice-4: inset(0 0 0 0); */

  @keyframes glitch {
    0% {
      filter: hue-rotate(180deg);
      clip-path: var(--slice-1);
      transform: translate(-30px, -15px);
    }

    10% {
      filter: hue-rotate(90deg);
      clip-path: var(--slice-3);
      transform: translate(10px, 10px);
    }

    30% {
      filter: hue-rotate(45deg);
      clip-path: var(--slice-1);
      transform: translate(-30px, 5px);
    }

    35% {
      filter: hue-rotate(120deg);
      clip-path: var(--slice-2);
      transform: translate(15px, -25px);
    }
    60% {
      filter: hue-rotate(150deg);
      clip-path: var(--slice-0);
      transform: translate(15px, -5px);
    }
    75% {
      filter: hue-rotate(90deg);
      clip-path: var(--slice-2);
      transform: translate(-20px, 10px);
    }

    90% {
      filter: hue-rotate(30deg);
      clip-path: var(--slice-2);
      transform: translate(0px, 5px);
    }

    100% {
      filter: hue-rotate(0deg);
      clip-path: var(--slice-4);
      transform: translate(0);
    }
  }
`;
