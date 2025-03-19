import BackButton from "./BackButton";
import { motion } from "motion/react";

const cards = [
  {
    index: "01",
    title: "Choose a category",
    message:
      "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
  },
  {
    index: "02",
    title: "Guess letters",
    message:
      "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it's wrong, you lose some health, which empties after eight incorrect guesses.",
  },
  {
    index: "03",
    title: "Win or lose",
    message:
      "You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.",
  },
];

function HowToPlay() {
  const divVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Stagger effect (each button comes in one after the other)
        duration: 0.5,
        type: "spring",
      },
    }),
  };

  return (
    <div className="container mx-auto max-w-7xl px-8 pt-10">
      <div className="flex items-center justify-between">
        <BackButton />

        <img
          src="./images/How-to-Play.svg"
          alt=""
          className="mx-0 md:mx-auto md:h-[10.1875rem] md:w-[28rem]"
        />
      </div>

      <div className="flex flex-col gap-8 px-0 pt-20 lg:flex-row lg:pt-12">
        {cards.map((card, i) => (
          <motion.div
            variants={divVariants}
            initial="hidden"
            animate="visible"
            custom={i}
            key={card.index}
            className="h-[11.5625rem] w-[22.5rem] rounded-[1.25rem] bg-white md:h-[12.5rem] md:w-[42.5rem] md:rounded-[2rem] lg:h-[34.375rem] lg:w-[24rem] lg:rounded-[2.5rem]"
          >
            <div className="grid gap-5 px-6 py-8 md:grid-cols-[0.2fr_1fr] md:grid-rows-2 md:gap-0 lg:grid-cols-1 lg:grid-rows-3 lg:text-center">
              <p className="hidden text-[#2463ff] md:row-span-2 md:block md:items-center md:text-8xl lg:pt-12">
                {card.index}
              </p>
              <p className="text-4xl tracking-wider text-[#261676] lg:py-5">
                <span className="mr-4 text-[#2463ff] md:hidden">
                  {card.index}
                </span>{" "}
                {card.title}
              </p>
              <p className="leading-4 tracking-wider text-[#887dc0] md:text-xl md:leading-6 lg:text-2xl lg:leading-9">
                {card.message}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default HowToPlay;
