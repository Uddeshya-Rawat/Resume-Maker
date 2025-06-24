import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCollege, setToDate, setFromDate, setEducation, setStream } from '../../Features/FormSlice/formSlice'

const Education = () => {

  const { education } = useSelector((state) => state.form)
  const dispatch = useDispatch()
  return (
    <div className="mt-10 px-6 w-full ml-50">
  <h1 className="mb-6 text-3xl font-bold">Education</h1>

  <form>
    {education.map((edu, index) => (
      <div key={index} className="mb-6  p-4 rounded-lg">
        
        {/* College */}
        <div className="mb-4">
          <label htmlFor="collegeName" className="block font-semibold text-lg mb-1">
            College:
          </label>
          <input
            id="collegeName"
            className="w-full p-2 border rounded bg-white text-sm"
            type="text"
            value={edu.college}
            placeholder="e.g., GB Pant Institute"
            onChange={(e) => dispatch(setCollege({ index, value: e.target.value }))}
          />
        </div>

        {/* Stream */}
        <div className="mb-4">
          <label htmlFor="stream" className="block font-semibold text-lg mb-1">
            Stream:
          </label>
          <input
            id="stream"
            className="w-full p-2 border rounded bg-white text-sm"
            type="text"
            value={edu.stream}
            placeholder="e.g., Computer Science"
            onChange={(e) => dispatch(setStream({ index, value: e.target.value }))}
          />
        </div>

        {/* From Date */}
        <div className="mb-4">
          <label htmlFor="fromDate" className="block font-semibold text-lg mb-1">
            From:
          </label>
          <input
            id="fromDate"
            className="p-2 border rounded bg-white w-[40%] text-sm"
            type="date"
            value={edu.from}
            onChange={(e) => dispatch(setFromDate({ index, value: e.target.value }))}
          />
        </div>

        {/* To Date */}
        <div>
          <label htmlFor="toDate" className="block font-semibold text-lg mb-1">
            To:
          </label>
          <input
            id="toDate"
            className="p-2 border rounded bg-white w-[40%] text-sm"
            type="date"
            value={edu.to}
            onChange={(e) => dispatch(setToDate({ index, value: e.target.value }))}
          />
        </div>
      </div>
    ))}
  </form>

  <button
    type="button"
    className="bg-blue-700 text-white px-4 py-2 rounded-xl text-sm"
    onClick={() => dispatch(setEducation())}
  >
    Add Another +
  </button>
</div>


  )
}

export default Education