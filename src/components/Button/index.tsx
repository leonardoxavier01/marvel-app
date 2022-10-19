import React, { ReactNode } from "react";
import { ButtonStyled } from "./styles";

interface IButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  disabled: boolean;
}

const Button: React.FC<IButtonProps> = ({ onClick, children, disabled }) => {
  return (
    <ButtonStyled disabled={disabled} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
