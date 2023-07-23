"use client";
import { useTranslation } from "@/app/i18n/client";
import { Navbar } from "@/components/Navbar";
import {
  Back,
  Background,
  Bg,
  Description,
  H2,
  LargerColumn,
  RectangularButton,
  SmallerColumn,
  Wrapper,
} from "@/components/styles";
import { store } from "@/stores";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import Link from "next/link";
import { Slider } from "../Slider";
import { Features } from "../Features";
import { Technology } from "../Technology";
import { githubLink, images, server, stack } from "./constants";

export const ChatLight = observer(() => {
  const { t } = useTranslation(store.language.currentLanguage, "chatlight");
  const theme: "dark" | "light" = store.theme.currentTheme;

  useEffect(() => {
    document.title = `Olimpia Lewińska - ChatLight`;
    return () => {
      document.title = "Olimpia Lewińska";
    };
  }, [t]);

  return (
    <Bg theme={theme}>
      {" "}
      <Navbar />
      <Background>
        <LargerColumn theme={store.theme.currentTheme}>
          <Wrapper>
            <Link href={`/${store.language.currentLanguage}/projects`}>
              <Back theme={store.theme.currentTheme} />
            </Link>
            <H2>ChatLight</H2>
          </Wrapper>

          <Slider images={images} />
          <Description>{t("description")}</Description>
        </LargerColumn>
        <SmallerColumn>
          <Technology stack={stack} />
          <Features project="chatlight" />
          <div style={{ flex: 1 }}></div>
          <Link href={githubLink} target="_blank" style={{ marginBottom: 10 }}>
            <RectangularButton theme={store.theme.currentTheme}>
              Github
            </RectangularButton>
          </Link>
          <Link href={server} target="_blank">
            <RectangularButton theme={store.theme.currentTheme}>
              Server - Github
            </RectangularButton>
          </Link>
        </SmallerColumn>
      </Background>
    </Bg>
  );
});
