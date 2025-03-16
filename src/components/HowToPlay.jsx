
import BackButton from "./BackButton";

const cards = [
  {
    index: "01",
    title: "Choose a category",
    message:
      "choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
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
  return (
    <div className="mx-auto pt-10 max-w-7xl ">
      <div className="flex items-center justify-center">
        <BackButton />

        <img
          src="./images/How-to-Play.svg"
          alt=""
          className="z-30 mx-auto h-[10.1875rem] w-[28rem]"
        />
      </div>
      <div className="grid grid-cols-3 pt-10">
        {cards.map((card) => (
          <div
            key={card.index}
            className="h-[34.375rem] w-[24rem] rounded-[2.5rem] bg-white"
          >
            <div className="flex flex-col items-center justify-center gap-8 px-6 pt-16 text-center">
              <p className="text-8xl text-[#2463ff]">{card.index}</p>
              <p className="text-5xl tracking-wider text-[#261676]">
                {card.title}
              </p>
              <p className="max-w-xs text-3xl leading-10 text-[#887dc0]">
                {card.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowToPlay;
