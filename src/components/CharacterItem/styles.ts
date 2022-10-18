import styled from "styled-components";

export const ContainerCharacter = styled.li`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid ${(props) => props.theme.colors.primary};
  margin: 1rem 0;
  padding: 1rem;
  border-radius: ${(props) => props.theme.borderRadius};
  min-height: 2.5rem;
  width: 100%;
  background-color: ${(props) => props.theme.colors.secondary};

  details {
    padding: 0.5rem;

    span {
      font-size: 1.2rem;
    }
  }
`;

export const NameSumary = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  p {
    font-size: 1.5rem;
  }

  summary {
    font-size: 1.3rem;
    cursor: pointer;

    :hover {
      text-decoration: underline ${(props) => props.theme.colors.primary};
    }
  }
`;
