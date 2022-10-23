import styled from "styled-components";

export const ContainerCharacter = styled.div`
  margin-top: 1.5rem;
  width: 50%;
  border-right: 1px solid ${(props) => props.theme.colors.secondary};
  padding: 0 0 0 2rem;

  h1 {
    margin-top: 1rem;
    font-size: 1.6rem;
  }

  h2 {
    margin-top: 1rem;
    font-size: 1.5rem;
  }

  @media (max-width: 700px) {
    min-width: 100%;
  }

  @media (max-width: 1080px) {
    width: 80%;
    padding: 0;
    border: none;
  }
`;

export const CharacterDetails = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 1rem 0;
  padding: 1rem;
  box-shadow: 0px 6px 20px -8px ${(props) => props.theme.colors.secondary};
  border-radius: ${(props) => props.theme.borderRadius};
  width: 95%;
  min-height: 22rem;

  @media (max-width: 1280px) {
    flex-direction: column;
  }
`;

export const DeatilsAndRating = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 1rem;

  p {
    font-size: 1.2rem;
  }

  span {
    font-size: 0.9rem;
    margin: 0.3rem;
  }

  @media (max-width: 1280px) {
    margin-top: 1rem;
    padding: 0;
  }
`;

export const ContainerRates = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
`;
