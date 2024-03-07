import { useDispatch, useSelector } from "react-redux";
import { increment } from "../store/Slices/bonusSlice";

function Bonus() {
  const point = useSelector((state) => state.bonus.point);
  const dispatch = useDispatch();

  function handelpointIncrement() {
    dispatch(increment());
  }

  return (
    <div className="border border-black py-5">
      <div className="flex flex-col gap-5">
        <h2 className="text-center text-white">Bonus Components</h2>
        <h1 className="text-center font-bold text-2xl text-yellow-500">
          Total Point : {point}
        </h1>
      </div>
      <div className="text-center mt-10">
        <button
          className="px-3 py-2 bg-slate-500 text-white font-bold rounded-md "
          onClick={handelpointIncrement}
        >
          Increment +
        </button>
      </div>
    </div>
  );
}

export default Bonus;
