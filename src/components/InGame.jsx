import { useDispatch, useSelector } from "react-redux";
import KeyPad from "./KeyPad";
import { useParams } from "react-router-dom";
import PauseMenu from "./PauseMenu";
import { toggleModal } from "../hangmanSlice";

function InGame() {
  const word = useSelector((state) => state.hangman.word);

  const { guessedLetters, inCorrectGuesses } = useSelector(
    (state) => state.hangman,
  );
  const { category } = useParams();
  const progressBar = 100 - (inCorrectGuesses / 8) * 100;
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.hangman.showModal);

  return (
    <>
      {showModal && <PauseMenu />}
      <div className="mx-auto mb-14 flex max-w-6xl items-center justify-between pt-5">
        <div className="flex items-center gap-12">
          <button
            onClick={() => dispatch(toggleModal())}
            className="flex h-[5.875rem] w-[5.875rem] items-center justify-center rounded-full bg-gradient-to-b from-[#FE71FE] to-[#7199FF] shadow-[inset_0px_-8px_0px_8px_#cd82fd] transition-all duration-500 hover:scale-110"
          >
            <img src="/images/icon-menu.svg" alt="" />
          </button>

          <p className="text-8xl text-white">{category}</p>
        </div>

        <div className="flex items-center gap-10">
          <div className="flex h-[1.9375rem] w-[15rem] items-center rounded-full bg-white px-3">
            <div
              className="h-[0.8125rem] rounded-full bg-[#2B1677] transition-all duration-500"
              style={{ width: `${progressBar}%` }}
            ></div>
          </div>
          <img src="/images/icon-heart.svg" alt="" />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="-z-10 mb-16 flex flex-col items-center gap-4">
          {word.split(" ").map((wordPart, wordIndex) => (
            <div key={wordIndex} className="flex gap-2">
              {wordPart.split("").map((char, index) => {
                const upperChar = char.toUpperCase();
                const isGuessed = guessedLetters
                  .map((l) => l.toUpperCase())
                  .includes(upperChar);

                return (
                  <div
                    key={index}
                    className={`flex h-[6rem] w-[5rem] items-center justify-center rounded-3xl text-5xl font-bold shadow-[inset_0px_-2px_0px_1px_#140E66,inset_0px_2px_0px_1px_#3b74ff] ${isGuessed ? "bg-blue-500 text-white" : "bg-[#2463FF] text-transparent opacity-35"}`}
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
