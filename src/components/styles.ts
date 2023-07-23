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
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const RectangularButton = styled.button<{ theme: "dark" | "light" }>`
  width: 100%;
  min-height: 40px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) =>
    theme === "dark" ? "rgba(255,255,255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
  color: ${({ theme }) =>
    theme === "dark" ? "rgba(255,255,255, 0.7)" : "rgba(0, 0, 0, 0.7)"};
  padding: 0 20px;
  transition: 0.2s all;
  cursor: pointer;

  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;

  &:hover {
    background-color: ${({ theme }) =>
      theme === "dark" ? "rgba(255,255,255, 0.15)" : "rgba(0, 0, 0, 0.15)"};
  }
`;

export const Background = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  height: calc(100vh - 70px);
  max-width: 1800px;
  max-height: 1220px;

  @media (max-width: 1020px) {
    flex-direction: column;
    height: auto;
  }
`;

export const LargerColumn = styled.div<{ theme: "dark" | "light" }>`
  width: 70%;
  border-right: 2px solid
    ${({ theme }) =>
      theme === "dark" ? "rgba(255,255,255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 70px);
  overflow-y: auto;

  @media (max-width: 1020px) {
    width: 100%;
    border-right: none;
    height: auto;
  }
`;

export const SmallerColumn = styled.div`
  width: 30%;
  height: calc(100vh - 70px);
  padding: 20px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  @media (max-width: 1020px) {
    width: 100%;
    overflow-y: none;
    height: auto;
  }

  @media only screen and (max-width: 1020px) and (min-width: 512px) {
    padding: 0 40px;
    padding-bottom: 20px;
  }
`;

export const H2 = styled.h2`
  margin: 0;
  opacity: 0.7;
`;

export const Description = styled.p`
  padding-right: 40px;
  padding-left: 40px;
  padding-top: 20px;
  opacity: 0.8;
  overflow-y: auto;
  margin-top: -40px;
  line-height: 1.4;

  @media (max-width: 1020px) {
  }

  @media (max-width: 512px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
  }
`;
