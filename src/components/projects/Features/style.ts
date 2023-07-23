import styled from "styled-components";

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 12px;
  flex-wrap: nowrap;
  margin-bottom: 10px;
  width: 100%;
  overflow-y: auto;
  min-height: 100px;

  @media (max-width: 1020px) {
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
