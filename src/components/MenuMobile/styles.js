import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: #fff;
  z-index: 9999;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 40px;
  align-items: center;
  background-color: var(--cor-primaria);

  img {
    width: 80px;
    height: 80px;
  }
`;

export const Navigation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    color: #000;
    text-decoration: none;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const ItemMenu = styled.div`
  width: 90%;
  height: 60px;
  padding: 12px 30px;
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid #a7a7a7;
  gap: 24px;

  span {
    font-size: 18px;
    font-weight: bold;
  }

  .icon {
    color: var(--cor-primaria);
    font-size: 20px;
  }
`;
