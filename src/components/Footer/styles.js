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

    @media (max-width: 500px) {
      display: block;
      text-align: center;
      width: 100%;
    }
  }
`;

export const Main = styled.div`
  width: 1000px;
  height: 80%;
  padding-top: 80px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
    height: auto;
    align-items: center;
    padding-top: 32px;
  }

  border-bottom: 1px solid #fff;

  justify-content: space-around;

  .icons {
    display: flex;
    @media (max-width: 500px) {
      width: 80%;
      margin-bottom: 24px;
      gap: 16px;
    }

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

    @media (max-width: 500px) {
      width: 100%;
    }

    .paths {
      width: 60%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 24px;
      margin-bottom: 40px;

      @media (max-width: 500px) {
        width: 80%;
      }

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

  .icon-up {
    @media (max-width: 500px) {
      display: none;
    }
  }

  .infos {
    margin-bottom: 24px;

    @media (max-width: 500px) {
      width: 80%;
    }
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

    @media (max-width: 500px) {
      margin-bottom: 24px;
    }

    img {
      width: 50px;
    }
  }
`;
