import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCertification, addProject, setCertificationLink, setCertificationTitle } from '../../Features/FormSlice/formSlice'

export const Certifications = () => {
  const { certifications } = useSelector((state) => state.form)
  const dispatch=useDispatch()
  return (
    <div className="mt-10 px-6 w-full ml-50">
      <h1 className="mb-6 text-3xl font-bold">Certifications</h1>

      {certifications.map((cert, index) => (
        <div
          key={index}
          className="mb-4 p-4 rounded-lg bg-white shadow"
        >
          {/* Certification Title */}
          <div className="mb-4">
            <label
              htmlFor={`cert-title-${index}`}
              className="block text-lg font-semibold mb-1"
            >
              Certification Title:
            </label>
            <input
              id={`cert-title-${index}`}
              type="text"
              placeholder="e.g., Meta Front-End Developer"
              className="w-full p-2 border rounded text-sm bg-white"
              value={cert.title}
              onChange={(e) =>
                dispatch(setCertificationTitle({ index, value: e.target.value }))
              }
            />
          </div>

          {/* Certification Link */}
          <div>
            <label
              htmlFor={`cert-link-${index}`}
              className="block text-lg font-semibold mb-1"
            >
              Certificate Link:
            </label>
            <input
              id={`cert-link-${index}`}
              type="url"
              placeholder="e.g., https://coursera.org/certificate/abc123"
              className="w-full p-2 border rounded text-sm bg-white"
              value={cert.link}
              onChange={(e) =>
                dispatch(setCertificationLink({ index, value: e.target.value }))
              }
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        className="bg-blue-700 text-white px-4 py-2 rounded-xl text-sm"
        onClick={() => dispatch(addCertification())}
      >
        Add another
      </button>
    </div>
  )
}
