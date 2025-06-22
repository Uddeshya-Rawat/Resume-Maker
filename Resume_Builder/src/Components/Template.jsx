import React from 'react'
import { useSelector } from 'react-redux'

const Template = () => {
  const { firstName, lastName, email, contactNumber,address,education} = useSelector((state) => state.form)
  

  

  return (
    <div className='h-screen fixed right-0 top-0 p-6 overflow-y-auto w-[42%]'>

      <div>{firstName}</div>
      <div>{lastName}</div>
      <div>{email}</div>
      <div>{contactNumber}</div>
      <div>{address}</div>
      {
        education.map((edu)=>{
          return(
            <>

            <div>{edu.college}</div>
            <div>{edu.collegeAddress}</div>
            <div>{edu.from}</div>
            <div>{edu.to}</div>
            </>
          )
        })
      }
     
    </div>
  )
}

export default Template