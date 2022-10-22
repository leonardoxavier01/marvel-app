import styled from "styled-components";

export const ContainerCharacter = styled.section`
  margin-top: 1.5rem;
  width: 50%;
  border-right: 1px solid ${(props) => props.theme.colors.secondary};
  padding: 0 2rem 0 0;
  position: relative;
`;

export const ContainerFilters = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SummaryStyled = styled.summary`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 12rem;
  cursor: pointer;

  :hover {
    text-decoration: 0.2rem underline;
    text-decoration-color: ${(props) => props.theme.colors.primary};
  }
`;
