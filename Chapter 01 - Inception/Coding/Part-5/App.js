
/**
 * <div id="parents">
 *  <div id="child">
        <h1> i am h1 tag</h1> 
        <h2> i am h2 tag</h2>
    </div>
    </div>

 * 
 * 
const parents = React.createElement("div", { id: "parents" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "i am h1 tag"), React.createElement("h2", {}, "i am h2 tag")]));
 * 

------------------------------------------------------------------------------------------------
 * 
 * 
 * 
 * <div id="parents">
    <div id="child">
        <h1> i am h1 tag</h1> 
        <h2> i am h2 tag</h2>
    </div>
     <div id="child2">
        <h1> i am h1 tag</h1> 
        <h2> i am h2 tag</h2>
    </div>
   </div>
 * 

   ReactElement(Object) => Html(Browser underStands)
 * 
 * 
 */




const parents = React.createElement("div", { id: "parents" }, [React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "i am h1 tag"), React.createElement("h2", {}, "i am h2 tag")]), React.createElement("div", { id: "child2" }, [React.createElement("h1", {}, "i am h1 tag"), React.createElement("h2", {}, "i am h2 tag")])]);


console.log(parents); //object



// const heading = React.createElement("h1", { id: "heading" }, "Hello World ! ");
// console.log(heading); // object



const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); 
root.render(parents);