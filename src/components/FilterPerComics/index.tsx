import React, { useContext, useEffect, useState } from "react";
import { CharactersContext } from "../../contexts/CharactersContext";
import Button from "../Button";
import comicsForFilter from "../../json/comicsForFilter.json";
import { IResponseComics } from "../../types/interfaces";
import {
  BoxButton,
  BoxScrolling,
  ContainerFilter,
  WrapperDetails,
} from "./styles";
import Checkbox from "../Checkbox";

const FilterPerComics: React.FC = () => {
  const [dataFilter, setDataFilter] = useState<IResponseComics[]>([]);

  const {
    openDetails,
    setSearchPerComics,
    dataFetching,
    setViewComicsCheked,
    checkedStateComic,
    setCheckedStateComic,
  } = useContext(CharactersContext);

  useEffect(() => {
    setCheckedStateComic(new Array(comicsForFilter.length).fill(false));
    const newArray: IResponseComics[] = [...comicsForFilter];
    setDataFilter(newArray);
  }, []);

  const handleOnChange = (position: number) => {
    let listParams: string[] = [];
    let listViewParams: IResponseComics[] = [];

    const updatedCheckedState: boolean[] = checkedStateComic.map(
      (item, index) => (index === position ? !item : item)
    );

    updatedCheckedState.forEach((element, index) => {
      if (element) {
        const characterId = comicsForFilter[index].id;
        listParams.push(characterId);
        listViewParams.push({
          id: characterId,
          title: comicsForFilter[index].title,
        });
      }
    });

    setSearchPerComics(listParams);
    setCheckedStateComic(updatedCheckedState);
    setViewComicsCheked(listViewParams);
  };

  return (
    <>
      <ContainerFilter>
        <WrapperDetails open={openDetails}>
          <summary></summary>
          <BoxScrolling>
            <Checkbox
              dataFilter={dataFilter}
              checkedState={checkedStateComic}
              handleOnChange={handleOnChange}
            />
          </BoxScrolling>
          <BoxButton>
            <Button onClick={dataFetching} disabled={false}>
              Apicar
            </Button>
          </BoxButton>
        </WrapperDetails>
      </ContainerFilter>
    </>
  );
};

export default FilterPerComics;
