import { ContainerInput } from "./styles";
import { BsSearch } from "react-icons/bs";
import React, { ChangeEventHandler } from "react";

interface IInputProps {
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}

const InputText: React.FC<IInputProps> = (props) => {
  return (
    <ContainerInput>
      <input
        name="search"
        type="text"
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
      <button>
        <BsSearch size={20} />
      </button>
    </ContainerInput>
  );
};

export default InputText;
