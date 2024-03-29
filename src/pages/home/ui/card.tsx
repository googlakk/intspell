import { Button, Card } from "react-daisyui";

import { FC } from "react";
import { Link } from "react-router-dom";

interface gameCardProps {
  titleGame: string;
  imgGame: string;
  routes: string;
  disabled?: boolean;
}
const GameCard: FC<gameCardProps> = ({ titleGame, imgGame, routes }) => {
  return (
    <>
      <Card className="mb-4 p-5 card shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] disabled w-64 h-2/4 bg-[#0284c7] glass mx-auto">
        <Card.Body className="items-center text-center">
          <Card.Title className=" h-14">
            <h1 className="font-arena lowercase  text-3xl leading-6 text-neutral-100">
              {titleGame}
            </h1>
          </Card.Title>
          <Card.Image className=" w-14" src={imgGame} alt="mental" />
          <Card.Actions className="justify-end">
            <Button className=" btn-ghost">
              <Link
                className=" p-0 m-0 font-semibold tracking-wider text-xl text-neutral-50 "
                to={routes}
              >
                Начать
              </Link>
            </Button>
          </Card.Actions>
        </Card.Body>
      </Card>
    </>
  );
};
export default GameCard;
