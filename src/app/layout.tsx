import "./globals.css";
import type { Metadata } from "next";
import StyledJsxRegistry from "./registry";

export const metadata: Metadata = {
  title: "olimpialewinska",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  );
}
