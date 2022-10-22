import styled from "styled-components";

export const ContainerView = styled.div`
  margin: 0.5rem;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 0.5rem;
  min-width: 1rem;
  min-height: 2rem;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.secondary};
  border: 1px solid ${(props) => props.theme.colors.primary};

  span {
    font-size: 0.9rem;
  }
`;
