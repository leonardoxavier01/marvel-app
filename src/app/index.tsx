import CharactersList from "../components/CharactersList";
import { ConatinerApp, BoxImage } from "./styles";
import marvelLogo from "../assets/images/marvel-logo.png";

const App = () => {
  return (
    <ConatinerApp>
      <BoxImage>
        <img src={marvelLogo} alt="marvel logo" />
      </BoxImage>
      <CharactersList />
    </ConatinerApp>
  );
};

export default App;
