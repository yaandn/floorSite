import styled from "styled-components";

export const Container = styled.div`
  height: 250px;
  width: 1200px;
  background-color: #e6e6e6;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 40px;
  border-radius: 8px;

  @media (max-width: 500px) {
    width: 100%;
    flex-direction: column;
    gap: 24px;
    height: auto;
    padding: 16px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 12px;
`;

export const Description = styled.p`
  font-size: 20px;

  text-align: justify;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 100%;
  justify-content: center;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  height: 270px;
  width: 300px;
  background-color: var(--cor-primaria);
  border-radius: 8px;

  webkit-box-shadow: 0px 0px 65px -4px rgba(133, 133, 133, 1);
  -moz-box-shadow: 0px 0px 65px -4px rgba(133, 133, 133, 1);
  box-shadow: 0px 0px 65px -4px rgba(133, 133, 133, 1);
`;
