import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  padding: 0 20px;
  z-index: 100;
  transition: 0.6s all;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Item = styled.p<{ color?: string; selected?: boolean }>`
  --b: 2px;
  --c: ${({ color }) => color || "#fff"};
  padding: 8px 12px;
  border-radius: 20px;
  margin: 0 16px;

  cursor: pointer;
  transition: 0.2s all;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: var(--b);
    background-color: var(--c);
    border-radius: 8px;
    transform: scaleX(0);
    transform-origin: center bottom;
    transition: transform 0.3s;
    border-radius: 20px;
  }

  &:hover::after {
    ${({ selected }) => !selected && "transform: scaleX(1);"}
  }

  ${({ selected }) =>
    selected &&
    `
    &::after {
      transform: scaleX(1);
    }
  `}
`;

export const Logo = styled.div`
  height: 40px;
  width: 180px;
  background-image: url("/olimpialewinska.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  opacity: 0.8;
  transition: 0.2s all;
  &:hover {
    opacity: 1;
  }
`;

export const Mobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100vw;
    height: calc(100vh - 60px);
    transition: 0.3s all;
  }
`;

export const Icon = styled.div`
  width: 30px;
  height: 30px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.15s all;
  margin: 0 5px;

  &:hover {
    opacity: 1;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileItem = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Button = styled.button<{ theme: "dark" | "light" }>`
  width: 50%;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) =>
    theme === "dark" ? "rgba(255,255,255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
  color: ${({ theme }) =>
    theme === "dark" ? "rgba(255,255,255, 0.7)" : "rgba(0, 0, 0, 0.7)"};
  padding: 0 20px;
  transition: 0.2s all;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) =>
      theme === "dark" ? "rgba(255,255,255, 0.15)" : "rgba(0, 0, 0, 0.15)"};
  }
`;
