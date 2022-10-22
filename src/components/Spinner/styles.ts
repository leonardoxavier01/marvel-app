import styled from "styled-components";

export const ContainerSpinner = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    display: inline-block;
    width: 80px;
    height: 80px;
    ::after {
      content: " ";
      display: block;
      width: 50px;
      height: 50px;
      margin: 6px;
      border-radius: 50%;
      border: 4px solid #fff;
      border-color: ${(props) => props.theme.colors.primary} transparent
        ${(props) => props.theme.colors.primary} transparent;
      animation: lds-dual-ring 1.2s linear infinite;
    }
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
