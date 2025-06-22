import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCollege, setCollegeAddress, setToDate, setFromDate ,setEducation } from '../Features/FormSlice/formSlice'

const Education = () => {
   
    const { education } = useSelector((state) => state.form)



    const dispatch = useDispatch()
    return (
        <div className='mt-4 overflow-y-auto'>
            <h1 className="mb-6 text-4xl font-bold">Education:</h1>
            <form>
                {
                    education.map((edu, index) => {
                        return (
                            <>
                                <div key={index}>
                                    <div className=' w-full '>
                                        <label htmlFor="collegeName" className='block mt-6 text-xl font-semibold '>College:</label>
                                        <input id="collegeName"
                                            className='p-2 border rounded-lg bg-white w-full'
                                            type="text"
                                            value={edu.college}
                                            onChange={(e) => dispatch(setCollege({index,value:e.target.value}))}
                                        ></input>
                                    </div>
                                    <div className=' w-full '>
                                        <label htmlFor="collegeaddress" className='block mt-6 text-xl font-semibold '>College Address:</label>
                                        <input id="collegeaddress"
                                            className='p-2 border rounded-lg bg-white w-full'
                                            type="text"
                                            value={edu.collegeAddress}
                                            onChange={(e) => dispatch(setCollegeAddress({index,value:e.target.value}))}
                                        ></input>
                                    </div>
                                    <div className=' w-full '>
                                        <label htmlFor="fromdate" className='block mt-6 text-xl font-semibold '>From:</label>
                                        <input id="fromDate"
                                            className='p-2 border rounded-lg bg-white w-[30%]'
                                            type="date"
                                            value={edu.from}
                                            onChange={(e) => dispatch(setFromDate({index,value:e.target.value}))}

                                        ></input>
                                    </div>
                                    <div className=' w-full '>
                                        <label htmlFor="todate" className='block mt-6 text-xl font-semibold '>To:</label>
                                        <input id="toDate"
                                            className='p-2 border rounded-lg bg-white w-[30%]'
                                            type="date"
                                            value={edu.to}
                                            onChange={(e) => dispatch(setToDate({index,value:e.target.value}))}
                                        ></input>
                                    </div>

                                </div>
                            </>
                        )
                    })
                }
            </form>
            <button className='bg-blue-700 rounded-xl p-2 mt-6 text-white ' onClick={()=>dispatch(setEducation())}>Add Another +</button>
        </div>
    )
}

export default Education