import { FC } from "react";
import StudentsOlimpSpellingAudioPlayer from "@widgets/Students/olimp-spell";
import { useParams } from "react-router-dom";
import { withMainLayout } from "@app/hocs/withMainLayout";
import { words } from "@widgets/Students/spell-SubLevel/words";

const StudentsOlimpPage: FC = () => {
  const { stage } = useParams();
  const { level } = useParams();
  const selectedStage = stage as keyof typeof words;
  const selectedLevel = level as keyof typeof stage;
  const selectedWords = words[selectedStage][selectedLevel];

  return (
    <>
      <StudentsOlimpSpellingAudioPlayer words={selectedWords} />
    </>
  );
};
export default withMainLayout(StudentsOlimpPage);
