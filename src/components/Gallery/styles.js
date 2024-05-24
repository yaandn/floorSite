import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  @media (max-width: 500px) {
    width: 90%;
    margin: auto;
  }

  h2 {
    font-size: 32px;
    font-family: var(--fonte-titulos);
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
  }

  .fotos {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    display: flex;
    gap: 8px;

    @media (max-width: 500px) {
      flex-direction: column;
      gap: 16px;
      margin-top: 24px;
      margin-bottom: 24px;
    }

    img {
      height: 500px;
      width: 600px;
      background-color: darkgray;
      border-radius: 16px;

      @media (max-width: 500px) {
        width: 100%;
        height: 300px;
        margin: auto;
      }
    }

    .imagens-pequenas {
      display: flex;
      flex-direction: column;
      gap: 8px;

      img {
        height: 250px;
        width: 400px;
        background-color: lightgray;
        border-radius: 16px;

        @media (max-width: 500px) {
          width: 100%;
          height: 300px;
          margin: auto;
        }
      }
    }
  }
`;
