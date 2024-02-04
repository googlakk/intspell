import { FC } from "react";
import KyrgyzOlimpSpellingAudioPlayer from "@widgets/kyrgyz-widgets/olimp-spell";
import { useParams } from "react-router-dom";
import { withMainLayout } from "@app/hocs/withMainLayout";
import { words } from "@widgets/kyrgyz-widgets/spell-SubLevel/words";

const KyrgyzOlimpPage: FC = () => {
  const { stage } = useParams();
  const { level } = useParams();
  const selectedStage = stage as keyof typeof words;
  const selectedLevel = level as keyof typeof stage;
  const selectedWords = words[selectedStage][selectedLevel];

  return (
    <>
      <KyrgyzOlimpSpellingAudioPlayer words={selectedWords} />
    </>
  );
};
export default withMainLayout(KyrgyzOlimpPage);
