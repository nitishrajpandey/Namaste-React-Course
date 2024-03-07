import { useSelector, useDispatch } from "react-redux";

function Bonus() {
  const pointvalue = useSelector((store) => store.bonus.point);
  const dispatch = useDispatch();

  function handelpointIncrement() {
    dispatch({
      type: "incrementPoint",
    });
  }
  return (
    <div className="border border-black py-5">
      <div className="flex flex-col gap-5">
        <h2 className="text-center text-white">Bonus Components</h2>
        <h1 className="text-center font-bold text-2xl text-yellow-500">
          Total Point :{pointvalue}
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
