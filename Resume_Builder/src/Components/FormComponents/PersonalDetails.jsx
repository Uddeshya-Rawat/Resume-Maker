
import { useDispatch, useSelector } from 'react-redux'
import {  setFirstName,setLastName,setEmail,setNumber } from '../../Features/FormSlice/formSlice'

const PersonalDetails = () => {

   
    const {firstName, lastName, email, contactNumber} = useSelector((state)=>state.form) // takes the state and slice name 
    const dispatch=useDispatch()

   
    
    
  return (
   <form className="w-full px-6 mt-10 ml-50 ">
  <h1 className="mb-6 text-3xl font-bold">Personal Details</h1>

  <div className="grid grid-cols-2 gap-6">
    {/* First Name */}
    <div>
      <label htmlFor="firstName" className="block text-lg font-semibold mb-1">
        First Name:
      </label>
      <input
        id="firstName"
        type="text"
        placeholder="First name"
        className="w-full p-2 border rounded bg-white text-sm"
        value={firstName}
        onChange={(e) => dispatch(setFirstName(e.target.value))}
      />
    </div>

    {/* Last Name */}
    <div>
      <label htmlFor="lastName" className="block text-lg font-semibold mb-1">
        Last Name:
      </label>
      <input
        id="lastName"
        type="text"
        placeholder="Last name"
        className="w-full p-2 border rounded bg-white text-sm"
        value={lastName}
        onChange={(e) => dispatch(setLastName(e.target.value))}
      />
    </div>

    {/* Email */}
    <div>
      <label htmlFor="email" className="block text-lg font-semibold mb-1">
        Email:
      </label>
      <input
        id="email"
        type="email"
        placeholder="Your email"
        className="w-full p-2 border rounded bg-white text-sm"
        value={email}
        onChange={(e) => dispatch(setEmail(e.target.value))}
      />
    </div>

    {/* Contact Number */}
    <div>
      <label htmlFor="contactNumber" className="block text-lg font-semibold mb-1">
        Contact Number:
      </label>
      <input
        id="contactNumber"
        type="number"
        min={1}
        placeholder="Your number"
        className="w-full p-2 border rounded bg-white text-sm no-spinner"
        value={contactNumber}
        onChange={(e) => dispatch(setNumber(e.target.value))}
      />
    </div>
  </div>
</form>


  )
}

export default PersonalDetails