"use client";
import { useState } from "react";
import { Wrapper, ImageContainer, Next, Prev } from "./style";
import { store } from "@/stores";
import { observer } from "mobx-react-lite";
import Image from "next/image";

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
      <ImageContainer>
        <Image
          src={`/${images[current]}`}
          alt="project"
          layout="fill"
          objectFit="cover"
          priority
        />
        <Next theme={store.theme.currentTheme} onClick={handleNext} />
        <Prev theme={store.theme.currentTheme} onClick={handlePrev} />
      </ImageContainer>
    </Wrapper>
  );
});
