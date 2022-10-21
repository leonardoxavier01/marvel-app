import { useContext, useState } from "react";
import { CharactersContext } from "../../contexts/CharactersContext";
import api from "../../services/contants";
import { IResponseCharacters } from "../../types/interfaces";
import CardCharacter from "../CardCharacter";
import CharacterItem from "../CharacterItem";
import InputText from "../InputText";
import Rate from "../Rate";
import {
  CharacterDetails,
  ContainerCharacter,
  DeatilsAndRating,
} from "./styles";

const RatingCharacter = () => {
  const [dataCharacter, setDataCharacter] = useState<IResponseCharacters[]>([]);

  const [searchPerName, setSearchPerName] = useState<string>("");

  const { storageState, updateStorageState } = useContext(CharactersContext);

  const dataFetching = () => {
    api
      .get("characters?", {
        params: {
          name: searchPerName,
        },
      })
      .then((response) => {
        setDataCharacter(response.data.data.results);
        console.log(response.data.data.results);
      })
      .catch(() => alert(`Digite um nome correto`));
  };

  return (
    <ContainerCharacter>
      <InputText
        placeholder="Search by complete name"
        onChange={(e) => setSearchPerName(e.target.value)}
        value={searchPerName}
        onClick={dataFetching}
      />
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

      <div>
        <h2>Suas avaliações:</h2>
        {storageState?.map((item) => (
          <Rate
            key={item.characterId}
            characterId={item.characterId}
            characterName={item.name}
          />
        ))}
      </div>
    </ContainerCharacter>
  );
};

export default RatingCharacter;
