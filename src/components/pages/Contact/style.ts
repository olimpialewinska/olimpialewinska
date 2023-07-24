import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const Background = styled.div`
  background: linear-gradient(
    rgba(71, 118, 230, 0.6) 0%,
    rgba(142, 84, 233, 0.6) 100%
  );
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 40px;

  @media (max-width: 768px) {
    width: 100%;
    background: transparent;
    box-shadow: none;
  }

  @media (max-width: 512px) {
    height: 100%;
  }
`;

export const Email = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
  opacity: 0.6;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-left: -6px;
  justify-content: center;
`;

export const Icon = styled.div<{ theme: "dark" | "light" }>`
  width: 40px;
  height: 40px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s all;
  margin: 0 10px;
  cursor: pointer;
  filter: ${({ theme }) => (theme === "dark" ? "invert(70%)" : "invert(20%)")};

  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }
`;
