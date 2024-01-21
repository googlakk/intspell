import { useEffect, useState } from "react";

import { STAGES } from "@widgets/spell-SubLevel/words";
import SpellCard from "@pages/games/ui/card";
import junior from "/img/juniorBoy.png";
import kids from "/img/kids.png";
import senior from "/img/senior.png";

const SpellStages = () => {
  const getInitialMode = () => {
    const savedMode = localStorage.getItem("selectedMode");
    return savedMode || "spellingbee"; // Если в localStorage ничего нет, используем "spellingbee"
  };

  const stages = [
    { url: STAGES.beginner, title: "beginner", img: `${kids}` },
    { url: STAGES.intermediate, title: "intermediate", img: `${junior}` },
    { url: STAGES.advanced, title: "advanced", img: `${senior}` },
  ];
  const [selectedMode, setSelectedMode] = useState(getInitialMode);
  const checkedMode = (mode: string) => {
    if (mode === "spellingbee") {
      return true;
    } else {
      return false;
    }
  };
  const handleModeSaved = () => {
    setSelectedMode((prevMode) =>
      prevMode === "spellingbee" ? "olimpspell" : "spellingbee"
    );
    localStorage.setItem("selectedMode", selectedMode);
  };
  useEffect(() => {
    localStorage.setItem("selectedMode", selectedMode);
  }, [selectedMode]);
  return (
    <>
      <div className="flex items-center gap-5 text-neutral-200  justify-center text-center">
        <span className="  text-xl md:text-2xl lg:text-3xl xl:3xl font-arena tracking-widest leading-none">
          training mode
        </span>{" "}
        <input
          type="checkbox"
          className="toggle"
          onChange={handleModeSaved}
          checked={checkedMode(selectedMode)}
        />
        <span className=" text-xl md:text-2xl lg:text-3xl xl:3xl font-arena tracking-widest leading-none">
          olympics mode
        </span>
      </div>
      <div className="container w-full mx-auto flex mt-[2%] gap-2 flex-col sm:flex-row sm:mt-[3%] flex-wrap">
        {stages.map(({ url, title, img }, index) => (
          <SpellCard key={index} url={url} title={title} img={img} />
        ))}
      </div>
      ч
    </>
  );
};
export default SpellStages;
