import { useEffect, useState } from "react";

import { STAGES } from "../spell-SubLevel/words";
import SpellCard from "@pages/games/kyrgyz/ui/card";
import absolute from "/img/absolute.png";
import junior from "/img/juniorBoy.png";
import kids from "/img/kids.png";
import senior from "/img/senior.png";

const KyrgyzSpellStages = () => {
  const getInitialMode = () => {
    const savedMode = localStorage.getItem("selectedModeKyrgyz");
    return savedMode || "kyrgyz"; // Если в localStorage ничего нет, используем "spellingbee"
  };

  const stages = [
    { url: STAGES.beginner, title: "1-2 классы", img: `${kids}` },
    { url: STAGES.elementary, title: "3-4 классы", img: `${junior}` },
    { url: STAGES.intermediate, title: "5-6 классы", img: `${senior}` },
    { url: STAGES.advanced, title: "7-8 классы", img: `${absolute}` },
  ];
  const [selectedMode, setSelectedMode] = useState(getInitialMode);
  const checkedMode = (mode: string) => {
    if (mode === "kyrgyz") {
      return true;
    } else {
      return false;
    }
  };
  const handleModeSaved = () => {
    setSelectedMode((prevMode) =>
      prevMode === "kyrgyz" ? "kyrgyzolimp" : "kyrgyz"
    );
    localStorage.setItem("selectedModeKyrgyz", selectedMode);
  };
  useEffect(() => {
    localStorage.setItem("selectedModeKyrgyz", selectedMode);
  }, [selectedMode]);
  return (
    <>
      <div className="flex items-center gap-5 text-neutral-200  justify-center text-center">
        <span className="  text-xl md:text-2xl lg:text-3xl xl:3xl font-arena tracking-widest leading-none">
          olympics mode
        </span>{" "}
        <input
          type="checkbox"
          className="toggle"
          onChange={handleModeSaved}
          checked={checkedMode(selectedMode)}
        />
        <span className=" text-xl md:text-2xl lg:text-3xl xl:3xl font-arena tracking-widest leading-none">
          training mode
        </span>
      </div>
      <div className="container w-full mx-auto flex mt-[2%] gap-2 flex-col sm:flex-row sm:mt-[3%] flex-wrap">
        {stages.map(({ url, title, img }, index) => (
          <SpellCard key={index} url={url} title={title} img={img} />
        ))}
      </div>
    </>
  );
};
export default KyrgyzSpellStages;
