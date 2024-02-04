import { Button } from "react-daisyui";
import { FC } from "react";
import { FaMicrophone } from "react-icons/fa";

interface VoiceInputProps {
  words: string[];
  currentIndex: number;
}

const StudentsVoiceInput: FC<VoiceInputProps> = () => {
  const styleMicro = { color: "black", fontSize: "3rem" };

  return (
    <div className="flex justify-center flex-col items-center">
      <Button className=" bg-transparent border-hidden">
        <FaMicrophone style={styleMicro} />
      </Button>
    </div>
  );
};

export default StudentsVoiceInput;
