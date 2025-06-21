import React from 'react'
import { useSelector } from 'react-redux'

const Template = () => {
  const { firstName, lastName, email, contactNumber } = useSelector((state) => state.form)

  return (
    <div>

      <div>{firstName}</div>
      <div>{lastName}</div>
      <div>{email}</div>
      <div>{contactNumber}</div>
      
    </div>
  )
}

export default Template