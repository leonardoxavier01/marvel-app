import React, { useContext, useEffect, useState } from "react";
import { CharactersContext } from "../../contexts/CharactersContext";
import Button from "../Button";
import comicsForFilter from "../../json/comicsForFilter.json";
import { IResponseComics } from "../../types/interfaces";
import {
  BoxButton,
  BoxScrolling,
  ContainerFilter,
  SummaryStyled,
} from "./styles";
import Checkbox from "../Checkbox";

const FilterPerComics: React.FC = () => {
  const [checkedState, setCheckedState] = useState<boolean[]>([]);
  const [dataFilter, setDataFilter] = useState<IResponseComics[]>([]);
  const [openDetails, setOpenDetails] = useState<boolean>(false);

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

  const handleOpenDetails = () => {
    if (!openDetails) {
      setOpenDetails(true);
      return;
    }
    {
      setOpenDetails(false);
    }
  };

  return (
    <>
      <SummaryStyled onClick={handleOpenDetails}>
        <h2>Filtre por quadrinhos</h2>
      </SummaryStyled>
      <ContainerFilter open={openDetails}>
        <summary></summary>
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
    </>
  );
};

export default FilterPerComics;
