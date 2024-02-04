import { FC } from "react";
import KyrgyzSpellingAudioPlayer from "@widgets/kyrgyz-widgets/spell-AudioPlayer";
import { useParams } from "react-router-dom";
import { withMainLayout } from "@app/hocs/withMainLayout";
import { words } from "@widgets/kyrgyz-widgets/spell-SubLevel/words";

const KyrgyzAudioPage: FC = () => {
  const { stage } = useParams();
  const { level } = useParams();
  const selectedStage = stage as keyof typeof words;
  const selectedLevel = level as keyof typeof stage;
  console.log(selectedLevel);
  const selectedWords = words[selectedStage][selectedLevel];

  return <KyrgyzSpellingAudioPlayer words={selectedWords} />;
};
export default withMainLayout(KyrgyzAudioPage);
