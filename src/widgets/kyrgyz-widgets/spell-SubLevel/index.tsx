import { FC } from "react";
import { LEVELS } from "./words";
import SpellCard from "@pages/games/kyrgyz/ui/card";
// Убедитесь, что импорты для изображений существуют
import final from "/img/final.png";
import { useParams } from "react-router-dom";

const KyrgyzSpellSubLevel: FC = () => {
  const { stage } = useParams();

  const getSubLevels = (mode: any) => {
    switch (mode) {
      case "beginner":
        return [
          {
            id: 2,
            title: "final",
            img: `${final}`,
            url: `${stage}/${LEVELS.Final}`,
          },
        ];
      case "elementary":
        return [
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
            id: 2,
            title: "final",
            img: `${final}`,
            url: `${stage}/${LEVELS.Final}`,
          },
        ];
      case "advanced":
        return [
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

export default KyrgyzSpellSubLevel;
