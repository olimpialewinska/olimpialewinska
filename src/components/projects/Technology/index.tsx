"use client";
import { Button, Buttons } from "@/components/pages/Projects/Item/style";
import { H2 } from "@/components/styles";
import { store } from "@/stores";
import { observer } from "mobx-react-lite";

export const Technology = observer(({ stack }: { stack: string[] }) => {
  return (
    <>
      <H2 style={{ marginBottom: 10 }}>
        {store.language.currentLanguage === "pl" ? "Technologia" : "Technology"}
      </H2>
      <Buttons style={{ width: "100%" }}>
        {stack.map((item) => (
          <Button theme={store.theme.currentTheme} key={item}>
            {item}
          </Button>
        ))}
      </Buttons>
    </>
  );
});
