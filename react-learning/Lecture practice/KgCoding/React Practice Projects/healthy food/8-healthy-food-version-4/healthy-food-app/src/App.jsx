import { Heading, ErrorMassage, ListItems } from "./Components";

import { foodItems } from "./ContextData";

function App() {
  return (
    <>
      <div className="w-full overflow-hidden flex justify-center">
        <div className="my-20   max-w-[500px] card-border-color-shadow rounded-2xl sm:p-5 card-bg-color">
          <Heading />
          <ErrorMassage foodItems={foodItems} />
          <ListItems foodItems={foodItems} />
        </div>
      </div>
    </>
  );
}

export default App;
