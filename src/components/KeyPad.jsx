import { useDispatch, useSelector } from "react-redux";
import { guessLetters } from "../hangmanSlice";

function KeyPad() {
  const dispatch = useDispatch();
  const guessedLetters = useSelector((state) => state.hangman.guessedLetters);
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="mx-auto mt-6 grid w-fit grid-cols-9 gap-6">
      {alphabets.map((alphabet) => {
        const isGuessed = guessedLetters?.includes(alphabet);

        return (
          <button
            key={alphabet}
            disabled={isGuessed}
            onClick={() => dispatch(guessLetters(alphabet))}
            className={`h-[5.2rem] w-[6.5rem] rounded-3xl text-5xl  hover:scale-110 hover:animate-pulse transition-all duration-300 ${isGuessed ? "bg-white opacity-35" : "bg-white text-black hover:bg-blue-500 hover:text-white"} transition-all duration-200`}
          >
            {alphabet}
          </button>
        );
      })}
    </div>
  );
}

export default KeyPad;
