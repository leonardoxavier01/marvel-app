import React, { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { ThemeContext } from "styled-components";
import { CharactersContext } from "../../contexts/CharactersContext";
import { IStorageCharacters } from "../../types/interfaces";
import { Container, Radio, Rating, WrapperRate } from "./styles";

interface IRateProps {
  characterId: string;
  characterName: string;
}

const Rate: React.FC<IRateProps> = ({ characterId, characterName }) => {
  const [rate, setRate] = useState(0);

  const { storageState, updateStorageState } = useContext(CharactersContext);

  const { colors } = useContext(ThemeContext);

  useEffect(() => {
    if (storageState) {
      const indexStorage = storageState.findIndex((objct: any) => {
        return objct.characterId === characterId;
      });

      if (indexStorage !== -1) {
        setRate(storageState[indexStorage].rate);
      }
    }
  }, []);

  const handleRating = (givenRating: number) => {
    setRate(givenRating);

    const arrayStorage: IStorageCharacters[] = [
      {
        characterId: characterId,
        name: characterName,
        rate: givenRating,
      },
    ];

    if (storageState?.length == 0 || !storageState) {
      updateStorageState(arrayStorage);
      return;
    }

    const indexStorage = storageState.findIndex((objct: any) => {
      return objct.characterId === characterId;
    });

    if (indexStorage !== -1) {
      storageState[indexStorage].rate = givenRating;
      updateStorageState(storageState);
      return;
    }
    const newArray = [...storageState, ...arrayStorage];

    updateStorageState(newArray)

    return;
  };

  return (
    <Container>
      <p>{characterName}</p>
      <WrapperRate>
        {[...Array(5)].map((item, index) => {
          const givenRating = index + 1;
          return (
            <label key={index}>
              <Radio
                type="radio"
                value={givenRating}
                onClick={() => handleRating(givenRating)}
              />
              <Rating>
                <FaStar
                  size={42}
                  color={
                    givenRating < rate || givenRating === rate
                      ? colors.primary
                      : colors.secondary
                  }
                />
              </Rating>
            </label>
          );
        })}
      </WrapperRate>
    </Container>
  );
};

export default Rate;
