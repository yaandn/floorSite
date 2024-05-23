import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .call-to-action {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
    margin-top: 200px;
    margin-bottom: 60px;

    span {
      font-family: var(--fonte-titulos);
      font-size: 44px;
    }
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: -50px;
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
`;
