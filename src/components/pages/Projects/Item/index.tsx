"use client";
import { observer } from "mobx-react-lite";
import { Row, Image, Text, Wrapper, Title, Buttons, Button } from "./style";
import { store } from "@/stores";
import { useTranslation } from "@/app/i18n/client";
import { useRouter } from "next/navigation";

interface RowProps {
  image?: string;
  link: string;
  title?: string;
  id: number;
  stack?: string[];
}

export const Item = observer((props: RowProps) => {
  const router = useRouter();
  const { t } = useTranslation(store.language.currentLanguage, "projects");

  const handleClick = () => {
    router.push(`/${store.language.currentLanguage}/projects/${props.link}`);
  };

  return (
    <Row onClick={handleClick} theme={store.theme.currentTheme}>
      <Image
        alt="zdjęcie"
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      />
      <Wrapper>
        <Title>{props.title}</Title>
        <Text theme={store.theme.currentTheme}>{t(`project-${props.id}`)}</Text>
        {props.stack && (
          <Buttons>
            {props.stack.map((item) => (
              <Button key={item} theme={store.theme.currentTheme}>
                {item}
              </Button>
            ))}
          </Buttons>
        )}
      </Wrapper>
    </Row>
  );
});
