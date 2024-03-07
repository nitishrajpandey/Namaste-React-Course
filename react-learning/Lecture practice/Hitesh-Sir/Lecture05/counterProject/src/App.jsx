import Counter from "./Counter";

function App() {
  return (
    <>
      <div className="w-full bg-green-100 h-screen">
        <div className=" absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]">
        <Counter />
        </div>
      </div>
    </>
  );
}

export default App;
