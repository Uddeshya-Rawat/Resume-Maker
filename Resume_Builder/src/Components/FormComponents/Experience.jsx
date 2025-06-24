import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCompanyName, setdescriptionCompany, setExperience, setFromCompany, setToCompany } from '../../Features/FormSlice/formSlice'

const Experience = () => {
  const { experience } = useSelector((state) => state.form)
  const dispatch = useDispatch()


  return (
    <div className="mt-10 px-6 w-full  ml-50">
      <h1 className="mb-6 text-3xl font-bold">Experience</h1>

      {experience.map((exp, index) => (
        <div key={index} className="mb-6  p-4 rounded-lg">

          {/* Company Name */}
          <div className="mb-4">
            <label htmlFor="companyName" className="block font-semibold text-lg">
              Company:
            </label>
            <input
              id="companyName"
              type="text"
              className="w-full p-2 border rounded bg-white text-sm"
              value={exp.companyName}
              placeholder="e.g., Google, Infosys"
              onChange={(e) =>
                dispatch(setCompanyName({ index, value: e.target.value }))
              }
            />
          </div>

          {/* Job Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block font-semibold text-lg">
              Job Description:
            </label>
            <textarea
              id="description"
              rows={4}
              className="w-full p-2 border rounded bg-white text-sm resize-none"
              placeholder="Write responsibilities, achievements..."
              value={exp.workDescription}
              onChange={(e) =>
                dispatch(setdescriptionCompany({ index, value: e.target.value }))
              }
            ></textarea>
            <p className="text-xs text-gray-500 mt-1">Press Enter for a new bullet point</p>
          </div>

          {/* From Date */}
          <div className="mb-4">
            <label htmlFor="fromdate" className="block font-semibold text-lg">
              From:
            </label>
            <input
              id="fromDate"
              type="date"
              className="p-2 border rounded bg-white w-[40%] text-sm"
              value={exp.from}
              onChange={(e) =>
                dispatch(setFromCompany({ index, value: e.target.value }))
              }
            />
          </div>

          {/* To Date */}
          <div>
            <label htmlFor="todate" className="block font-semibold text-lg">
              To:
            </label>
            <input
              id="toDate"
              type="date"
              className="p-2 border rounded bg-white w-[40%] text-sm"
              value={exp.to}
              onChange={(e) =>
                dispatch(setToCompany({ index, value: e.target.value }))
              }
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        className="bg-blue-700 text-white px-4 py-2 rounded-xl text-sm"
        onClick={() => dispatch(setExperience())}
      >
        Add Another +
      </button>
    </div>


  )
}

export default Experience