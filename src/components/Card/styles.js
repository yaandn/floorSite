import styled from "styled-components";

export const Container = styled.div`
  height: 300px;
  width: 250px;
  background-color: var(--cor-primaria);
  border-radius: 16px;
  border: 1px solid #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 32px 0;

  .title {
    font-size: 24px;
    text-decoration: none;
    color: #fff;
    font-family: var(--fonte-titulos);
  }
`;