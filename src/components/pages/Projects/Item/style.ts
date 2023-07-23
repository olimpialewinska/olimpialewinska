"use client";
import { t } from "i18next";
import styled from "styled-components";

interface ImageProps {
  alt: string;
}

export const Row = styled.div<{ theme: "dark" | "light" }>`
  width: 100%;
  color: ${({ theme }) =>
    theme === "dark" ? "rgba(255, 255, 255, 0.6)" : "rgba(0, 0, 0, 0.6)"};
  margin: 20px 0;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) =>
    theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
  align-items: center;
  transition: 0.2s;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  &:hover {
    background-color: ${({ theme }) =>
      theme === "dark" ? "rgba(255, 255, 255, 0.16)" : "rgba(0, 0, 0, 0.16)"};
  }
`;

export const Image = styled.div<ImageProps>`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 260px;
  width: 410px;
  margin: 20px;
  margin-right: 0;
  border-radius: 6px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    height: 180px;
    width: 90%;
    margin-right: 20px;
  }
`;

export const Wrapper = styled.div`
  flex: 1;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  max-height: 200px;
  overflow: hidden;
  margin-right: 40px;
  margin-left: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    max-height: none;
    margin-right: 0;
    margin-left: 0;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const Text = styled.div<{ theme: "dark" | "light" }>`
  margin-bottom: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  color: ${({ theme }) =>
    theme === "dark" ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.4)"};

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  font-size: 12px;
  flex-wrap: wrap;
`;

export const Button = styled.div<{ theme: "dark" | "light" }>`
  background-color: ${({ theme }) =>
    theme === "dark" ? "rgba(255,255,255, 0.1)" : "transparent"};

  border-radius: 24px;
  border: ${({ theme }) =>
    theme === "dark"
      ? "1px solid rgba(255,255,255, 0.2)"
      : "1px solid rgba(0, 0, 0, 0.2)"};

  color: ${({ theme }) =>
    theme === "dark" ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.5)"};
  margin: 0 4px;
  padding: 8px 12px;
  transition: 0.2s all;
  margin-top: 8px;
`;
