import { FC } from "react";
import { LEVELS } from "./words";
import SpellCard from "@pages/games/students/ui/card";
// Убедитесь, что импорты для изображений существуют
import final from "/img/final.png";
import { useParams } from "react-router-dom";

const StudentsSpellSubLevel: FC = () => {
  const { stage } = useParams();

  const getSubLevels = (mode: any) => {
    switch (mode) {
      case "year1":
        return [
          {
            id: 1,
            title: "final",
            img: `${final}`,
            url: `${stage}/${LEVELS.Final}`,
          },
        ];
      case "year2":
        return [
          {
            id: 1,
            title: "final",
            img: `${final}`,
            url: `${stage}/${LEVELS.Final}`,
          },
        ];
      case "year3":
        return [
          {
            id: 1,
            title: "final",
            img: `${final}`,
            url: `${stage}/${LEVELS.Final}`,
          },
        ];
      case "year4":
        return [
          {
            id: 1,
            title: "final",
            img: `${final}`,
            url: `${stage}/${LEVELS.Final}`,
          },
        ];
      case "year5":
        return [
          {
            id: 1,
            title: "final",
            img: `${final}`,
            url: `${stage}/${LEVELS.Final}`,
          },
        ];
      case "year6":
        return [
          {
            id: 1,
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

export default StudentsSpellSubLevel;
