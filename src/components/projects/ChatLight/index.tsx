"use client";
import { useTranslation } from "@/app/i18n/client";
import { Navbar } from "@/components/Navbar";
import { Back, Bg, Wrapper } from "@/components/styles";
import { store } from "@/stores";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Title } from "@/components/pages/Education/style";
import Link from "next/link";

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
      <Wrapper>
        <Link href={`/${store.language.currentLanguage}/projects`}>
          <Back theme={store.theme.currentTheme} />
        </Link>
        <Title style={{ marginTop: 20, marginBottom: 20 }}>{t("title")}</Title>
      </Wrapper>
    </Bg>
  );
});
