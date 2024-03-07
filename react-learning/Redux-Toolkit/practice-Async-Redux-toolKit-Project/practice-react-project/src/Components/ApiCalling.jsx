import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../store/Slices/asyncSlice";
import { useRef } from "react";

function ApiCalling() {
  const inputElement = useRef();
  const AsyncCall = useSelector((state) => state.AsyncCall);
  const dispatch = useDispatch();

  function handelAsyncId() {
    dispatch(getUserId(inputElement.current.value));
    inputElement.current.value = "";
  }

  return (
    <div className="border border-black py-5">
      <div className="flex flex-col gap-5">
        <h2 className="text-center text-white">Bonus Components</h2>
        {AsyncCall.isLoding ? (
          <h1 className="text-white font-bold text-center">Loding...</h1>
        ) : AsyncCall.isError ? (
          <p>error</p>
        ) : (
          <h1 className="text-center font-bold text-2xl text-yellow-500">
            Async Id : {AsyncCall.idValue}
          </h1>
        )}
      </div>
      <div className="flex justify-center mt-5">
        <input
          type="text"
          className="px-3 py-2 outline-none rounded-md font-semibold"
          ref={inputElement}
        />
      </div>
      <div className="text-center mt-7">
        <button
          className="px-3 py-2 bg-slate-500 text-white font-bold rounded-md "
          onClick={handelAsyncId}
        >
          Find Id
        </button>
      </div>
    </div>
  );
}

export default ApiCalling;
