import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  height: 20rem;
  width: 16rem;
  background-color: ${(props) => props.theme.colors.secondary};
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius};
  img {
    border-radius: ${(props) => props.theme.borderRadius};
    max-width: 15.5rem;
    max-height: 15.5rem;
  }

  p {
    margin: 1rem;
    font-size: 1.5rem;
  }
`;
