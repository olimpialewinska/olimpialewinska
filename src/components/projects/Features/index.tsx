import { Button } from "@/components/pages/Projects/Item/style";
import { H2 } from "@/components/styles";
import { store } from "@/stores";
import { observer } from "mobx-react-lite";
import { Buttons } from "./style";

export const Features = observer(({ features }: { features: string[] }) => {
  return (
    <>
      <H2 style={{ marginTop: 20, marginBottom: 10 }}>Features</H2>
      <Buttons>
        {features.map((item) => (
          <Button theme={store.theme.currentTheme} key={item}>
            {item}
          </Button>
        ))}
      </Buttons>
    </>
  );
});
