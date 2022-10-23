import styled from "styled-components";

export const Container = styled.div`
  min-width: 13rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  display: flex;
  align-items: flex-start;

  p {
    font-size: 1.5rem;
  }

  span {
    font-size: 0.9rem;
    width: 100%;
    text-align: start;
    cursor: pointer;

    :hover {
      text-decoration: underline;
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const Radio = styled.input`
  display: none;
`;

export const Rating = styled.div`
  cursor: pointer;
`;

export const WrapperRate = styled.div`
  display: flex;
`;
