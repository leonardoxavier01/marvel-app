import React from "react";
import { ContainerView } from "./styles";

interface IViewCheckedProps {
  nameItem: string;
}

const ViewCheked: React.FC<IViewCheckedProps> = ({ nameItem }) => {
  return (
    <ContainerView>
      <span>{nameItem}</span>
    </ContainerView>
  );
};

export default ViewCheked;
