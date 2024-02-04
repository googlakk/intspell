import KyrgyzSpellStages from "@widgets/kyrgyz-widgets/spellStages";
/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { withMainLayout } from "@app/hocs/withMainLayout";

const KyrgyzSpellingBeeGame: React.FC = () => {
  return (
    <>
      <KyrgyzSpellStages />
    </>
  );
};

export default withMainLayout(KyrgyzSpellingBeeGame);
