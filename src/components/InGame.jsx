import { useDispatch, useSelector } from "react-redux";
import KeyPad from "./KeyPad";
import { useParams } from "react-router-dom";
import PauseMenu from "./PauseMenu";
import { toggleModal, toggleModal2 } from "../hangmanSlice";
import { useEffect } from "react";
import WinLoseMenu from "./WinLoseMenu";
import { AnimatePresence } from "motion/react";

function InGame() {
  const word = useSelector((state) => state.hangman.word);
  console.log(word);
  const { guessedLetters, inCorrectGuesses, isGameOver, showModal } =
    useSelector((state) => state.hangman);
  const guessedCorrectly = useSelector(
    (state) => state.hangman.guessedCorrectly,
  );
  const { category } = useParams();
  const progressBar = 100 - (inCorrectGuesses / 8) * 100;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isGameOver) {
      const timerId = setTimeout(() => {
        dispatch(toggleModal2());
      }, 4000);

      return () => clearTimeout(timerId);
    }
  }, [isGameOver, dispatch]);

  const modalImage = guessedCorrectly
    ? "/images/you-win.svg"
    : "/images/you-lose.svg";

  return (
    <>
      {showModal && <PauseMenu />}
      {isGameOver && <WinLoseMenu imgSrc={modalImage} />}
      <AnimatePresence>
        <div className="mx-auto mb-14 flex max-w-6xl items-center justify-between px-8 pt-5">
          <div className="flex items-center gap-6 lg:gap-12">
            <button
              onClick={() => dispatch(toggleModal())}
              className="flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full bg-gradient-to-b from-[#FE71FE] to-[#7199FF] shadow-[inset_0px_-2px_0px_2px_#cd82fd] transition-all duration-500 hover:scale-110 md:h-[4rem] md:w-[4rem] lg:h-[5.875rem] lg:w-[5.875rem] lg:shadow-[inset_0px_-8px_0px_8px_#cd82fd]"
            >
              <img
                src="/images/icon-menu.svg"
                alt=""
                className="size-5 md:size-8 lg:size-10"
              />
            </button>

            <p className="text-4xl text-white md:text-6xl lg:text-8xl">
              {category}
            </p>
          </div>

          <div className="flex items-center gap-7 md:gap-10">
            <div className="flex h-[1rem] w-[3.5625rem] items-center rounded-full bg-white px-1.5 md:h-[1.9375rem] md:w-[10rem] md:px-3 lg:h-[1.9375rem] lg:w-[15rem]">
              <div
                className="h-[0.5rem] rounded-full bg-[#2B1677] transition-all duration-500 md:h-[0.8125] lg:h-[0.8125rem]"
                style={{ width: `${progressBar}%` }}
              ></div>
            </div>
            <img
              src="/images/icon-heart.svg"
              alt=""
              className="h-[1.5rem] w-[1.635rem] md:h-[3.058125rem] md:w-[3.333125rem]"
            />
          </div>
        </div>
      </AnimatePresence>

      <div className="flex flex-col items-center">
        <div className="-z-10 mb-16 flex flex-col items-center gap-2">
          {word.split(" ").map((wordPart, wordIndex) => (
            <div key={wordIndex} className="flex gap-4">
              {wordPart.split("").map((char, index) => {
                const upperChar = char.toUpperCase();
                const isGuessed = guessedLetters
                  .map((l) => l.toUpperCase())
                  .includes(upperChar);

                return (
                  <div
                    key={index}
                    className={`flex h-[4.125rem] w-[2.5rem] items-center justify-center rounded-[0.75rem] text-5xl font-bold shadow-[inset_0px_-2px_0px_1px_#140E66,inset_0px_3px_0px_2px_#3b74ff] md:h-[7rem] md:w-[5.5rem] md:rounded-[2rem] lg:h-[6rem] lg:w-[5rem] lg:rounded-3xl ${isGuessed ? "bg-blue-500 text-white" : "bg-[#2463FF] text-transparent opacity-35"}`}
                  >
                    {upperChar}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Keypad */}
        <KeyPad />
      </div>
    </>
  );
}

export default InGame;
