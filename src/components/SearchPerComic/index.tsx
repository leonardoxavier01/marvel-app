import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { CharactersContext } from "../../contexts/CharactersContext";
import api from "../../services/contants";
import { IResponseComics } from "../../types/interfaces";
import Button from "../Button";

const SearchPerCommic: React.FC = () => {
  const [dataComics, setDataComics] = useState<IResponseComics[]>([]);
  const [checkedState, setCheckedState] = useState<boolean[]>([]);

  const { searchPerComic, setSearchPerComics, dataFetching } =
    useContext(CharactersContext);

  useEffect(() => {
    api
      .get(`comics?`)
      .then((response) => {
        setDataComics(response.data.data.results);
        setCheckedState(
          new Array(response.data.data.results.length).fill(false)
        );
      })
      .catch((err) => alert(`${err} There was an error here`));
  }, []);

  const handleMore = useCallback(async () => {
    try {
      const offset = dataComics.length;
      const response = await api.get("comics?", {
        params: {
          offset,
        },
      });
      setCheckedState([
        ...checkedState,
        ...new Array(response.data.data.results.length).fill(false),
      ]);
      setDataComics([...dataComics, ...response.data.data.results]);
    } catch (err) {}
  }, [dataComics]);

  const handleOnChange = (position: number) => {
    let listParams: string[] = [];

    const updatedCheckedState: boolean[] = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    updatedCheckedState.forEach((element, index) => {
      if (element) {
        listParams.push(dataComics[index].id);
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
          {dataComics.map((item: any, index: number) => (
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
          <Button disabled={false} onClick={handleMore}>
            See more
          </Button>
        </details>
      </div>
    </div>
  );
};

export default SearchPerCommic;
