import {
  Heading,
  ErrorMassage,
  ListItems,
  Container,
  InputBox,
} from "./Components";

import { foodItems } from "./ContextData";

function App() {
  const handleOnChangeText = (event) => console.log(event.target.value);
  return (
    <>
      <Container>
        <div className="w-full overflow-hidden flex justify-center">
          <div className="my-20  w-[98%]  sm:max-w-[500px] card-border-color-shadow rounded-2xl sm:p-5 card-bg-color">
            <Heading />
            <InputBox handleOnChange={handleOnChangeText} />
            <ErrorMassage foodItems={foodItems} />
            <ListItems foodItems={foodItems} />
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
