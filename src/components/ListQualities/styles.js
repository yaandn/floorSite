import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    background-color: var(--cor-primaria);
    height: fit-content;
    justify-content: center;
  }

  justify-content: center;
  img {
    width: 600px;
    height: 600px;

    border-radius: 24px;

    @media (max-width: 500px) {
      width: 350px;
      height: 350px;
      margin-bottom: 40px;
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
      width: 90%;
      gap: 0;
    }

    ul {
      margin-left: 20px;

      @media (max-width: 500px) {
        margin-left: 0;
        width: 90%;

        li {
          font-size: 18px;
        }
      }
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
        margin: 40px auto;
      }

      .title {
        font-size: 32px;
        font-family: var(--fonte-titulos);
        margin-bottom: 20px;

        @media (max-width: 500px) {
          font-size: 28px;
        }
      }

      button {
        margin-top: 40px;
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
    height: fit-content;
    display: none;
  }
`;
