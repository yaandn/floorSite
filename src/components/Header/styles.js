import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding: 32px 0;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 160px;
`;

export const Logo = styled.img`
  width: 150px;
  background-color: #fff;
  height: 90px;
`;

export const Navigation = styled.nav`
  width: fit-content;

  display: flex;
  gap: 12px;
  align-items: center;
  flex-direction: column;

  .infos {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 24px;

    .item {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;
      color: #fff;

      span {
        font-size: 15px;
        font-family: var(--fonte-infos);
      }
    }
  }

  .nav {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    color: #fff;
    font-size: 16px;
    font-family: "Open Sans";
    font-weight: 700;

    .nav-item {
      border-bottom: 2px solid transparent;
      padding-bottom: 4px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        border-bottom: 2px solid var(--cor-primaria);
      }
    }
  }
`;

export const Search = styled.div`
  width: 250px;
  background-color: #fff;
  border: 2px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px;
  color: grey;
  border-radius: 8px;

  input {
    outline: none;
    border: none;

    width: 100%;
  }
`;
