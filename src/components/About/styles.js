import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;

  justify-content: center;
  img {
    width: 600px;
    height: 600px;
    background-color: lightgray;
    border-radius: 24px;
  }

  .absolute-position {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;

    .text-area {
      width: 600px;
      color: #fff;

      .title {
        font-size: 32px;
        font-family: var(--fonte-titulos);
        margin-bottom: 10px;
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
`;
