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
import { Buttons, Button } from "@/components/pages/Projects/Item/style";
import { Slider } from "../Slider";
import { Features } from "../Features";
import { Technology } from "../Technology";
import { githubLink, images, link, stack, githubLinkServer } from "./constants";

export const HolidayBot = observer(() => {
  const { t } = useTranslation(store.language.currentLanguage, "holidaybot");
  const theme: "dark" | "light" = store.theme.currentTheme;

  useEffect(() => {
    document.title = `Olimpia Lewińska - HolidayBot`;
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
            <H2>HolidayBot</H2>
          </Wrapper>

          <Slider images={images} />
          <Description>{t("description")}</Description>
        </LargerColumn>
        <SmallerColumn>
          <Technology stack={stack} />
          <Features project="holidaybot" />
          <div style={{ flex: 1 }}></div>
          <Link href={link} target="_blank">
            <RectangularButton
              theme={store.theme.currentTheme}
              style={{ marginBottom: 10 }}
            >
              Demo
            </RectangularButton>
          </Link>
          <Link href={githubLink} target="_blank">
            <RectangularButton
              theme={store.theme.currentTheme}
              style={{ marginBottom: 10 }}
            >
              Github - Front end
            </RectangularButton>
          </Link>
          <Link href={githubLinkServer} target="_blank">
            <RectangularButton
              theme={store.theme.currentTheme}
              style={{ marginBottom: 10 }}
            >
              Github - Server
            </RectangularButton>
          </Link>
        </SmallerColumn>
      </Background>
    </Bg>
  );
});
