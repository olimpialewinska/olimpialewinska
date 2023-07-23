"use client";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  padding-top: 56.25%;
`;

export const Image = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 6px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 40px;
  right: 40px;
  bottom: 40px;

  @media (max-width: 512px) {
    left: 20px;
    right: 20px;
  }
`;

export const Next = styled.div<{ theme: "dark" | "light" }>`
  width: 30px;
  height: 30px;
  background-image: url("/next.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  right: 0;
  top: 50%;
  filter: ${({ theme }) => (theme === "dark" ? "invert(100%) " : "invert(0%)")};
  transform: translateY(-50%) translateX(-10px);
  cursor: pointer;
  opacity: 0.7;
  transition: 0.2s all;
  &:hover {
    opacity: 1;
  }
`;

export const Prev = styled.div<{ theme: "dark" | "light" }>`
  width: 30px;
  height: 30px;
  background-image: url("/prev.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  left: 0;
  top: 50%;
  filter: ${({ theme }) => (theme === "dark" ? "invert(100%) " : "invert(0%)")};
  transform: translateY(-50%) translateX(10px);
  cursor: pointer;
  opacity: 0.7;
  transition: 0.2s all;
  &:hover {
    opacity: 1;
  }
`;
