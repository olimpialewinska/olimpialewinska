"use client";
import { observer } from "mobx-react-lite";
import {
  Container,
  Item,
  Logo,
  Mobile,
  Wrapper,
  Icon,
  MobileItem,
} from "./style";
import { store } from "@/stores";
import { useTranslation } from "@/app/i18n/client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { SettingsElement } from "./Settings";
import { createQueryString } from "@/utils/functions/createURL";
import { useCookies } from "react-cookie";

const navigationItems = [
  {
    path: "projects",
    color: "#b500a6",
    labelKey: "projects",
  },
  {
    path: "education",
    color: "#7500c9",
    labelKey: "education",
  },
  {
    path: "contact",
    color: "#0051c9",
    labelKey: "contact",
  },
];

export const Navbar = observer(() => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();
  const language = store.language.currentLanguage;
  const { t } = useTranslation(store.language.currentLanguage, "navbar");
  const [cookies, setCookie] = useCookies(["olimpialewinska-theme"]);

  const handleScroll = () => {
    if (isOpen) {
      return;
    }
    const currentScrollY = window.scrollY;

    if (currentScrollY < 50) {
      setVisible(true);
      return;
    }

    if (currentScrollY > 50) {
      setVisible(false);
      return;
    }
  };

  const handleLanguageChange = () => {
    let newPath = "";
    if (store.language.currentLanguage === "en") {
      store.language.setLanguage("pl");
      newPath = createQueryString(window.location.pathname, "pl");
    } else {
      store.language.setLanguage("en");
      newPath = createQueryString(window.location.pathname, "en");
    }

    window.location.replace(newPath);
  };

  const handleThemeChange = () => {
    const theme = store.theme.currentTheme === "dark" ? "light" : "dark";
    store.theme.setTheme(theme);
    setCookie("olimpialewinska-theme", theme, {
      path: "/",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper style={{ display: visible ? "" : "none" }}>
      <Link href={`/${store.language.currentLanguage}`}>
        <Logo
          style={{
            filter: store.theme.currentTheme === "dark" ? "invert(1)" : "none",
          }}
        />{" "}
      </Link>
      <Container>
        {navigationItems.map((item, index) => (
          <Link
            key={index}
            href={`/${language}/${item.path}`}
            style={{
              textDecoration: "none",
            }}
          >
            <Item
              selected={pathname.split("/")[2] === item.path}
              color={item.color}
              style={{
                color:
                  store.theme.currentTheme === "dark"
                    ? "rgba(255,255,255, 0.6)"
                    : "rgba(0,0,0, 0.6)",
              }}
            >
              {t(item.labelKey)}
            </Item>
          </Link>
        ))}

        <SettingsElement />
      </Container>

      <Mobile
        style={{
          display: isOpen ? "flex" : "none",
          backgroundColor:
            store.theme.currentTheme === "dark" ? "#242526" : "#fff",
        }}
      >
        {navigationItems.map((item, index) => (
          <Link
            key={index}
            href={`/${language}/${item.path}`}
            onClick={() => setIsOpen(false)}
            style={{
              textDecoration: "none",
              color:
                store.theme.currentTheme === "dark"
                  ? "rgba(255,255,255, 0.6)"
                  : "rgba(0,0,0, 0.6)",
            }}
          >
            <MobileItem>{t(item.labelKey)}</MobileItem>
          </Link>
        ))}

        <div style={{ flex: 1 }}></div>
        <MobileItem
          onClick={() => {
            handleLanguageChange();
          }}
          style={{
            color:
              store.theme.currentTheme === "dark"
                ? "rgba(255,255,255, 0.6)"
                : "rgba(0,0,0, 0.6)",
            marginBottom: -10,
          }}
        >
          {language === "pl" ? "EN" : "PL"}
        </MobileItem>

        <MobileItem
          onClick={() => {
            handleThemeChange();
          }}
          style={{
            color:
              store.theme.currentTheme === "dark"
                ? "rgba(255,255,255, 0.6)"
                : "rgba(0,0,0, 0.6)",
            marginBottom: 40,
          }}
        >
          {store.theme.currentTheme === "dark"
            ? store.language.currentLanguage === "pl"
              ? "Jasny"
              : "Light"
            : store.language.currentLanguage === "en"
            ? "Dark"
            : "Ciemny"}
        </MobileItem>
      </Mobile>
      <Icon
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundImage: isOpen ? "url(/close.png" : "url(/menu.png)",
          filter: store.theme.currentTheme === "dark" ? "invert(1)" : "none",
        }}
      />
    </Wrapper>
  );
});
