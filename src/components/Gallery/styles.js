import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

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

    img {
      height: 500px;
      width: 600px;
      background-color: darkgray;
      border-radius: 16px;
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
      }
    }
  }
`;
