import CurrentTime from "./Components/CurrentTime";
import Heading from "./Components/Heading";
import SubHeading from "./Components/SubHeading";

function App() {
  return (
    <>
      <div className="w-full overflow-hidden">
        <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <Heading />
          <SubHeading />
          <CurrentTime />
        </div>
      </div>
    </>
  );
}

export default App;
