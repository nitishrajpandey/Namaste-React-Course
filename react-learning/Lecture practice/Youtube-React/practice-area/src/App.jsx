// import React from 'react'
import Video from "./components/Video";
import videos from "./data/Data";

function App() {

  return (
    <>
      <div className=" w-full h-screen bg-[#333]">
        <div className="flex gap-3 flex-row  justify-evenly pt-5 flex-wrap">
        {
          videos.map((video)=><Video
          key={video.id}
            id={video.id}
            title={video.title}
            views={video.views}
            time={video.time}
            verified={video.verified}
          />)
        }

        </div>
      </div>
    </>
  );
}


export default App;
