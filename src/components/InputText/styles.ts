import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  justify-content: space-around;
  width: 20rem;
  border-radius: ${(props) => props.theme.borderRadius};
  height: 2rem;
  background-color: white;
  input {
    width: 16rem;
    border: none;
    outline: none;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
  }
`;
