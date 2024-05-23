import styled from "styled-components";

export const Container = styled.footer`
  height: 450px;
  width: 100%;
  background-color: var(--cor-padrao-dark);
  display: flex;
  flex-direction: column;

  .copy {
    color: #fff;
    font-size: 14px;
    display: block;
    width: 1000px;
    margin: 0 auto;
    margin-top: 16px;
  }
`;

export const Main = styled.div`
  width: 1000px;
  height: 80%;
  padding-top: 80px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;

  border-bottom: 1px solid #fff;

  justify-content: space-around;

  .icons {
    display: flex;

    gap: 8px;

    .icon {
      cursor: pointer;
      transition: all 0.2s ease-in;

      &:hover {
        width: 36px;
        height: 36px;
      }
    }
  }

  .nav {
    display: flex;
    flex-direction: column;
    width: 700px;

    align-items: center;

    .paths {
      width: 60%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 24px;
      margin-bottom: 40px;

      a {
        text-decoration: none;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        border-bottom: 2px solid transparent;
        transition: all 0.3s ease-in;

        &:hover {
          border-bottom: 2px solid #fff;
        }
      }
    }
  }

  .infos {
    margin-bottom: 24px;
    span {
      font-size: 18px;
      color: #fff;
    }
  }

  .cards {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    img {
      width: 50px;
    }
  }
`;
