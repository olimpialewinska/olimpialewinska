"use client";
import { useTranslation } from "@/app/i18n/client";
import { Navbar } from "@/components/Navbar";
import { Bg } from "@/components/styles";
import { store } from "@/stores";
import { observer } from "mobx-react-lite";
import { Title } from "../Education/style";
import { useEffect } from "react";
import { Container } from "./style";
import { Item } from "./Item";
import { projects } from "@/utils/constants";

export const Projects = observer(() => {
  const { t } = useTranslation(store.language.currentLanguage, "projects");
  const theme: "dark" | "light" = store.theme.currentTheme;

  useEffect(() => {
    document.title = `Olimpia Lewińska - ${t("title")}`;
    return () => {
      document.title = "Olimpia Lewińska";
    };
  }, [t]);

  return (
    <Bg theme={theme}>
      {" "}
      <Navbar />
      <Title>{t("title")}</Title>
      <Container>
        {projects.map((project) => (
          <Item
            key={project.id}
            id={project.id}
            image={project.image}
            description={project.description}
            title={project.title}
            link={project.link}
            stack={project.stack}
          />
        ))}
      </Container>
    </Bg>
  );
});
