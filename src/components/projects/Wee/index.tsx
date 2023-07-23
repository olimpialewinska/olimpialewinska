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
import { Button, Buttons } from "@/components/pages/Projects/Item/style";
import { features, images, stack } from "./constants";
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
          <Description>
            Wee is a web-based internet messenger application that allows you to
            create both one-on-one conversations and group conversations. It
            provides a wide range of features to enhance your messaging
            experience, including real-time messaging powered by Supabase
            Realtime. With Wee, you can also customize the chat colors, change
            nicknames of participants in the chat, and send photos and files.
            provides a wide range of features to enhance your messaging
            experience, including real-time messaging powered by Supabase
            Realtime. With Wee, you can also customize the chat colors, change
            nicknames of participants in the chat, and send photos and files.
          </Description>
        </LargerColumn>
        <SmallerColumn>
          <Technology stack={stack} />
          <Features features={features} />
          <div style={{ flex: 1 }}></div>
          <RectangularButton
            theme={store.theme.currentTheme}
            style={{ marginBottom: 10, marginTop: 10 }}
          >
            Demo
          </RectangularButton>
          <RectangularButton theme={store.theme.currentTheme}>
            Github
          </RectangularButton>
        </SmallerColumn>
      </Background>
    </Bg>
  );
});
