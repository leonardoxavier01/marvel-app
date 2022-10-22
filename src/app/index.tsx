import CharactersList from "../components/CharactersList";
import { ConatinerApp, BoxImage, ContainerLeftRigth } from "./styles";
import marvelLogo from "../assets/images/marvel-logo.png";
import SearchCharacter from "../components/RatingCharacter";

const App = () => {
  return (
    <ConatinerApp>
      <BoxImage>
        <img src={marvelLogo} alt="marvel logo" />
      </BoxImage>
      <ContainerLeftRigth>
        <CharactersList />
        <SearchCharacter />
      </ContainerLeftRigth>
    </ConatinerApp>
  );
};

export default App;
