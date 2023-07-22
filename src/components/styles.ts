"use client";
import { styled } from "styled-components";

export const Bg = styled.div<{ theme: "dark" | "light" }>`
  width: 100%;
  min-height: 100vh;
  padding-top: 60px;
  background-color: ${({ theme }) => (theme === "dark" ? "#242526" : "#fff")};
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
  transition: 0.3s all;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Back = styled.div<{ theme: "dark" | "light" }>`
  border-radius: 50%;
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: center;
  filter: ${({ theme }) => (theme === "dark" ? "invert(100%) " : "invert(0%)")};
  cursor: pointer;
  opacity: 0.7;
  transition: 0.1s all;
  min-width: 24px;
  height: 24px;
  background-image: url("/left.png");
  border: none;
  background-color: transparent;
  margin-right: 20px;
  z-index: 2;

  &:hover {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px;
`;
