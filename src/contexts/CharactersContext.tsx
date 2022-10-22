import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import api from "../services/contants";
import {
  IResponseCharacters,
  IResponseComics,
  IStorageCharacters,
} from "../types/interfaces";

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
  storageState: IStorageCharacters[] | null;
  updateStorageState: (charactersStorage: IStorageCharacters[]) => void;
  isLoading: boolean | undefined;
  isLoadingMore: boolean | undefined;
  viewComicsCheked: IResponseComics[];
  setViewComicsCheked: (newState: IResponseComics[]) => void;
  openDetails: boolean;
  setOpenDetails: (newState: boolean) => void;
  checkedStateComic: boolean[];
  setCheckedStateComic: (newState: boolean[]) => void;
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
  storageState: [],
  setStorageState: () => {},
  updateStorageState: () => {},
  isLoading: false,
  isLoadingMore: false,
  viewComicsCheked: [],
  setViewComicsCheked: () => {},
  openDetails: false,
  setOpenDetails: () => {},
  checkedStateComic: [],
  setCheckedStateComic: () => {},
};

export const CharactersContext = createContext<ICartContext>(initialValue);

interface ICharactersContextProps {
  children: ReactNode;
}

export function CharactersProvider({ children }: ICharactersContextProps) {
  const [dataCharacters, setDataCharacters] = useState<IResponseCharacters[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [noMorePosts, setNoMorePost] = useState<boolean>(false);
  const [searchNameStart, setSearchNameStart] = useState<string>("");
  const [searchPerComic, setSearchPerComics] = useState<string[]>([]);
  const [checkedStateComic, setCheckedStateComic] = useState<boolean[]>([]);
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const [viewComicsCheked, setViewComicsCheked] = useState<IResponseComics[]>(
    []
  );
  const [storageState, setStorageState] = useState([]);

  const endpointAndParams: string = `characters?${
    searchNameStart.length > 0 ? `nameStartsWith=${searchNameStart}&` : ""
  }${searchPerComic.length > 0 ? `comics=${searchPerComic}` : ""}`;

  const dataFetching = () => {
    setOpenDetails(false);
    setIsLoading(true);

    api
      .get(endpointAndParams)
      .then((response) => {
        setDataCharacters(response.data.data.results);
        setIsLoading(false);
        if (response.data.data.results.length <= 1) {
          setNoMorePost(false);
        }
      })
      .catch((err) => alert(`${err} There was an error here`));
  };

  const getStorage = () => {
    const storage = localStorage.getItem("items");

    if (storage) {
      const storageParse = JSON.parse(storage);
      setStorageState(storageParse);
    }
  };

  useEffect(() => {
    dataFetching();
    getStorage();
  }, []);

  const updateStorageState = (charactersStorage: IStorageCharacters[]) => {
    localStorage.setItem("items", JSON.stringify(charactersStorage));
    const storage = localStorage.getItem("items");

    if (storage) {
      const storageParse = JSON.parse(storage);
      setStorageState(storageParse);
    }
  };

  const handleMore = useCallback(async () => {
    setIsLoadingMore(true);
    try {
      const offset = dataCharacters.length;
      const response = await api.get(endpointAndParams, {
        params: {
          offset,
        },
      });
      setIsLoadingMore(false);
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
        isLoading,
        isLoadingMore,
        setDataCharacters,
        searchNameStart,
        setSearchNameStart,
        dataFetching,
        handleMore,
        noMorePosts,
        searchPerComic,
        checkedStateComic,
        setCheckedStateComic,
        openDetails,
        setOpenDetails,
        setSearchPerComics,
        storageState,
        updateStorageState,
        viewComicsCheked,
        setViewComicsCheked,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
}
