import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: 11rem;
  height: 2.5rem;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  border: 1px solid ${(props) => props.theme.colors.secondary};
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.secondary};
    border-color: ${(props) => props.theme.colors.primary};
    transition: 0.4s ease-in-out;
  }
  :disabled {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.black};
    :hover {
      border: none;
      cursor: default;
    }
  }
`;
