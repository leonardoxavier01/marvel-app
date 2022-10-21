import { useState } from "react";
import {
  ContainerCharacter,
  ImageItemStyled,
  NameAndImage,
  NameSumary,
} from "./styles";

interface ICharacterItemProps {
  nameItem: string;
  descriptionItem: string;
  imageItem: string;
}

const CharacterItem: React.FC<ICharacterItemProps> = ({
  nameItem,
  descriptionItem,
  imageItem,
}) => {
  const [isDoneDetails, setIsDoneDetails] = useState<boolean>(false);

  const handleIsDone = () => {
    if (!isDoneDetails) {
      setIsDoneDetails(true);
    } else {
      setIsDoneDetails(false);
    }
  };

  return (
    <ContainerCharacter>
      <NameAndImage>
        <ImageItemStyled src={imageItem} alt={`image ${nameItem}`} />
        <NameSumary>
          <p>{nameItem}</p>
          {descriptionItem.length > 0 && (
            <summary onClick={handleIsDone}>Descriçao</summary>
          )}
        </NameSumary>
      </NameAndImage>
      {descriptionItem.length > 0 && (
        <>
          <details open={isDoneDetails}>
            <summary>{""}</summary>
            <span>{descriptionItem}</span>
          </details>
        </>
      )}
    </ContainerCharacter>
  );
};

export default CharacterItem;
