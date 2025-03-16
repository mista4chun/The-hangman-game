import { Link } from "react-router-dom";

function BackButton() {
  return (
    <div>
      <Link
        to="/"
        className="flex h-[5.875rem] w-[5.875rem] items-center justify-center rounded-full bg-gradient-to-b from-[#FE71FE] to-[#7199FF] shadow-[inset_0px_-8px_0px_8px_#cd82fd] transition-all duration-500 hover:scale-110"
      >
        <img src="./images/icon-back.svg" alt="go back" />
      </Link>
    </div>
  );
}

export default BackButton;
