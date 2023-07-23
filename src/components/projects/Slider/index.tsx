"use client";
import { useState } from "react";
import { Wrapper, Image, Next, Prev } from "./style";
import { store } from "@/stores";
import { observer } from "mobx-react-lite";

export const Slider = observer(({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    if (current === images.length - 1) {
      setCurrent(0);
      return;
    }
    setCurrent(current + 1);
  };

  const handlePrev = () => {
    if (current === 0) {
      setCurrent(images.length - 1);
      return;
    }
    setCurrent(current - 1);
  };

  return (
    <Wrapper className="slider">
      <Image
        style={{
          backgroundImage: `url("/${images[current]}")`,
        }}
      >
        <Next theme={store.theme.currentTheme} onClick={handleNext} />
        <Prev theme={store.theme.currentTheme} onClick={handlePrev} />
      </Image>
    </Wrapper>
  );
});
