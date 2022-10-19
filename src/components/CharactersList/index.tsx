import React, { useContext, useState } from "react";
import { CharactersContext } from "../../contexts/CharactersContext";
import { ContainerCharacter } from "./styles";
import Button from "../Button";
import CharacterItem from "../CharacterItem";
import SearchPerCommic from "../SearchPerComic";

const CharactersList: React.FC = () => {
  const {
    dataCharacters,
    searchNameStart,
    setSearchNameStart,
    dataFetching,
    handleMore,
    noMorePosts,
  } = useContext(CharactersContext);

  return (
    <ContainerCharacter>
      <input
        name="search"
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchNameStart(e.target.value)}
        value={searchNameStart}
      />
      <button onClick={dataFetching}> buscar</button>
      <SearchPerCommic />
      {dataCharacters.length > 0 ? (
        <>
          <ul>
            {dataCharacters.map((item) => (
              <CharacterItem
                key={item.id}
                nameItem={item.name}
                descriptionItem={item.description}
              />
            ))}
          </ul>
          <Button disabled={noMorePosts} onClick={handleMore}>
            See more
          </Button>
        </>
      ) : (
        <p>Nenhum resultado encontrado</p>
      )}
    </ContainerCharacter>
  );
};

export default CharactersList;
