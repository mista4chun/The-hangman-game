import { Link } from "react-router-dom";

function PlayButton() {
  return (
    <Link to="/pick-a-category" className="flex h-[200px] w-[200px] mt-16 mb-16 items-center justify-center rounded-full bg-linear-to-b from-[#FE71FE] to-[#7199FF] shadow-[inset_0px_-4px_0px_5px_#243041,inset_0px_-16px_0px_10px_#9d2df5]">
      <img src="./images/icon-play.svg" alt="playButton" />
    </Link>
  );
}

export default PlayButton;
