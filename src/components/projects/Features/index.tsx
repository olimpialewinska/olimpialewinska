"use client";
import { H2 } from "@/components/styles";
import { store } from "@/stores";
import { observer } from "mobx-react-lite";
import { Item, List } from "./style";
import { useTranslation } from "@/app/i18n/client";

export const Features = observer(({ project }: { project: string }) => {
  const { t, i18n, ready } = useTranslation(
    store.language.currentLanguage,
    project
  );

  if (!ready) return "loading translations...";

  const features: string[] = t("features", { returnObjects: true });

  return (
    <>
      <H2 style={{ marginTop: 20, marginBottom: 10 }}>
        {store.language.currentLanguage === "pl"
          ? "Funkcjonalność"
          : "Features"}
      </H2>
      <List
        style={{
          marginLeft: 14,
        }}
      >
        {features.map((item: string) => (
          <Item
            key={item}
            color={
              store.theme.currentTheme === "dark"
                ? "rgba(255,255,255,0.8)"
                : "rgba(0,0,0,0.8)"
            }
          >
            <span>{item}</span>
          </Item>
        ))}
      </List>
    </>
  );
});
