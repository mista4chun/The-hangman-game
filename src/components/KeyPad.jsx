import { useDispatch, useSelector } from "react-redux";
import { guessLetters } from "../hangmanSlice";
import { motion } from "motion/react";

function KeyPad() {
  const dispatch = useDispatch();
  const guessedLetters = useSelector((state) => state.hangman.guessedLetters);
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }} // Start below the screen
      animate={{ y: 0, opacity: 1 }} // Slide up to position
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      }}
      className="mx-auto mt-6 grid w-fit grid-cols-9 gap-2 pb-5 lg:gap-4 lg:px-8"
    >
      {alphabets.map((alphabet) => {
        const isGuessed = guessedLetters?.includes(alphabet);

        return (
          <button
            key={alphabet}
            disabled={isGuessed}
            onClick={() => dispatch(guessLetters(alphabet))}
            className={`h-[3.5rem] w-[1.805625rem] rounded-[0.5rem] text-2xl transition-all duration-300 hover:scale-110 hover:animate-pulse md:h-[5.25rem] md:w-[4rem] md:rounded-[1.5rem] md:text-5xl lg:h-[5.2rem] lg:w-[6.5rem] lg:rounded-3xl ${isGuessed ? "bg-white opacity-35" : "bg-white text-[#2B1677] hover:bg-blue-500 hover:text-white"} transition-all duration-200`}
          >
            {alphabet}
          </button>
        );
      })}
    </motion.div>
  );
}

export default KeyPad;
