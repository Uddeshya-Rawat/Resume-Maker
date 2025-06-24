import React from 'react'
import { useSelector } from "react-redux";

const Temp1 = () => {
    const { firstName, lastName, email, contactNumber, address, education, experience } =
    useSelector((state) => state.form);
  return (
   <div>
    hello
    
   </div>
  )
}

export default Temp1