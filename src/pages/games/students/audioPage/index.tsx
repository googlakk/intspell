import { FC } from "react";
import StudentsSpellingAudioPlayer from "@widgets/Students/spell-AudioPlayer";
import { useParams } from "react-router-dom";
import { withMainLayout } from "@app/hocs/withMainLayout";
import { words } from "@widgets/Students/spell-SubLevel/words";

const StudentsAudioPage: FC = () => {
  const { stage } = useParams();
  const { level } = useParams();
  const selectedStage = stage as keyof typeof words;
  const selectedLevel = level as keyof typeof stage;

  const selectedWords = words[selectedStage][selectedLevel];

  return (
    <StudentsSpellingAudioPlayer
      stage={selectedStage}
      level={selectedLevel}
      words={selectedWords}
    />
  );
};
export default withMainLayout(StudentsAudioPage);
