"use client";
import { useTranslation } from "@/app/i18n/client";
import { Navbar } from "@/components/Navbar";
import { Bg } from "@/components/styles";
import { store } from "@/stores";
import { observer } from "mobx-react-lite";
import { Chrono } from "react-chrono";
import { Title } from "./style";
import { useEffect, useState } from "react";

export const Education = observer(() => {
  const { t } = useTranslation(store.language.currentLanguage, "education");
  const theme: "dark" | "light" = store.theme.currentTheme;

  useEffect(() => {
    document.title = `Olimpia Lewińska - ${t("title")}`;
    return () => {
      document.title = "Olimpia Lewińska";
    };
  }, [t]);

  const items = [
    {
      title: "2018",
      cardTitle: `${t("cardTitle-1")}`,
      cardSubtitle: `${t("cardSubtitle-1")}`,
    },
    {
      title: "2021",
      cardTitle: `${t("cardTitle-2")}`,
      cardSubtitle: `${t("cardSubtitle-2")}`,
    },
  ];

  return (
    <Bg theme={theme}>
      {" "}
      <Navbar />
      <Title>{t("title")}</Title>
      <Chrono
        items={items}
        mode="VERTICAL"
        theme={{
          cardBgColor: "transparent",
          primary: "#7500c9",
          secondary: "none",
          cardSubtitleColor: "rgba(132, 132, 132, 0.8)",
        }}
        cardHeight={100}
        borderLessCards
        scrollable
        hideControls
        slideShow={false}
        dynamicHeight
      ></Chrono>
    </Bg>
  );
});
