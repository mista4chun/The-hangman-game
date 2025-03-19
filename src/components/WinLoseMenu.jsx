import { useDispatch } from "react-redux";
import { resetGame, toggleModal, toggleModal2 } from "../hangmanSlice";
import { useNavigate } from "react-router-dom";

function WinLoseMenu({ imgSrc = "/images/you-lose.svg" }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-30 flex h-screen items-center justify-center bg-linear-to-b from-[#190131]/70 to-[#282B96]/70">
      <div className="relative flex h-[500px] w-[592px] flex-col items-center justify-center rounded-[4rem] bg-linear-to-bl from-[#344ABA] to-[#001479] opacity-95 shadow-[inset_0px_-8px_0px_4px_#140E66,inset_0px_6px_0px_8px_#2463FF]">
        <div className="absolute -top-12">
          <img src={imgSrc} alt="Game result" className="w-64" />
        </div>
        <button
          onClick={() => {
            dispatch(resetGame());
          
          }}
          className="font-mouse w-56 rounded-full bg-[#2463FF] px-6 py-3 text-center text-3xl text-white uppercase shadow-[inset_0px_4px_0px_2px_#507ef5,inset_0px_-2px_0px_2px_#140E66] transition-all duration-300 hover:scale-110"
        >
          PLAY AGAIN!
        </button>
        <button
          onClick={() => {
              dispatch(resetGame());
              dispatch(toggleModal2(false));
              dispatch(toggleModal(false))
              navigate("/pick-a-category");
          }}
          className="font-mouse my-8 w-72 rounded-full bg-[#2463FF] px-6 py-3 text-center text-3xl text-white uppercase shadow-[inset_0px_4px_0px_2px_#507ef5,inset_0px_-2px_0px_2px_#140E66] transition-all duration-300 hover:scale-110"
        >
          NEW CATEGORY
        </button>
        <button
          onClick={() => {
              dispatch(resetGame());
              dispatch(toggleModal2(false));
              dispatch(toggleModal(false))
              navigate("/");
          }}
          className="font-mouse w-56 rounded-full bg-gradient-to-b from-[#FE71FE] to-[#7199FF] px-6 py-3 text-center text-3xl text-white uppercase shadow-[inset_0px_-2px_0px_3px_#140E66,inset_0px_4px_0px_2px_#c642fb] transition-all duration-300 hover:scale-110"
        >
          QUIT GAME
        </button>
      </div>
    </div>
  );
}

export default WinLoseMenu;
