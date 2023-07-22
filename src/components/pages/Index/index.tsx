"use client";
import { useTranslation } from "@/app/i18n/client";
import { Navbar } from "@/components/Navbar";
import { Bg } from "@/components/styles";
import { store } from "@/stores";
import { observer } from "mobx-react-lite";
import { Card } from "./AnimatedCard";
import {
  IndexContainer,
  IndexCard,
  WrapperMain,
  Content,
  ContentTitle,
  ContentDescription,
  Button,
  ButtonImage,
} from "./style";
import { useLayoutEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export const Index = observer(() => {
  const [githubData, setGithubData] = useState(
    "https://avatars.githubusercontent.com/u/100933608?v=4"
  );
  const { t } = useTranslation(store.language.currentLanguage, "index");
  const theme: "dark" | "light" = store.theme.currentTheme;

  useLayoutEffect(() => {
    const fetchGithubProfile = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/olimpialewinska"
        );
        setGithubData(response.data.avatar_url);
      } catch (error) {
        setGithubData("https://avatars.githubusercontent.com/u/100933608?v=4");
      }
    };

    fetchGithubProfile();
  }, []);

  return (
    <Bg
      theme={theme}
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <Navbar />
      <IndexContainer>
        <IndexCard>
          <WrapperMain>
            <Content>
              <ContentTitle>Olimpia Lewińska</ContentTitle>
              <ContentDescription>{t("about")}</ContentDescription>
              <Link
                href={`/${store.language.currentLanguage}/projects`}
                style={{ textDecoration: "none" }}
              >
                <Button>
                  {t("button")}
                  <ButtonImage />
                </Button>
              </Link>
            </Content>
            <Card height="400px" image={githubData} borderRadius={"50%"} />
          </WrapperMain>
        </IndexCard>
      </IndexContainer>
    </Bg>
  );
});
