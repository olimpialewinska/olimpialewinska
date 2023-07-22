import styled from "styled-components";

export const IndexContainer = styled.div`
  margin-top: -60px;
  display: flex;
  justify-content: center;
  perspective: 600px;

  @media (max-width: 786px) {
    width: 100%;
    height: calc(100vh - 60px);
  }
`;

export const IndexCard = styled.div`
  padding: 96px;
  max-width: 1024px;
  background: linear-gradient(#4776e6, #8e54e9);
  margin-top: 32px;

  @media (max-width: 768px) {
    width: 100% !important;
    margin-top: 0 !important;
    padding: 24px !important;
  }
`;

export const WrapperMain = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    height: 60vh !important;
  }
`;

export const Content = styled.div`
  flex: 1;
  transform: translateX(16px) rotateX(-10deg) rotateY(10deg);
  z-index: 2;

  @media (max-width: 1024px) {
    flex: 1;
    transform: translateX(0px) rotateX(0deg) rotateY(0deg) !important;
    z-index: 2;
    height: 10vh !important;
  }
`;

export const ContentTitle = styled.h1`
  color: white;
  font-size: 4rem;
  font-weight: bold;
  @media (max-width: 1024px) {
    font-size: 4rem !important;
  }
`;

export const ContentDescription = styled.p`
  color: white;
  margin-top: 70px;

  @media (max-width: 1024px) {
    margin-top: 50px !important;
  }
`;

export const Button = styled.a`
  padding: 12px 24px;
  transition: 0.2s background-color, 0.2s border;
  cursor: pointer;
  border: 3px solid rgba(255, 255, 255, 0.7);
  color: white;
  font-size: 16px;
  width: fit-content;
  margin-top: 32px;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  gap: 12px;
  align-items: center;
  transition: 0.2s background-color, 0.2s color;
  text-decoration: none;

  &:hover {
    background-color: white;
    color: black;
  }
`;

export const ButtonImage = styled.div`
  background-image: url(/right.png);
  background-repeat: no-repeat;
  background-size: contain;
  width: 20px;
  height: 20px;
  background-position: center;
  filter: invert(100%);
  transition: 0.2s filter, 0.2s transform;
  transform: translateX(0);

  ${Button}:hover & {
    filter: invert(0);
    transform: translateX(6px);
  }
`;
