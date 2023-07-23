"use client";
import { useTranslation } from "@/app/i18n/client";
import { Navbar } from "@/components/Navbar";
import { Bg } from "@/components/styles";
import { store } from "@/stores";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

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
      <Navbar /> {t("title")}
    </Bg>
  );
});
