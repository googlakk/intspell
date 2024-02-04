import { Route, Routes } from "react-router-dom";

import AudioPage from "@pages/games/spellingBee/audioPage";
import HomePage from "./home";
import KyrgyzAudioPage from "@pages/games/kyrgyz/audioPage";
import KyrgyzOlimpPage from "@pages/games/kyrgyz/olimpPage";
import KyrgyzSpellingBeeGame from "@pages/games/kyrgyz/index";
import KyrgyzSpellingGame from "@pages/games/kyrgyz/game/index";
import OlimpPage from "@pages/games/spellingBee/olimpPage/index";
import { ROUTES } from "./routes";
import SpellingBeeGame from "@pages/games/spellingBee/index";
import SpellingGame from "@pages/games/spellingBee/game/index";
import StudentsAudioPage from "@pages/games/students/audioPage";
import StudentsOlimpPage from "@pages/games/students/olimpPage/index";
import StudentsSpellingBeeGame from "@pages/games/students/index";
import StudentsSpellingGame from "@pages/games/students/game/index";

const Routing: React.FC = () => {
  return (
    <Routes>
      {/** Engilsh for teachers */}
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.SPELLINGBEE} element={<SpellingBeeGame />} />
      <Route path={ROUTES.SPELLING} element={<SpellingGame />} />
      <Route path={ROUTES.OLIMPING} element={<SpellingGame />} />
      <Route path={ROUTES.SPELLINGLEVEL} element={<AudioPage />} />
      <Route path={ROUTES.OLIMPINGLEVEL} element={<OlimpPage />} />
      {/** Kyrgyz */}
      <Route path={ROUTES.KYRGYZ} element={<KyrgyzSpellingBeeGame />} />
      <Route path={ROUTES.KYRGYZSPELLING} element={<KyrgyzSpellingGame />} />
      <Route path={ROUTES.KYRGYZOLIMPING} element={<KyrgyzSpellingGame />} />
      <Route path={ROUTES.KYRGYZSPELLINGLEVEL} element={<KyrgyzAudioPage />} />
      <Route path={ROUTES.KYRGYZOLIMPINGLEVEL} element={<KyrgyzOlimpPage />} />
      {/** English for students */}
      <Route path={ROUTES.STUDENTS} element={<StudentsSpellingBeeGame />} />
      <Route
        path={ROUTES.STUDENTS_SPELLING}
        element={<StudentsSpellingGame />}
      />
      <Route
        path={ROUTES.STUDENTS_OLIMPING}
        element={<StudentsSpellingGame />}
      />
      <Route
        path={ROUTES.STUDENTS_SPELLINGLEVEL}
        element={<StudentsAudioPage />}
      />
      <Route
        path={ROUTES.STUDENTS_OLIMPINGLEVEL}
        element={<StudentsOlimpPage />}
      />
    </Routes>
  );
};

export default Routing;
