import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 32px;
  margin-top: 40px;
  margin-bottom: 40px;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const CardShop = styled.div`
  width: 600px;
  height: 300px;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(${({ urlImg }) => urlImg});

  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 32px;

  @media (max-width: 500px) {
    width: 90%;
  }

  h2 {
    margin-top: 32px;
  }

  p {
    margin-top: 16px;
  }

  button {
    margin-top: 24px;
  }
`;
