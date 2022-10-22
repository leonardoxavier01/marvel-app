import React from "react";
import { ContainerCard } from "./styles";

interface ICharacterItemProps {
  nameItem: string;
  imageItem: string;
}

const CardCharacter: React.FC<ICharacterItemProps> = ({
  nameItem,
  imageItem,
}) => {
  return (
    <ContainerCard>
      <img src={imageItem} alt={`image ${nameItem}`} />
      <p>{nameItem}</p>
    </ContainerCard>
  );
};

export default CardCharacter;
