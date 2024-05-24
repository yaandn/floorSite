import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 90%;
    margin: 40px auto;
  }
`;
