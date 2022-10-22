import styled from "styled-components";

export const ContainerFilter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const WrapperDetails = styled.details`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.secondary};
  padding: 0 2rem;
  width: 28rem;
  z-index: 8;
  max-height: 22rem;
  position: absolute;
  top: 32px;
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
