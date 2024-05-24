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

    @media (max-width: 500px) {
      margin-top: 40px;
      margin-bottom: 40px;
    }

    span {
      font-family: var(--fonte-titulos);
      font-size: 44px;

      @media (max-width: 500px) {
        font-size: 32px;
        text-align: center;
      }
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

  @media (max-width: 500px) {
    position: relative;
    bottom: 0;
    flex-direction: column;
    margin-top: 40px;
  }
`;
