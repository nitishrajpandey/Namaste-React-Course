function InputField() {
  return (
    <>
      <div className="flex md:flex-row flex-col md:items-stretch items-center justify-between gap-10 mt-20 ">
        <input
          type="text"
          placeholder="Enter Todo here"
          className=" border border-black px-5 rounded-lg font-medium outline-green-900  "
        />
        <input
          type="date"
          className=" border border-black px-5 rounded-lg outline-green-900"
        />
        <button className="px-6 py-3 text-lg border-none rounded-2xl font-bold bg-green-900 text-white outline-none active:scale-95 ">
          Add
        </button>
      </div>
    </>
  );
}

export default InputField;
