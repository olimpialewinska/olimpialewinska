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
import { images, stack } from "../Wee/constants";

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
          <H2 style={{ marginBottom: 10 }}>Technology</H2>
          <Buttons style={{ width: "100%" }}>
            {stack.map((item) => (
              <Button theme={store.theme.currentTheme} key={item}>
                {item}
              </Button>
            ))}
          </Buttons>
          <H2 style={{ marginTop: 20, marginBottom: 10 }}>Features</H2>
          <Buttons
            style={{
              width: "100%",
              overflowY: "auto",
              marginBottom: 10,
              minHeight: 100,
            }}
          >
            {stack.map((item) => (
              <Button theme={store.theme.currentTheme} key={item}>
                {item}
              </Button>
            ))}

            {stack.map((item) => (
              <Button theme={store.theme.currentTheme} key={item}>
                {item}
              </Button>
            ))}
            {stack.map((item) => (
              <Button theme={store.theme.currentTheme} key={item}>
                {item}
              </Button>
            ))}
            {stack.map((item) => (
              <Button theme={store.theme.currentTheme} key={item}>
                {item}
              </Button>
            ))}
            {stack.map((item) => (
              <Button theme={store.theme.currentTheme} key={item}>
                {item}
              </Button>
            ))}
            {stack.map((item) => (
              <Button theme={store.theme.currentTheme} key={item}>
                {item}
              </Button>
            ))}
          </Buttons>
          <div style={{ flex: 1 }}></div>
          <RectangularButton theme={store.theme.currentTheme}>
            Github
          </RectangularButton>
        </SmallerColumn>
      </Background>
    </Bg>
  );
});
