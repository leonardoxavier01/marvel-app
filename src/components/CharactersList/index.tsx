import axios from "axios";
import { useEffect, useState } from "react";
import api from "../../services/contants";
import { ContainerCharacter } from "./styles";

interface ResponseDataMarvel {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const CharactersList = () => {
  const [characters, setCharacters] = useState<ResponseDataMarvel[]>([]);
  const [search, setSearch] = useState("");
  const [test, setTest] = useState("");

  const fetchApi = () => {
    api
      .get(`characters`)
      .then((response) => setCharacters(response.data.data.results))
      .catch((err) => alert(`${err} There was an error here`));
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleNameStartsWith = () => {
    if (search.length > 0) {
      api
        .get(`characters?nameStartsWith=${search}`)
        .then((response) => setCharacters(response.data.data.results))
        .catch((err) => alert(`${err} There was an error here`));
    } else {
      fetchApi();
    }
  };

  return (
    <ContainerCharacter>
      <input
        name="search"
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button onClick={handleNameStartsWith}> buscar</button>
      <h4>{search}</h4>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <p>{character.name}</p>
            <span>{character.description}</span>
          </li>
        ))}
      </ul>
    </ContainerCharacter>
  );
};

export default CharactersList;
