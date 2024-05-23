import styled from "styled-components";

export const Container = styled.div`
  width: 400px;

  img {
    background-color: lightgray;
    width: 100%;
    height: 250px;
    border-radius: 16px;
  }

  h2 {
    font-family: var(--fonte-titulos);
    font-weight: 400;
    margin-top: 8px;
  }

  p {
    font-size: 16px;
    margin-top: 8px;
    color: gray;
  }

  .footer {
    margin-top: 16px;
    color: #000;
    .link-footer {
      color: #000;
    }
  }
`;
