import styled from "styled-components";

export const ConatinerApp = styled.main`
  padding: 5rem 4rem;
  min-height: 100vh;

  @media (max-width: 900px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 400px) {
    padding: 1rem 0.5rem;
  }
`;

export const BoxImage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 9rem;
  }
`;

export const ContainerLeftRigth = styled.div`
  display: flex;

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
  }
`;
