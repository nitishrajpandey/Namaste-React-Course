/* eslint-disable react/prop-types */
// import React from 'react'
import { CgMail } from 'react-icons/cg';
import { BsFillTelephonePlusFill } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';

function Contact({gmail="gmail@gmail.com",phoneNumber="+123456789",location="Your location"}) {
  return (
    <>
    <div className="mt-6 flex flex-col flex-wrap  text-white gap-y-1">
        <span className=" font-semibold tracking-widest text-white border-b-2 border-white w-fit pb-2">CONTACT</span>
        <div className='flex items-center gap-2 whitespace-normal'>
        <CgMail/>
        <div className="">{gmail}</div>
        </div>


        <div className='flex items-center gap-2'>
        <BsFillTelephonePlusFill/>
        <span>{phoneNumber}</span>
        </div>

        <div className='flex items-center gap-2'>
        <FaLocationDot/>
        <span>{location}</span>
        </div>

    </div>
    </>
  )
}

export default Contact