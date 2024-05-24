import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 800px;
  background-image: url(${(props) => props.imgUrl});

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    min-height: 400px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;

  span {
    font-size: 30px;
    font-family: var(--fonte-titulos);
    color: #fff;
  }

  a {
    text-decoration: none;
  }
`;
