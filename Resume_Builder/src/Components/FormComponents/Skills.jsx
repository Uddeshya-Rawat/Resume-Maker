import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSkill, setSkill } from '../../Features/FormSlice/formSlice'

const Skills = () => {
    const {skills}=useSelector((state)=>state.form)
    const dispatch=useDispatch()
  return (
   <div className="mt-10 px-6 w-full ml-50">
  <h1 className="mb-6 text-3xl font-bold">Skills</h1>

  {skills.map((skill, index) => (
    <div
      key={index}
      className="mb-4  p-4 rounded-lg bg-white shadow"
    >
      <label
        htmlFor={`skill-${index}`}
        className="block text-lg font-semibold mb-2"
      >
        Skill {index + 1}:
      </label>
      <input
        
        type="text"
        placeholder="e.g. html , css "
        className="w-full p-2 border
         rounded text-sm bg-white"
        value={skill}
        onChange={(e) => dispatch(setSkill({ index, value: e.target.value }))}
      />
    </div>
  ))}

  <button
    type="button"
    className="bg-blue-700 text-white px-4 py-2 rounded-xl text-sm"
    onClick={() => dispatch(addSkill())}
  >
    Add Another +
  </button>
</div>

  )
}

export default Skills