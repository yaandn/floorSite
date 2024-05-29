import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px auto 0 auto;
  flex-direction: column;
  background-color: var(--cor-primaria);

  h2 {
    font-size: 32px;
    font-family: var(--fonte-titulos);
    margin: 40px 0;
    color: #fff;
  }
  .image-container {
    width: 60%;
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 40px;
    justify-content: center;
    gap: 24px;

    @media (max-width: 500px) {
      width: 100%;
    }
  }

  img {
    width: 360px;
    height: 350px;
    border-radius: 8px;
    background-color: #a6a6a6;

    @media (max-width: 500px) {
      width: 90%;
      height: 300px;
    }
  }
`;
