
import { useDispatch, useSelector } from 'react-redux'
import {  setFirstName,setLastName,setEmail,setNumber } from '../Features/FormSlice/formSlice'

const PersonalDetails = () => {

   
    const {firstName, lastName, email, contactNumber} = useSelector((state)=>state.form) // takes the state and slice name 
    const dispatch=useDispatch()

   
    
    
  return (
   <form className="w-full">
                <h1 className="mb-6 text-4xl font-bold">Personal Details</h1>

                <div className="grid grid-cols-2 gap-4">
                    {/* First Name */}
                    <div>
                        <label htmlFor="firstName" className="font-semibold text-xl block">
                            First Name:
                        </label>
                        <input
                            id="firstName"
                            type="text"
                            placeholder="First name"
                            className="border rounded-lg p-2 w-full bg-white"
                            value={firstName}
                            onChange={(e)=>dispatch(setFirstName(e.target.value))}
                        />
                    </div>

                

                    {/* Last Name */}
                    <div>
                        <label htmlFor="lastName" className="font-semibold text-xl block">
                            Last Name:
                        </label>
                        <input
                            id="lastName"
                            type="text"
                            placeholder="Last name"
                            className="border rounded-lg p-2 w-full bg-white"
                            value={lastName}
                            onChange={(e) =>dispatch(setLastName(e.target.value)) }
                        />
                    </div>

                    {/*Email */}

                    <div>
                        <label htmlFor="email" className='block text-xl font-semibold'>Email:</label>
                        <input className='border rounded-lg p-2 w-full bg-white'
                         id="email"
                         type="email"
                         value={email}
                         onChange={(e)=>dispatch(setEmail(e.target.value))}
                         placeholder='Your email' ></input>
                    </div>

                    {/*Contact Number */}
                    <div>
                        <label htmlFor="Contact Number" className='block text-xl font-semibold'>Contact Number:</label>
                        <input className='border rounded-lg p-2 w-full bg-white no-spinner'
                         id="Contact Number"
                         type="number"
                         min={1}
                         value={contactNumber}
                         onChange={(e)=>dispatch(setNumber(e.target.value))}
                         placeholder='Your Number' ></input>
                    </div>
                    
                </div>
            </form>
  )
}

export default PersonalDetails