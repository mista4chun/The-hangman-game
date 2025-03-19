import { Link } from "react-router-dom";
import PlayButton from "./PlayButton";

function Home() {
  return (
    <div className="relative z-20 flex h-screen items-center justify-center">
      <div className="relative flex md:h-[500px] md:w-[592px] h-[30.0625rem] w-[20.25rem] flex-col items-center justify-center rounded-[4rem] bg-linear-to-bl from-[#344ABA] to-[#001479] opacity-90 shadow-[inset_0px_-8px_0px_4px_#140E66,inset_0px_6px_0px_8px_#2463FF]">
        <div className="absolute md:-top-27 -top-12">
          <img src="./images/logo.svg" alt="logo" className="w-[16.4375rem] h-[8.1375rem] md:w-[23.355625rem] md:h-[11.25rem]" />
        </div>
        <PlayButton />
        <Link
          to="/how-to-play"
          className="font-mouse w-56 rounded-full bg-[#2463FF] px-6 py-3 text-center text-3xl text-white uppercase shadow-[inset_0px_4px_0px_2px_#507ef5,inset_0px_-2px_0px_2px_#140E66] transition-all duration-300 hover:scale-110"
        >
          how to Play
        </Link>
      </div>
    </div>
  );
}

export default Home;
