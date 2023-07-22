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
  height: 200px;
  width: 300px;
  margin: 16px;
  border-radius: 6px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    height: 180px;
    width: 90%;
  }
`;

export const Wrapper = styled.div`
  flex: 1;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  max-height: 200px;
  overflow: hidden;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    max-height: none;
    margin-right: 0;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const Text = styled.div`
  margin-bottom: 14px;
  overflow: hidden;
  text-overflow: ellipsis;

  display: -webkit-box;
  -webkit-line-clamp: 6;
  text-align: justify;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;
