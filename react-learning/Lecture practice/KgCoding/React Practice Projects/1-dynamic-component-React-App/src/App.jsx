import "./App.css";

function App() {
  let number = 45;
  const number1 = 4;

  const fullName = () => {
    return "Nitish Raj";
  };

  const familyMember = [
    " Sanjeev pandey ",
    ",",
    " Malti devi ",
    ",",
    " Navneet Raj ",
    ",",
    " Nitish Raj ",
  ];

  return (
    <>
      <h1>
        Massage No {number} := Hello {fullName()}
      </h1>
      <p>
        There are {number1} member in my family : {familyMember}
      </p>
    </>
  );
}

export default App;
