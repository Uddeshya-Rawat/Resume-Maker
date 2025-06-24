import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCompanyName, setdescriptionCompany, setExperience, setFromCompany, setToCompany } from '../../Features/FormSlice/formSlice'

const Experience = () => {
    const { experience } = useSelector((state) => state.form)
    const dispatch = useDispatch()


    return (
        <div className="mt-6">
  <h1 className="mb-2 text-xl font-semibold">Experience:</h1>

  {experience.map((exp, index) => (
    <div key={index} className="mb-4  pb-2">
      {/* Company Name */}
      <div className="w-full">
        <label htmlFor="companyName" className="block text-sm font-medium mt-2">
          Company:
        </label>
        <input
          id="companyName"
          className="p-1 border rounded bg-white w-full text-sm"
          type="text"
          value={exp.companyName}
          onChange={(e) =>
            dispatch(setCompanyName({ index, value: e.target.value }))
          }
        />
      </div>

      {/* Job Description */}
      <div className="w-full">
        <label htmlFor="description" className="block text-sm font-medium mt-2">
          Job Description:
        </label>
        <textarea
          id="description"
          className="p-1 border rounded bg-white w-full text-sm resize-none"
          rows={4}
          type="text"
          value={exp.workDescription}
          onChange={(e) =>
            dispatch(setdescriptionCompany({ index, value: e.target.value }))
          }
        ></textarea>
        <p className="text-xs text-gray-500 mt-1">Press Enter for a new bullet point</p>
      </div>

      {/* From Date */}
      <div className="w-full">
        <label htmlFor="fromdate" className="block text-sm font-medium mt-2">
          From:
        </label>
        <input
          id="fromDate"
          className="p-1 border rounded bg-white w-[40%] text-sm"
          type="date"
          value={exp.from}
          onChange={(e) =>
            dispatch(setFromCompany({ index, value: e.target.value }))
          }
        />
      </div>

      {/* To Date */}
      <div className="w-full">
        <label htmlFor="todate" className="block text-sm font-medium mt-2">
          To:
        </label>
        <input
          id="toDate"
          className="p-1 border rounded bg-white w-[40%] text-sm"
          type="date"
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
    className="bg-blue-700 rounded p-1 mt-4 text-white text-sm"
    onClick={() => dispatch(setExperience())}
  >
    Add Another +
  </button>
</div>

    )
}

export default Experience