import styled from "styled-components";

export const ContainerCharacter = styled.li`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: ${(props) => props.theme.boxShadow};
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
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin: 0 1rem 0 1rem;
  p {
    font-size: 1.5rem;
  }

  summary {
    font-size: 1.1rem;
    cursor: pointer;

    :hover {
      text-decoration: underline ${(props) => props.theme.colors.primary};
    }
  }
`;

export const NameAndImage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ImageItemStyled = styled.img`
  border: 5px solid ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius};
  max-width: 7rem;
  min-height: 2rem;
`;
