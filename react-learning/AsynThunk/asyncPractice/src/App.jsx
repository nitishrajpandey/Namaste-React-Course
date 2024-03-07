import React from "react";

import { Provider } from "react-redux";
import Product from "./Components/Product/Product";
import { myStore } from "./Store";
function App() {
  return (
    <div>
      <Provider store={myStore}>
        <Product />
      </Provider>
    </div>
  );
}

export default App;
