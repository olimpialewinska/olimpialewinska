import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-left: -6px;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  filter: invert(100%);
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s all;
  margin: 0 5px;

  &:hover {
    transform: scale(1.1);
  }
`;
