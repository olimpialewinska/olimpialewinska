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
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SettingsElement } from "./Settings";

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
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();
  const language = store.language.currentLanguage;
  const { t } = useTranslation(store.language.currentLanguage, "navbar");

  const handleScroll = () => {
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
