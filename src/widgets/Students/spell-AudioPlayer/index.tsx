import React, { FC, useEffect, useMemo, useState } from "react";

import { Button } from "react-daisyui";
import { Howl } from "howler";
import { Link } from "react-router-dom";
import PieChart from "@widgets/diagrams";
import { ROUTES } from "@pages/routes";
import colorBg from "/img/bgTrainingSpelling.jpeg";

interface SpellingAudioPlayerProps {
  words: string[];
  stage: string;
  level: string;
}

const StudentsSpellingAudioPlayer: FC<SpellingAudioPlayerProps> = ({
  words,
  stage,
  level,
}) => {
  const [rate, setRate] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [isCorrect, setIsCorrect] = useState(true);
  const savedProgressString = localStorage.getItem("progress");
  const savedProgress = savedProgressString
    ? JSON.parse(savedProgressString)
    : {};
  const savedWords = savedProgress[stage]?.[level];
  const [currentIndex, setCurrentIndex] = useState(savedWords || 0);

  const wordsList = useMemo(() => words, [words]);

  useEffect(() => {
    SoundWord.load();
    handleSpeak();
  }, [currentIndex]);

  const currentWord = useMemo(
    () => wordsList[currentIndex].toLocaleLowerCase().trim(),
    [wordsList, currentIndex]
  );

  const SoundWord = useMemo(
    () =>
      new Howl({
        src: [`/sounds/eng/${currentWord}.mp3`],
        volume: 1,
        rate: rate,
      }),
    [currentWord, rate]
  );

  const SoundWrong = useMemo(
    () =>
      new Howl({
        src: ["/sounds/utils/wrongPip.mp3"],
        volume: 0.4,
      }),
    [currentWord]
  );
  const SoundRight = useMemo(
    () =>
      new Howl({
        src: ["/sounds/utils/winPip.mp3"],
        volume: 0.3,
        rate: 1.5,
      }),
    [currentWord]
  );
  const handleNextWord = () => {
    setIsCorrect(true);
    setInputValue("");
    savedProgress[stage] = savedProgress[stage] || {};
    savedProgress[stage][level] = currentIndex + 1;

    localStorage.setItem("progress", JSON.stringify(savedProgress));

    if (currentIndex === wordsList.length - 1) {
      savedProgress[stage][level] = 0;
      localStorage.setItem("progress", JSON.stringify(savedProgress));
      setCurrentIndex(0);
    } else {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
    }
  };

  const handleSpeak = () => {
    setTimeout(() => {
      SoundWord.play();
    }, 1000);
  };

  const handleCheckSpelling = () => {
    if (
      inputValue.toLowerCase().trim() ===
      wordsList[currentIndex].toLowerCase().trim()
    ) {
      SoundRight.play();
      handleNextWord();
    } else {
      setIsCorrect(false);
      SoundWrong.play();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsCorrect(true);
  };

  const totalWords = words.length;
  const wordsShown = currentIndex + 1;
  const wordsRemaining = totalWords - wordsShown;

  return (
    <div className=" shadow-xl rounded-3xl  overflow-hidden h-[70vh]  relative">
      <img
        src={colorBg}
        className="absolute h-full w-full right-0 left-0 top-0 bottom-0 -z-10 brightness-90"
        alt=""
      />
      <div className=" flex justify-around pt-2 shadow-xl l:flex-col l:p-2  lg:flex-col lg:items-end l:absolute lg:absolute lg:p-3 lg:gap-2  right-0 bg-base-100 rounded-xl tabs md:flex-row l:gap-0 ">
        <Link to={ROUTES.HOME} className="text-primary active pb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </Link>
        <label
          htmlFor="staticsModal"
          className="cursor-pointer text-primary pb-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </label>
        <label
          htmlFor="voiceModal"
          className=" cursor-pointer text-primary pb-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.2"
              d="M5 7h2v10H5V7zm-4 3h2v4H1v-4zm8-8h2v18H9V2zm4 2h2v18h-2V4zm4 3h2v10h-2V7zm4 3h2v4h-2v-4z"
            />
            <path />
          </svg>
        </label>
        <button className="text-primary pb-4" onClick={handleSpeak}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M8 12.052c1.995 0 3.5-1.505 3.5-3.5s-1.505-3.5-3.5-3.5-3.5 1.505-3.5 3.5 1.505 3.5 3.5 3.5zM9 13H7c-2.757 0-5 2.243-5 5v1h12v-1c0-2.757-2.243-5-5-5zm9.364-10.364L16.95 4.05C18.271 5.373 19 7.131 19 9s-.729 3.627-2.05 4.95l1.414 1.414C20.064 13.663 21 11.403 21 9s-.936-4.663-2.636-6.364z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M15.535 5.464L14.121 6.88C14.688 7.445 15 8.198 15 9s-.312 1.555-.879 2.12l1.414 1.416C16.479 11.592 17 10.337 17 9s-.521-2.592-1.465-3.536z"
            />
          </svg>
        </button>
        <label
          htmlFor="wordsModal"
          className=" cursor-pointer text-primary pb-4"
        >
          <svg
            className="h-8 w-8 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 16h-2v-2h2v2zm.976-4.885c-.196.158-.385.309-.535.459-.408.407-.44.777-.441.793v.133h-2v-.167c0-.118.029-1.177 1.026-2.174.195-.195.437-.393.691-.599.734-.595 1.216-1.029 1.216-1.627a1.934 1.934 0 00-3.867.001h-2C8.066 7.765 9.831 6 12 6s3.934 1.765 3.934 3.934c0 1.597-1.179 2.55-1.958 3.181z"
            />
          </svg>
        </label>
        <label
          htmlFor="wordsList"
          className=" cursor-pointer text-primary pb-4"
        >
          <svg
            className="h-8 w-8 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M9 8h10M9 12h10M9 16h10M5 8h0m0 4h0m0 4h0"
            />
          </svg>
        </label>
      </div>

      <div className="l:flex l:justify-around l:py-5 flex justify-center mt-5">
        <Button
          className=" hidden l:block bg-blue-500 text-white px-4 py-2 rounded bg-transparent text-base-100 hover:text-primary font-bold"
          onClick={handleSpeak}
        >
          Speak Word
        </Button>
        <Button
          className="  bg-blue-500 text-white rounded bg-transparent text-base-100 hover:text-primary font-bold"
          onClick={handleCheckSpelling}
        >
          Check word
        </Button>
      </div>

      <div className="items-center space-x-4 mb-4 mx-auto pt-8 flex flex-col">
        <form
          className="w-full flex justify-center"
          onSubmit={(e) => {
            e.preventDefault();
            handleCheckSpelling();
          }}
        >
          <input
            type="text"
            className="input shadow-2xl input-bordered input-lg border border-gray-300 p-2 text-2xl text-primary font-bold text-center rounded-xl w-[80%] block"
            value={inputValue}
            onChange={handleInputChange}
          />
        </form>

        {!isCorrect && (
          <div className="text-[#dc2626] text-xl mt-2">
            Incorrect spelling, please try again.
          </div>
        )}
      </div>
      <div className="flex justify-around">
        <div className="l:w-[200px] md:p-10 p-10 w-[300px]">
          <PieChart totalWords={totalWords} shownWords={wordsShown} />
        </div>
      </div>

      <div>
        <input type="checkbox" id="voiceModal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box p-2 m-0 flex flex-col">
            <label className="text-xl text-base-primary">Rate:</label>
            <input
              type="range"
              min={0.1}
              max={2}
              step={0.1}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
            />
            <span className="text-xl">{rate.toFixed(1)}</span>
          </div>

          <label className="modal-backdrop" htmlFor="voiceModal">
            Close
          </label>
        </div>
      </div>
      <div>
        <input type="checkbox" id="wordsModal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box p-4 m-0 ">
            <div className=" text-center text-2xl font bold">
              {words[currentIndex]}
            </div>
          </div>

          <label className="modal-backdrop" htmlFor="wordsModal">
            Close
          </label>
        </div>
      </div>
      <div>
        <input type="checkbox" id="staticsModal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box p-4 m-0 ">
            <div className=" text-center text-2xl font bold">
              <p>Total Words: {totalWords}</p>
              <p>Words Shown: {wordsShown}</p>
              <p>Words Remaining: {wordsRemaining}</p>
            </div>
          </div>

          <label className="modal-backdrop" htmlFor="staticsModal">
            Close
          </label>
        </div>
      </div>
      <div>
        <input type="checkbox" id="wordsList" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box  p-4 m-0 ">
            <div className=" flex flex-wrap text-2xl font bold">
              {words.map((word, idx) => (
                <button
                  onClick={() => setCurrentIndex(idx)}
                  className={`btn p-2 ${
                    idx < currentIndex ? "bg-green-400" : " bg-slate-400"
                  }`}
                  key={idx}
                >
                  {word}
                </button>
              ))}
            </div>
          </div>

          <label className="modal-backdrop" htmlFor="wordsList">
            Close
          </label>
        </div>
      </div>
    </div>
  );
};

export default StudentsSpellingAudioPlayer;
