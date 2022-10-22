import React from "react";
import { IResponseComics } from "../../types/interfaces";
import { ContainerCheckbox } from "./styles";

interface ICheckboxProps {
  dataFilter: IResponseComics[];
  checkedState: boolean[]
  handleOnChange : (index: number) => void
}

const Checkbox: React.FC<ICheckboxProps> = ({ dataFilter, checkedState, handleOnChange }) => {
  return (
    <>
      {dataFilter.map((item: any, index: number) => (
        <ContainerCheckbox key={index}>
          <input
            type={"checkbox"}
            id={item.title}
            name={item.title}
            checked={checkedState[index]}
            onChange={() => handleOnChange(index)}
          />
          <label htmlFor={item.title}>{item.title}</label>
        </ContainerCheckbox>
      ))}
    </>
  );
};

export default Checkbox;
