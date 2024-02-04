import { FC } from "react";
import { LEVELS } from "./words";
import SpellCard from "@pages/games/spellingBee/ui/card";
// Убедитесь, что импорты для изображений существуют
import final from "/img/final.png";
import semi from "/img/stage.png";
import { useParams } from "react-router-dom";

const SpellSubLevel: FC = () => {
  const { stage } = useParams();

  const getSubLevels = (mode: any) => {
    switch (mode) {
      case "beginner":
        return [
          {
            id: 1,
            title: "semi final",
            img: `${semi}`,
            url: `${stage}/${LEVELS.semiFinal}`,
          },
          {
            id: 2,
            title: "final",
            img: `${final}`,
            url: `${stage}/${LEVELS.Final}`,
          },
        ];
      case "intermediate":
        return [
          {
            id: 1,
            title: "semi final",
            img: `${semi}`,
            url: `${stage}/${LEVELS.semiFinal}`,
          },
          {
            id: 2,
            title: "final",
            img: `${final}`,
            url: `${stage}/${LEVELS.Final}`,
          },
        ];
      case "advanced":
        return [
          {
            id: 1,
            title: "semi final",
            img: `${semi}`,
            url: `${stage}/${LEVELS.semiFinal}`,
          },
          {
            id: 2,
            title: "final",
            img: `${final}`,
            url: `${stage}/${LEVELS.Final}`,
          },
        ];

      default:
        return [];
    }
  };

  const subLevels = getSubLevels(stage);

  return (
    <div className="container mx-auto flex mt-[2%] flex-col sm:flex-row sm:mt-[10%] md:flex-wrap">
      {subLevels.map((obj) => (
        <SpellCard key={obj.id} title={obj.title} url={obj.url} img={obj.img} />
      ))}
    </div>
  );
};

export default SpellSubLevel;
