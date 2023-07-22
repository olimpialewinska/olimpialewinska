"use client";
import { observer } from "mobx-react-lite";
import React from "react";
import { useSpring, animated } from "react-spring";

const calc = (x: number, y: number, t: HTMLElement) => {
  const rect = t.getBoundingClientRect();
  return [
    -(y - rect.top - rect.height / 2) / 50,
    (x - rect.left - rect.width / 2) / 30,
    1.08,
  ];
};
const trans = (x: number, y: number, s: number) => {
  return `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
};

interface CardProp {
  height: string;
  borderRadius: string;
  image: string;
}

export const Card = observer((prop: CardProp) => {
  const [props, set] = useSpring(
    () => ({
      xys: [0, 0, 1],
      config: { mass: 3, tension: 300, friction: 40 },
    }),
    []
  );
  return (
    <animated.div
      className="home-image"
      onMouseMove={({ clientX: x, clientY: y, currentTarget }) =>
        set({ xys: calc(x, y, currentTarget) })
      }
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.to(trans),
        position: "relative",
        minWidth: prop.height,
        height: prop.height,
        borderRadius: prop.borderRadius,
        backgroundImage: `url(https://avatars.githubusercontent.com/u/100933608?v=4)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />
  );
});
