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
      case "kids":
        return [
          {
            id: 2,
            title: "Round 1",
            img: `${final}`,
            url: `${stage}/${LEVELS.Round1}`,
          },
          {
            id: 3,
            title: "Semi final",
            img: `${final}`,
            url: `${stage}/${LEVELS.SemiFinal}`,
          },
          {
            id: 4,
            title: "Final",
            img: `${final}`,
            url: `${stage}/${LEVELS.Final}`,
          },
          {
            id: 5,
            title: "Additional Words",
            img: `${final}`,
            url: `${stage}/${LEVELS.AdditionalWords}`,
          },
        ];
      case "junior":
        return [
          {
            id: 1,
            title: "Trial round",
            img: `${final}`,
            url: `${stage}/${LEVELS.TrialRound}`,
          },
          {
            id: 2,
            title: "Round 1",
            img: `${final}`,
            url: `${stage}/${LEVELS.Round1}`,
          },
          {
            id: 3,
            title: "Semi final",
            img: `${final}`,
            url: `${stage}/${LEVELS.SemiFinal}`,
          },
          {
            id: 4,
            title: "Final",
            img: `${final}`,
            url: `${stage}/${LEVELS.Final}`,
          },
          {
            id: 5,
            title: "Additional Words",
            img: `${final}`,
            url: `${stage}/${LEVELS.AdditionalWords}`,
          },
        ];
      case "senior":
        return [
          {
            id: 1,
            title: "Trial round",
            img: `${final}`,
            url: `${stage}/${LEVELS.TrialRound}`,
          },
          {
            id: 2,
            title: "Round 1",
            img: `${final}`,
            url: `${stage}/${LEVELS.Round1}`,
          },
          {
            id: 3,
            title: "Round 2",
            img: `${final}`,
            url: `${stage}/${LEVELS.Round2}`,
          },
          {
            id: 4,
            title: "Semi final",
            img: `${final}`,
            url: `${stage}/${LEVELS.SemiFinal}`,
          },
          {
            id: 5,
            title: "Final",
            img: `${final}`,
            url: `${stage}/${LEVELS.Final}`,
          },
          {
            id: 6,
            title: "Additional Words",
            img: `${final}`,
            url: `${stage}/${LEVELS.AdditionalWords}`,
          },
        ];
      case "absolute":
        return [
          {
            id: 1,
            title: "Final",
            img: `${final}`,
            url: `${stage}/${LEVELS.Final}`,
          },
        ];
      case "super":
        return [
          {
            id: 1,
            title: "Final",
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
    <div className="container mx-auto flex mt-[2%] flex-col sm:flex-row gap-2 sm:mt-[10%] md:flex-wrap">
      {subLevels.map((obj) => (
        <SpellCard key={obj.id} title={obj.title} url={obj.url} img={obj.img} />
      ))}
    </div>
  );
};

export default StudentsSpellSubLevel;
