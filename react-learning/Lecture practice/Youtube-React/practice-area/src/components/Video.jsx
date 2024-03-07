/* eslint-disable react/prop-types */
// import React from 'react'

function Video({
  id,
  title,
  channel = "Coder nitish",
  views,
  time,
  verified
}) {
  // 1st method

  // let channelJsx;
  // if (verified) {
  //   channelJsx=<div className='text-gray-400 font-semibold text-sm ' >{channel} ✅</div>
  // }
  // else{

  //   channelJsx=<div className='text-gray-400 font-semibold text-sm ' >{channel}</div>
  // }
  return (
    <>
      <div className="w-[20%] ">
        <div>
          <img className="w-full" src={`https://picsum.photos/id/${id}/200/200`} alt="" />
        </div>
        <div className=" text-white font-semibold text-xl pt-2 pb-3">
          {title}
        </div>
        {/* {channelJsx} */}

        {/* this is second method */}
        {/* {verified ? <div className='text-gray-400 font-semibold text-sm ' >{channel} ✅</div> : <div className='text-gray-400 font-semibold text-sm ' >{channel}</div> } */}


        <div className='text-gray-400 font-semibold text-sm ' >{channel} {verified ? '✅': null}</div>


        <div className="text-gray-400 font-semibold text-sm ">
          {views} views <span> . </span> {time}
        </div>
      </div>
    </>
  );
}

// ekk component ke under multiple function likh sakte hai
// function VideoRrea() {
//   return (
//     <div>Video Zone</div>
//   )
// }

export default Video;
