import { useContext, useState } from "react";
import { CharactersContext } from "../../contexts/CharactersContext";
import api from "../../services/contants";
import { IResponseCharacters } from "../../types/interfaces";
import CardCharacter from "../CardCharacter";
import InputText from "../InputText";
import Rate from "../Rate";
import Spinner from "../Spinner";
import {
  CharacterDetails,
  ContainerCharacter,
  ContainerRates,
  DeatilsAndRating,
} from "./styles";

const RatingCharacter = () => {
  const [dataCharacter, setDataCharacter] = useState<IResponseCharacters[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchPerName, setSearchPerName] = useState<string>("");
  const { storageState } = useContext(CharactersContext);

  const dataFetching = () => {
    setIsLoading(true);
    api
      .get("characters?", {
        params: {
          name: searchPerName,
        },
      })
      .then((response) => {
        setDataCharacter(response.data.data.results);
        setIsLoading(false);
        if (response.data.data.results.length == 0) {
          alert("Esse personagem não existe");
        }
      })
      .catch(() => {
        setIsLoading(false);
        alert(`Preencha o campo`);
      });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dataFetching();
  };

  return (
    <ContainerCharacter>
      <form onSubmit={handleSubmit}>
        <InputText
          placeholder="Procure pelo nome completo"
          onChange={(e) => setSearchPerName(e.target.value)}
          value={searchPerName}
        />
      </form>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {dataCharacter.length > 0 ? (
            <>
              {dataCharacter?.map((item) => (
                <CharacterDetails key={item.id}>
                  <CardCharacter
                    nameItem={item.name}
                    imageItem={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  />
                  <DeatilsAndRating>
                    <p>{item.description}</p>
                    <Rate characterId={item.id} characterName={item.name} />
                  </DeatilsAndRating>
                </CharacterDetails>
              ))}
            </>
          ) : (
            <h1>Procure e avalie um personagem</h1>
          )}
        </>
      )}
      <div>
        <h2>Suas avaliações:</h2>
        <ContainerRates>
          {storageState?.map((item) => (
            <Rate
              key={item.characterId}
              characterId={item.characterId}
              characterName={item.name}
            />
          ))}
        </ContainerRates>
      </div>
    </ContainerCharacter>
  );
};

export default RatingCharacter;
