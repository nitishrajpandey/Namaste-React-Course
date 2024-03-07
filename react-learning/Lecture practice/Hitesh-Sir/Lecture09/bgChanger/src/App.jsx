import { useState } from "react";


function App() {


  const [color,setColor]=useState("black")

  return (
    <>
      <div className="w-full h-screen " style={{backgroundColor:color}}>
      <div className="flex justify-center">
      <div className=" bg-white absolute  bottom-10 px-10 py-3 rounded-3xl flex">
        <div className="flex justify-center">
          <div className=" flex gap-2 text-white font-semibold">
            <button className="px-6 py-2 rounded-2xl bg-red-600  active:scale-95 duration-500 hover:ease-in-out" onClick={()=> setColor("red")}>
              red
            </button>
            <button className="px-6 py-2 rounded-2xl bg-green-600 active:scale-95 duration-500 hover:ease-in-out" onClick={()=> setColor("green")}>
              green
            </button>
            <button className="px-6 py-2 rounded-2xl bg-blue-600 active:scale-95 duration-500 hover:ease-in-out" onClick={()=> setColor("blue")}>
              blue
            </button>
            <button className="px-6 py-2 rounded-2xl bg-orange-600 active:scale-95 duration-500 hover:ease-in-out" onClick={()=> setColor("orange")}>
              orange
            </button>
            <button className="px-6 py-2 rounded-2xl bg-yellow-600 active:scale-95 duration-500 hover:ease-in-out" onClick={()=> setColor("yellow")}>
              yellow
            </button>
            <button className="px-6 py-2 rounded-2xl bg-pink-600 active:scale-95 duration-500 hover:ease-in-out" onClick={()=> setColor("pink")}>
              pink
            </button>
            <button className="px-6 py-2 rounded-2xl bg-gray-600 active:scale-95 duration-500 hover:ease-in-out" onClick={()=> setColor("gray")}>
              gray
            </button>
          </div>
        </div>
      </div>
    </div>
      </div>
    </>
  );
}

export default App;
