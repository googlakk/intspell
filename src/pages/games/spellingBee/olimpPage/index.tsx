import { FC } from "react";
import OlimpSpellingAudioPlayer from "@widgets/olimp-spell";
import { useParams } from "react-router-dom";
import { withMainLayout } from "@app/hocs/withMainLayout";
import { words } from "@widgets/spell-SubLevel/words";

const OlimpPage: FC = () => {
  const { stage } = useParams();
  const { level } = useParams();
  const selectedStage = stage as keyof typeof words;
  const selectedLevel = level as keyof typeof stage;
  const selectedWords = words[selectedStage][selectedLevel];

  return (
    <>
      <OlimpSpellingAudioPlayer words={selectedWords} />
    </>
  );
};
export default withMainLayout(OlimpPage);
