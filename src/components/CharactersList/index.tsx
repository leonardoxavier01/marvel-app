import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { CharactersContext } from "../../contexts/CharactersContext";
import {
  ContainerCharacter,
  ContainerFilters,
  SummaryStyled,
  WrapperCheked,
} from "./styles";
import { FiFilter } from "react-icons/fi";
import Button from "../Button";
import CharacterItem from "../CharacterItem";
import FilterPerComics from "../FilterPerComics";
import InputText from "../InputText";
import Spinner from "../Spinner";
import ViewCheked from "../ViewCheked";

const CharactersList: React.FC = () => {
  const {
    dataCharacters,
    searchNameStart,
    setSearchNameStart,
    dataFetching,
    viewComicsCheked,
    handleMore,
    noMorePosts,
    isLoading,
    isLoadingMore,
    openDetails,
    setOpenDetails,
  } = useContext(CharactersContext);

  const { colors } = useContext(ThemeContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dataFetching();
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
    <ContainerCharacter>
      <ContainerFilters>
        <form onSubmit={handleSubmit}>
          <InputText
            placeholder="Procure pelo começo do nome"
            onChange={(e) => setSearchNameStart(e.target.value)}
            value={searchNameStart}
          />
        </form>
        <SummaryStyled onClick={handleOpenDetails}>
          Filtre por quadrinhos <FiFilter size={18} color={colors.primary} />
        </SummaryStyled>
      </ContainerFilters>
      <WrapperCheked>
        {searchNameStart.length > 0 && (
          <ViewCheked nameItem={searchNameStart} />
        )}
        {viewComicsCheked.map((item) => (
          <ViewCheked key={item.id} nameItem={item.title} />
        ))}
      </WrapperCheked>
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
                Ver mais
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
