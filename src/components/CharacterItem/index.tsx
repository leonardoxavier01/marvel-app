import { useState } from "react";
import { ContainerCharacter, NameSumary } from "./styles";

interface ICharacterItemProps {
  nameItem: string;
  descriptionItem: string;
}

const CharacterItem: React.FC<ICharacterItemProps> = ({
  nameItem,
  descriptionItem,
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
      <NameSumary>
        <p>{nameItem}</p>
        {descriptionItem.length > 0 && (
          <summary onClick={handleIsDone}>Descriçao</summary>
        )}
      </NameSumary>
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
