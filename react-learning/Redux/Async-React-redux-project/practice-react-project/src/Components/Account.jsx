import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "../Store/action";

function Account() {
  const inputElement = useRef();
  const dispatch = useDispatch();
  const { amount } = useSelector((store) => store.amount);
  const initalvalue = useSelector((store) => store.inital);

  function handelIncrementByAmount() {
    dispatch({
      type: "incByAmount",
      payload: Number(inputElement.current.value),
    });
    inputElement.current.value = "";
  }

  function handelIncrement() {
    dispatch({
      type: "increment",
    });
  }
  function handeldecrement() {
    dispatch({
      type: "decrement",
    });
  }

  function handelInitialAmount() {
    dispatch(getUserName("nitishrajpandey"));
  }

  return (
    <div className="border border-black py-5">
      <div className="flex flex-col gap-5">
        <h2 className="text-center text-white">Account Components</h2>
        <h1 className="text-center font-bold text-2xl text-yellow-500">
          Amount : ${amount}
        </h1>
        {initalvalue.pending ? (
          <h1 className=" text-green-600 text-center text-2xl font-bold">
            Loding....
          </h1>
        ) : initalvalue.error ? (
          <p>{initalvalue.error}</p>
        ) : (
          <h1 className="text-center font-bold text-2xl text-yellow-500">
            user id {initalvalue.value}
          </h1>
        )}
      </div>
      <div className="flex flex-wrap gap-5 justify-center items-center mt-10">
        <button
          className="px-3 py-2 bg-slate-500 text-white font-bold rounded-md "
          onClick={handelIncrement}
        >
          Increment +
        </button>
        <button
          className="px-3 py-2 bg-slate-500 text-white font-bold rounded-md "
          onClick={handeldecrement}
        >
          Decrement -
        </button>
        <input
          type="number"
          className="px-3 py-2 outline-none rounded-md font-semibold"
          ref={inputElement}
        />
        <button
          className="px-3 py-2 bg-slate-500 text-white font-bold rounded-md "
          onClick={handelIncrementByAmount}
        >
          Increment By Amount +
        </button>
        <button
          className="px-3 py-2 bg-slate-500 text-white font-bold rounded-md "
          onClick={handelInitialAmount}
        >
          Initial Amount (Async)
        </button>
      </div>
    </div>
  );
}

export default Account;
