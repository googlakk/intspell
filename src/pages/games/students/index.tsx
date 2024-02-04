/* eslint-disable react-refresh/only-export-components */
import React from "react";
import StudentsSpellStages from "@widgets/Students/spellStages";
import { withMainLayout } from "@app/hocs/withMainLayout";

const StudentsSpellingBeeGame: React.FC = () => {
  return (
    <>
      <StudentsSpellStages />
    </>
  );
};

export default withMainLayout(StudentsSpellingBeeGame);
