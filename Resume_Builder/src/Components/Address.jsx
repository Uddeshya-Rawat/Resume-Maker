import React from 'react'

const Address = () => {
  return (
    <div className='grid-cols-1 '>
        <label htmlfor="address" className='block mt-6 text-4xl font-bold '>Address:</label>
        <textarea id="address"
         className='mt-5 border bg-white rounded-lg w-full'
         row={7}
         placeholder='Your Address'
         type="text"
         ></textarea>
    </div>
  )
}

export default Address