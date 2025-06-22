import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAddress } from '../Features/FormSlice/formSlice'

const Address = () => {
  const {address}=useSelector((state)=>state.form)
  const dispatch=useDispatch()

  return (
    <div className='grid-cols-1 mt-2 '>
        <label htmlFor="address" className='block mt-6 text-4xl font-bold '>Address:</label>
        <textarea id="address"
         className='mt-5 border bg-white rounded-lg w-full p-2'
         row={7}
         placeholder='Your Address'
         type="text"
         onChange={(e)=>dispatch(setAddress(e.target.value))}
         value={address}
         ></textarea>
    </div>
  )
}

export default Address