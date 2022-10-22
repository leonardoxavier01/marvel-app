import styled from "styled-components";

export const ContainerFilter = styled.details`
  margin-top: 1rem;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 0 2rem;
  max-width: 80%;
  z-index: 8;
  max-height: 22rem;
  summary {
    font-size: 0.9rem;
    text-align: end;
    cursor: pointer;
  }
`;

export const BoxButton = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    margin: 1rem;
  }
`;

export const BoxScrolling = styled.div`
  padding-top: 1rem;
  overflow: auto;
  max-height: 16rem;

  ::-webkit-scrollbar {
    width: 9px;
  }
  ::-webkit-scrollbar-button {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.primary};
    border: 2px solid ${(props) => props.theme.colors.secondary};
  }
`;

export const SummaryStyled = styled.summary`
  font-size: 0.8rem;
  width: 100%;
  text-align: end;
  cursor: pointer;
  :hover {
    text-decoration: 0.2rem underline;
    text-decoration-color: ${(props) => props.theme.colors.primary};
  }
`;
