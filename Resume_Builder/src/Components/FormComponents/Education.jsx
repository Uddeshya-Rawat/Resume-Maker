import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCollege, setToDate, setFromDate, setEducation, setStream } from '../../Features/FormSlice/formSlice'

const Education = () => {

  const { education } = useSelector((state) => state.form)
  const dispatch = useDispatch()
  return (
    <div className="mt-4 overflow-y-auto">
      <h1 className="mb-2 text-xl font-semibold">Education:</h1>
      <form>
        {education.map((edu, index) => (
          <div key={index} className="mb-4  pb-2">
            {/* College */}
            <div className="w-full">
              <label htmlFor="collegeName" className="block text-sm font-medium mt-2">
                College:
              </label>
              <input
                id="collegeName"
                className="p-1 border rounded bg-white w-full text-sm"
                type="text"
                value={edu.college}
                onChange={(e) => dispatch(setCollege({ index, value: e.target.value }))}
              />
            </div>

            {/* Stream */}
            <div className="w-full">
              <label htmlFor="stream" className="block text-sm font-medium mt-2">
                Stream:
              </label>
              <input
                id="stream"
                className="p-1 border rounded bg-white w-full text-sm"
                type="text"
                value={edu.stream}
                onChange={(e) => dispatch(setStream({ index, value: e.target.value }))}
              />
            </div>

            {/* From Date */}
            <div className="w-full">
              <label htmlFor="fromDate" className="block text-sm font-medium mt-2">
                From:
              </label>
              <input
                id="fromDate"
                className="p-1 border rounded bg-white w-[40%] text-sm"
                type="date"
                value={edu.from}
                onChange={(e) => dispatch(setFromDate({ index, value: e.target.value }))}
              />
            </div>

            {/* To Date */}
            <div className="w-full">
              <label htmlFor="toDate" className="block text-sm font-medium mt-2">
                To:
              </label>
              <input
                id="toDate"
                className="p-1 border rounded bg-white w-[40%] text-sm"
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
        className="bg-blue-700 rounded p-1 mt-2 mb-5 text-white text-sm"
        onClick={() => dispatch(setEducation())}
      >
        Add Another +
      </button>
    </div>

  )
}

export default Education