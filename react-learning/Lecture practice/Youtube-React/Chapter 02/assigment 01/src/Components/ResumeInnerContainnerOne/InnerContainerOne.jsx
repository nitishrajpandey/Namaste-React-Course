// import React from 'react'
import Avtar from '../ResumeInnerContainnerOne/Avtar'
import Contact from '../ResumeInnerContainnerOne/Contact'
import Skills from './Skills'
function InnerContainerOne() {
  return (
    <>
    <div className="w-[30%] lg:w-[25%] flex flex-col  md:px-5 lg:px-10 bg-[#005C85]">
      <Avtar avtar="https://avatars.githubusercontent.com/u/83996601?v=4"/>
      <Contact gmail='nitishrajpandey@gmail.com' phoneNumber='+91123456789' location='patna'/>
      <Skills/>
    </div>
    </>
  )
}

export default InnerContainerOne