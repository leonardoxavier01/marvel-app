import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import api from "../services/contants";
import { IResponseCharacters } from "../types/interfaces";

interface ICartContext {
  dataCharacters: IResponseCharacters[];
  setDataCharacters: (newState: IResponseCharacters[]) => void;
  searchNameStart: string;
  setSearchNameStart: (newState: string) => void;
  dataFetching: () => void;
  handleMore: () => void;
  noMorePosts: boolean;
  searchPerComic: string[];
  setSearchPerComics: (newState: string[]) => void;
}

const initialValue = {
  dataCharacters: [],
  setDataCharacters: () => {},
  searchNameStart: "",
  setSearchNameStart: () => {},
  dataFetching: () => {},
  handleMore: () => {},
  noMorePosts: false,
  searchPerComic: [],
  setSearchPerComics: () => {},
};

export const CharactersContext = createContext<ICartContext>(initialValue);

interface ICharactersContextProps {
  children: ReactNode;
}

export function CharactersProvider({ children }: ICharactersContextProps) {
  const [dataCharacters, setDataCharacters] = useState<IResponseCharacters[]>(
    []
  );
  const [noMorePosts, setNoMorePost] = useState<boolean>(false);
  const [searchNameStart, setSearchNameStart] = useState<string>("");
  const [searchPerComic, setSearchPerComics] = useState<string[]>([]);

  const endpointAndParams: string = `characters?${
    searchNameStart.length > 0 ? `nameStartsWith=${searchNameStart}&` : ""
  }${searchPerComic.length > 0 ? `comics=${searchPerComic}` : ""}`;

  const dataFetching = () => {
    api
      .get(endpointAndParams)
      .then((response) => {
        setDataCharacters(response.data.data.results);
        if (response.data.data.results.length >= 1) {
          setNoMorePost(false);
        }
      })
      .catch((err) => alert(`${err} There was an error here`));
  };

  useEffect(() => {
    dataFetching();
  }, []);

  const handleMore = useCallback(async () => {
    try {
      const offset = dataCharacters.length;
      const response = await api.get(endpointAndParams, {
        params: {
          offset,
        },
      });
      if (response.data.data.results.length <= 1) {
        setNoMorePost(true);
      }

      setDataCharacters([...dataCharacters, ...response.data.data.results]);
    } catch (err) {}
  }, [dataCharacters]);

  return (
    <CharactersContext.Provider
      value={{
        dataCharacters,
        setDataCharacters,
        searchNameStart,
        setSearchNameStart,
        dataFetching,
        handleMore,
        noMorePosts,
        searchPerComic,
        setSearchPerComics,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
}
