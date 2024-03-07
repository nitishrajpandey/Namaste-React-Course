import { Display, ButtonContainer } from "./Components";
import { ButtonData } from "./ContextData";
function App() {
  return (
    <>
      <div className="w-full overflow-hidden flex justify-center my-20 ">
        <div className="max-w-[400px] card-border-color-shadow p-5 pb-0 rounded-3xl card-bg-color">
          <Display />
          <ButtonContainer ButtonData={ButtonData} />
          <p className="text-center  pb-1 button-text-color  text-xs ">
            Made By : Nitish raj
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
