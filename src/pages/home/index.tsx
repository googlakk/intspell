import { FC } from "react";
import GameCard from "./ui/card";
import { ROUTES } from "@pages/routes";
import spellImg from "/img/bee.svg";
import { withMainLayout } from "@app/hocs/withMainLayout";

const HomePage: FC = () => {
  return (
    <div
      className={`container mx-auto flex mt-[2%] flex-col sm:flex-row sm:mt-[10%] md:flex-wrap`}
    >
      <GameCard
        titleGame="for students"
        imgGame={spellImg}
        routes={ROUTES.STUDENTS}
      />
    </div>
  );
};

export default withMainLayout(HomePage);
