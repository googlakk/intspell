import { Route, Routes } from "react-router-dom";

import AudioPage from "./games/audioPage";
import HomePage from "./home";
import OlimpPage from "./games/olimpPage";
import { ROUTES } from "./routes";
import SpellingBeeGame from "./games";
import SpellingGame from "./games/game";

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.SPELLINGBEE} element={<SpellingBeeGame />} />
      <Route path={ROUTES.SPELLING} element={<SpellingGame />} />
      <Route path={ROUTES.OLIMPING} element={<SpellingGame />} />
      <Route path={ROUTES.SPELLINGLEVEL} element={<AudioPage />} />
      <Route path={ROUTES.OLIMPINGLEVEL} element={<OlimpPage />} />
    </Routes>
  );
};

export default Routing;
