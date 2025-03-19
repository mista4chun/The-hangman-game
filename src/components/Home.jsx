import { Link } from "react-router-dom";
import PlayButton from "./PlayButton";
import { AnimatePresence, motion } from "motion/react";

function Home() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 flex h-screen items-center justify-center"
      >
        <div className="relative flex h-[30.0625rem] w-[20.25rem] flex-col items-center justify-center rounded-[4rem] bg-linear-to-bl from-[#344ABA] to-[#001479] opacity-90 shadow-[inset_0px_-8px_0px_4px_#140E66,inset_0px_6px_0px_8px_#2463FF] md:h-[500px] md:w-[592px]">
          <div className="absolute -top-12 md:-top-27">
            <motion.img
              initial={{ y: -150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 70,damping: 8, 
                duration: 1.2,  }}
              src="./images/logo.svg"
              alt="logo"
              className="h-[8.1375rem] w-[16.4375rem] md:h-[11.25rem] md:w-[23.355625rem]"
            />
          </div>
          <PlayButton />
          <Link
            to="/how-to-play"
            className="font-mouse w-56 rounded-full bg-[#2463FF] px-6 py-3 text-center text-3xl text-white uppercase shadow-[inset_0px_4px_0px_2px_#507ef5,inset_0px_-2px_0px_2px_#140E66] transition-all duration-300 hover:scale-110"
          >
            how to Play
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Home;
