import "./App.css";
import Card from "./Components/Card";

function App() {
  return (
    <>
      <div className="flex flex-col sm:flex-row flex-wrap gap-5 justify-center ">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;
