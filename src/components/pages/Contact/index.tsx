"use client";
import { useTranslation } from "@/app/i18n/client";
import { Navbar } from "@/components/Navbar";
import { Bg } from "@/components/styles";
import { store } from "@/stores";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Background, Container, Email, Icon, Wrapper } from "./style";
import { Title } from "../Education/style";
import { email, github, linkedin } from "./constants";
import Link from "next/link";

export const Contact = observer(() => {
  const { t } = useTranslation(store.language.currentLanguage, "contact");
  const theme: "dark" | "light" = store.theme.currentTheme;

  useEffect(() => {
    document.title = `Olimpia Lewińska - ${t("title")}`;
    return () => {
      document.title = "Olimpia Lewińska";
    };
  }, [t]);

  return (
    <Bg theme={theme}>
      <Navbar />
      <Wrapper>
        <Background>
          <Title style={{ marginTop: 0 }}>{t("title")}</Title>
          <Email>Email: {email}</Email>
          <Container>
            <Link href={github} target="_blank">
              <Icon
                theme={store.theme.currentTheme}
                style={{
                  backgroundImage: "url(/icons/github.png)",
                }}
              />
            </Link>
            <Link href={linkedin} target="_blank">
              <Icon
                theme={store.theme.currentTheme}
                style={{
                  backgroundImage: "url(/icons/linkedin.png)",
                }}
              />
            </Link>
          </Container>
        </Background>
      </Wrapper>
    </Bg>
  );
});
