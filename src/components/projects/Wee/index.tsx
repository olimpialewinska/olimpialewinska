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
import { useCallback, useEffect } from "react";
import Link from "next/link";
import { Slider } from "../Slider";
import { githubLink, images, link, stack } from "./constants";
import { Technology } from "../Technology";
import { Features } from "../Features";

export const Wee = observer(() => {
  const { t } = useTranslation(store.language.currentLanguage, "wee");
  const theme: "dark" | "light" = store.theme.currentTheme;

  useEffect(() => {
    document.title = `Olimpia Lewińska - Wee`;
    return () => {
      document.title = "Olimpia Lewińska";
    };
  }, [t]);

  const handleDemoClick = useCallback(() => {}, []);

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
            <H2>Wee</H2>
          </Wrapper>

          <Slider images={images} />
          <Description>{t("description")}</Description>
        </LargerColumn>
        <SmallerColumn>
          <Technology stack={stack} />
          <Features project="wee" />
          <div style={{ flex: 1 }}></div>
          <Link href={link} target="_blank">
            <RectangularButton
              theme={store.theme.currentTheme}
              style={{ marginBottom: 10, marginTop: 10 }}
            >
              Demo
            </RectangularButton>
          </Link>
          <Link href={githubLink} target="_blank">
            <RectangularButton theme={store.theme.currentTheme}>
              Github
            </RectangularButton>
          </Link>
        </SmallerColumn>
      </Background>
    </Bg>
  );
});
