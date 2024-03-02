import React from "react"
import ReactDOM from "react-dom/client"


const jsxHeading = <h1 className="heading"> this is jsx heading</h1>


// React Functional components

const HeadingComponents = () => {
    return <h1>This functional components</h1>
}

const ContainerComponents = () => {
    return (
        <div>
            <HeadingComponents />
            <h1>this is container</h1>
        </div>)
}

// to render function component  <HeadingComponents/>


console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ContainerComponents />); 