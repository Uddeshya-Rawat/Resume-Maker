import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAddress } from '../../Features/FormSlice/formSlice'

const Address = () => {
  const { address } = useSelector((state) => state.form)
  const dispatch = useDispatch()

  return (
    <div className="grid-cols-1 mt-2">
      <label htmlFor="address" className="block text-sm font-medium mt-2">
        Address:
      </label>
      <textarea
        id="address"
        className="mt-1 border bg-white rounded p-1 w-full text-sm resize-none"
        rows={2}  // smaller than 7 for compact layout
        placeholder="Your address"
        onChange={(e) => dispatch(setAddress(e.target.value))}
        value={address}
      ></textarea>
    </div>

  )
}

export default Address