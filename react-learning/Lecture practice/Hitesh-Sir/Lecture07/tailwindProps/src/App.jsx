import Card from "./Components/Card";
import Tittle from "./Components/Tittle";

function App() {

  let datas=[
    {
      id:1,
      photo:"https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFufGVufDB8fDB8fHww",
      userName:"Khushi",
      button:"Vist me"
    },
    {
      id:2,
      photo:"https://images.unsplash.com/photo-1591980896142-4e36328411ec?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFufGVufDB8fDB8fHww",
      userName:"Malti",
      button:"Click me"
    },
    
    {
      id:3,
      photo:"https://images.unsplash.com/photo-1622782262245-bfb660f4ff93?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbnxlbnwwfHwwfHx8MA%3D%3D",
      userName:"Sita"
    }
  ]


  return (
    <>
      <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div>
          <Tittle />
        </div>
        <div className="flex gap-3">
          {
            datas.map((data)=>
              <Card 
              key={data.id}
              photo={data.photo}
               userName={data.userName}
                button={data.button} />
            )
          }
        
        </div>
      </div>
    </>
  );
}

export default App;
