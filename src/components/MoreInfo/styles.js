import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;

  .link-footer {
    color: #fff;
    text-decoration: none;
    font-size: 15px;
    font-weight: 600;
    display: flex;
    align-items: center;
    transition: all 0.3s ease-in;

    &:hover {
      font-size: 16px;
      margin-left: 4px;
    }
  }
`;
