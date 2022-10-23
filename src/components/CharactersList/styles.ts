import styled from "styled-components";

export const ContainerCharacter = styled.section`
  margin-top: 1.5rem;
  width: 50%;
  border-right: 1px solid ${(props) => props.theme.colors.secondary};
  padding: 0 2rem 0 0;
  position: relative;

  @media (max-width: 700px) {
    min-width: 100%;
  }

  @media (max-width: 1080px) {
    width: 80%;
    padding: 0;
    border: none;
  }
`;

export const ContainerFilters = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 1080px) {
    margin-top: 1.5rem;
  }
`;

export const SummaryStyled = styled.summary`
  font-size: 1.2rem;
  padding: 0 0 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 12rem;
  cursor: pointer;

  :hover {
    text-decoration: 0.2rem underline;
    text-decoration-color: ${(props) => props.theme.colors.primary};
  }

  @media (max-width: 700px) {
    margin-top: 0.1rem;
  }
`;

export const WrapperCheked = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
