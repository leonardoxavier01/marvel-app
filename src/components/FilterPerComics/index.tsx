import React, { useContext, useEffect, useState } from "react";
import { CharactersContext } from "../../contexts/CharactersContext";
import Button from "../Button";
import comicsForFilter from "../../json/comicsForFilter.json";
import { IResponseComics } from "../../types/interfaces";

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
    <div>
      <div>
        <details open>
          <summary>
            <button onClick={dataFetching}>filtrar comic</button>
            <h2>Details</h2>
          </summary>
          {dataFilter.map((item: any, index: number) => (
            <div key={index}>
              <input
                type={"checkbox"}
                id={item.title}
                name={item.title}
                checked={checkedState[index]}
                onChange={() => handleOnChange(index)}
              />
              <label htmlFor={item.title}>{item.title}</label>
            </div>
          ))}
        </details>
      </div>
    </div>
  );
};

export default FilterPerComics;
