import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    height: fit-content;
    background-color: var(--cor-primaria);
    padding: 32px;
  }

  img {
    width: 600px;
    height: 600px;
    background-color: lightgray;
    border-radius: 24px;

    @media (max-width: 500px) {
      height: 350px;
      width: 350px;
    }
  }

  .absolute-position {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;

    @media (max-width: 500px) {
      flex-direction: column;
      position: relative;
    }

    .text-area {
      width: 600px;
      color: #fff;

      @media (max-width: 500px) {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }

      .title {
        font-size: 32px;
        font-family: var(--fonte-titulos);
        margin-bottom: 10px;

        @media (max-width: 500px) {
          font-size: 28px;
        }
      }

      button {
        margin-top: 20px;
        border: 2px solid;
      }
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 500px;
  background-color: var(--cor-primaria);

  @media (max-width: 500px) {
    position: absolute;
    margin-top: 60px;
  }
`;
