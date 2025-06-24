import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAddress } from '../../Features/FormSlice/formSlice'

const Address = () => {
  const { address } = useSelector((state) => state.form)
  const dispatch = useDispatch()

  return (
    <div className="mt-10 px-6 w-full ml-50">
      <h1 className="mb-6 text-3xl font-bold">Address</h1>

      <div className="">
        <label htmlFor="address" className="block text-lg font-semibold mb-2">
          Your Address:
        </label>
        <textarea
          id="address"
          className="w-full p-2 border rounded text-sm bg-white resize-none"
          rows={4}
          placeholder="Enter your full address"
          onChange={(e) => dispatch(setAddress(e.target.value))}
          value={address}
        ></textarea>
      </div>
    </div>


  )
}

export default Address