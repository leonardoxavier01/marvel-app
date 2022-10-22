import React, { useContext, useState } from "react";
import { CharactersContext } from "../../contexts/CharactersContext";
import { ContainerCharacter } from "./styles";
import Button from "../Button";
import CharacterItem from "../CharacterItem";
import FilterPerComics from "../FilterPerComics";
import InputText from "../InputText";
import Spinner from "../Spinner";

const CharactersList: React.FC = () => {
  const {
    dataCharacters,
    searchNameStart,
    setSearchNameStart,
    dataFetching,
    handleMore,
    noMorePosts,
    isLoading,
    isLoadingMore,
  } = useContext(CharactersContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dataFetching();
  };

  return (
    <ContainerCharacter>
      <form onSubmit={handleSubmit}>
        <InputText
          placeholder="Procure pelo começo do nome"
          onChange={(e) => setSearchNameStart(e.target.value)}
          value={searchNameStart}
        />
      </form>
      <FilterPerComics />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {dataCharacters.length > 0 ? (
            <>
              <ul>
                {dataCharacters.map((item, index) => (
                  <CharacterItem
                    key={`itemId${item.id}&position=${index}`}
                    imageItem={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                    nameItem={item.name}
                    descriptionItem={item.description}
                  />
                ))}
              </ul>
              {isLoadingMore && <Spinner />}
              <Button disabled={noMorePosts} onClick={handleMore}>
                See more
              </Button>
            </>
          ) : (
            <p>Nenhum resultado encontrado</p>
          )}
        </>
      )}
    </ContainerCharacter>
  );
};

export default CharactersList;
