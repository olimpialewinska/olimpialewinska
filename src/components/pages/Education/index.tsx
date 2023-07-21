"use client";
import { useTranslation } from "@/app/i18n/client";
import { Navbar } from "@/components/Navbar";
import { Bg } from "@/components/styles";
import { store } from "@/stores";
import { observer } from "mobx-react-lite";

export const Education = observer(() => {
  const { t } = useTranslation(store.language.currentLanguage, "education");
  const theme: "dark" | "light" = store.theme.currentTheme;
  return (
    <Bg theme={theme}>
      {" "}
      <Navbar />
      {t("title")}
    </Bg>
  );
});
