import React, { useContext, useEffect, useState } from "react";
import { CharactersContext } from "../../contexts/CharactersContext";
import Button from "../Button";
import comicsForFilter from "../../json/comicsForFilter.json";
import { IResponseComics } from "../../types/interfaces";
import { BoxButton, BoxScrolling, ContainerFilter } from "./styles";
import Checkbox from "../Checkbox";

const FilterPerComics: React.FC = () => {
  const [checkedState, setCheckedState] = useState<boolean[]>([]);
  const [dataFilter, setDataFilter] = useState<IResponseComics[]>([]);

  useEffect(() => {
    setCheckedState(new Array(comicsForFilter.length).fill(false));
    const newArray: IResponseComics[] = [...comicsForFilter];
    setDataFilter(newArray);
  }, []);

  const { searchPerComic, setSearchPerComics, dataFetching } =
    useContext(CharactersContext);

  const handleOnChange = (position: number) => {
    let listParams: string[] = [];

    const updatedCheckedState: boolean[] = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    updatedCheckedState.forEach((element, index) => {
      if (element) {
        listParams.push(comicsForFilter[index].id);
      }
    });

    setSearchPerComics(listParams);
    setCheckedState(updatedCheckedState);
  };

  console.log(searchPerComic);

  return (
    <ContainerFilter>
      <summary>
        <h2>Filter by comics</h2>
      </summary>
      <BoxScrolling>
        <Checkbox
          dataFilter={dataFilter}
          checkedState={checkedState}
          handleOnChange={handleOnChange}
        />
      </BoxScrolling>
      <BoxButton>
        <Button onClick={dataFetching} disabled={false}>
          Apply
        </Button>
      </BoxButton>
    </ContainerFilter>
  );
};

export default FilterPerComics;
