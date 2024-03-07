import ButtonContainer from "./Components/ButtonContainer";
import InputFiled from "./Components/InputFiled";

function Calculator() {
  return (
    <>
      <div className="flex justify-center w-full overflow-hidden">
        <div className=" my-10 pb-10 w-[300px] xxs:w-[360px] xs:w-[400px] border border-[#eeeeee75] shadow-md shadow-[#eeeeee75] rounded-3xl bg-transparent">
          <InputFiled />
          <ButtonContainer />
        </div>
      </div>
    </>
  );
}

export default Calculator;
