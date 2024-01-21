import SpellSubLevel from "@widgets/spell-SubLevel";
import { useParams } from "react-router-dom";
import { withMainLayout } from "@app/hocs/withMainLayout";
import { words } from "@widgets/spell-SubLevel/words";

const SpellingSubLevelPages = () => {
  const { stage } = useParams();
  const selectedStage = stage as keyof typeof words;
  console.log(selectedStage);
  return (
    <>
      <SpellSubLevel />
    </>
  );
};
export default withMainLayout(SpellingSubLevelPages);
