import { useEffect, useState } from "react";

import { STAGES } from "@widgets/Students/spell-SubLevel/words";
import SpellCard from "@pages/games/students/ui/card";
import junior from "/img/juniorBoy.png";
import kids from "/img/kids.png";
import senior from "/img/senior.png";

const StudentsSpellStages = () => {
  const getInitialMode = () => {
    const savedMode = localStorage.getItem("StudentsdModeEnglish");
    return savedMode || "students"; // Если в localStorage ничего нет, используем "spellingbee"
  };

  const stages = [
    { url: STAGES.year1, title: "1", img: `${kids}` },
    { url: STAGES.year2, title: "2", img: `${junior}` },
    { url: STAGES.year3, title: "3", img: `${senior}` },
    { url: STAGES.year4, title: "4", img: `${kids}` },
    { url: STAGES.year5, title: "5-6", img: `${junior}` },
    { url: STAGES.year6, title: "7-8", img: `${senior}` },
  ];
  const [selectedMode, setSelectedMode] = useState(getInitialMode);
  const checkedMode = (mode: string) => {
    if (mode === "students") {
      return true;
    } else {
      return false;
    }
  };
  const handleModeSaved = () => {
    setSelectedMode((prevMode) =>
      prevMode === "students" ? "olimping" : "students"
    );
    localStorage.setItem("StudentsdModeEnglish", selectedMode);
  };
  useEffect(() => {
    localStorage.setItem("StudentsdModeEnglish", selectedMode);
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
      ч
    </>
  );
};
export default StudentsSpellStages;
