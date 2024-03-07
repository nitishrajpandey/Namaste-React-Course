import { useCallback, useEffect, useRef, useState } from "react";

function PasswordGenerator() {
  // declear all usestate variable and function

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook  for refrence (we use to refrence the password)

  const passwordRef = useRef(null);

  // use the usecallback hook to store the depndency usefule data into chache memory

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*()-_=+[]{}|;:,.~";
    }

    // generate random number

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    // call the setpassword function
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  // create the funtion to clip the password

  const copyPasswordToClip = useCallback(() =>
 {
  window.navigator.clipboard.writeText(password)
  passwordRef.current.select()
 }, [password]);

  // use the useffect hook to re generate the function when the dependency occure

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);

  //  this is the ui part of the components

  return (
    <>
      <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]   w-[90%] max-w-xl text-orange-500 bg-gray-800 rounded-3xl">
        <div className="border border-black py-5 px-5 sm:px-10 ">
          <h1 className="text-center font-bold capitalize text-3xl md:text-4xl my-5">Password Generator</h1>

          <div className="w-full flex  mb-4">
            <input
              className=" w-full border font-semibold text-xl border-black py-2 px-5 outline-none rounded-l-xl"
              type="text"
              placeholder="Password.."
              value={password}
              readOnly
              ref={passwordRef}
            />
            <button
              className=" py-2 px-4 rounded-r-xl bg-blue-800 text-white font-bold active:scale-95 duration-300 ease-in-out hover:bg-green-500"
              onClick={copyPasswordToClip}
            >
              Copy
            </button>
          </div>

          <div className="flex flex-col mt-6 sm:flex-row sm:justify-between">
            <div className="flex gap-1">
              <input
                className=" cursor-pointer"
                type="range"
                name=""
                id=""
                value={length}
                min={8}
                max={100}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label className="font-semibold text-xl" htmlFor="">
                {" "}
                Scale({length}){" "}
              </label>
            </div>

            <div className="flex gap-1">
              <input
                type="checkbox"
                name=""
                id="numbers"
                defaultChecked={numberAllowed}
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label className="font-semibold text-xl" htmlFor="numbers">
                Numbers
              </label>
            </div>

            <div className="flex gap-1">
              <input
                type="checkbox"
                name=""
                id="char"
                defaultChecked={charAllowed}
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label className="font-semibold text-xl" htmlFor="char">
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordGenerator;
