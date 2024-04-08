import styled from "styled-components";

export const Container = styled.button`
  width: 250px;
  padding: 14px 18px;
  background-color: var(--cor-primaria);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 24px;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: var(--cor-primaria-dark);
  }
`;
