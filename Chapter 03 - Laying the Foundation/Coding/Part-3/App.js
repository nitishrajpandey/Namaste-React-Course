import React from "react"
import ReactDOM from "react-dom/client"


// React.createElement => object => HTMLElement(render)

// jsx (transpiled before it reaches the js Engine)

//  jsx =>React.createElement => ReactElement.js object => HTML

const jsxHeading = <h1 className="heading"> this is jsx heading</h1>

console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading); 