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

  div {
    width: 600px;
    height: 300px;
    background-color: darkgray;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 32px;

    h2 {
      margin-top: 32px;
    }

    p {
      margin-top: 16px;
    }

    button {
      margin-top: 24px;
    }
  }
`;
