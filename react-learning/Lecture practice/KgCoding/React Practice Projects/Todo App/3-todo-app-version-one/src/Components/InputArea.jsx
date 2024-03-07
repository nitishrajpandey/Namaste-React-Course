function InputArea() {
  return (
    <>
      <div className="flex flex-col w-full sm:flex-row overflow-hidden  items-center gap-5 my-5">
        <div className="sm:w-[50%] ">
          <input
            type="text"
            placeholder="Enter todo .."
            className="w-full text-lg px-5 py-3  rounded-lg outline-none border border-[#6EE7B7] hover:border-[#3B82F6] focus:border-[#3B82F6]"
          />
        </div>
        <div className="sm:w-[30%]">
          <input
            type="date"
            className="w-full py-3 px-3 rounded-lg outline-none border border-[#6EE7B7] hover:border-[#3B82F6] focus:border-[#3B82F6] "
          />
        </div>
        <div className="sm:w-[15%]">
          <button className=" w-full px-6 sm:px-4 py-3 border border-[#6EE7B7] hover:border-[#3B82F6] focus:border-[#3B82F6]  rounded-md active:scale-95 duration-300 ease-in-out  shadow-sm shadow-[#6EE7B7]">
            ADD
          </button>
        </div>
      </div>
    </>
  );
}

export default InputArea;
