import { motion } from "motion/react";
import { Link } from "react-router-dom";

function PlayButton() {
  return (
    <Link
      to="/pick-a-category"
      className="mt-16 mb-16 flex h-[10rem] w-[10rem] items-center justify-center rounded-full bg-linear-to-b from-[#FE71FE] to-[#7199FF] shadow-[inset_0px_-4px_0px_5px_#243041,inset_0px_-16px_0px_10px_#9d2df5] md:h-[200px] md:w-[200px]"
    >
      <motion.img
        whileHover={{
          scale: 1.1,
          
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 200 }}
        src="./images/icon-play.svg"
        alt="playButton"
        className="animate-pulse"
      />
    </Link>
  );
}

export default PlayButton;
