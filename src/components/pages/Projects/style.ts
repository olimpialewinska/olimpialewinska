import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  max-width: 1024px;
  color: white;
  margin-top: 0;
  @media (max-width: 1024px) {
    width: 100% !important;
    margin-top: 0 !important;
    padding: 24px !important;
  }
`;
