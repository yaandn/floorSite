import { styled } from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;

  @media (max-width: 500px) {
    width: 90%;
    justify-content: center;
    margin: auto;
    margin-top: 40px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-family: var(--fonte-titulos);
  margin-bottom: 32px;

  @media (max-width: 500px) {
    font-size: 28px;
  }
`;
