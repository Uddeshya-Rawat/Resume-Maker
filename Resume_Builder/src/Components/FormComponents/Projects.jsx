import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProject, setProjectDescription, setProjectTechStack, setProjectTitle } from '../../Features/FormSlice/formSlice';



const Projects = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.form);

  return (
    <div className="mt-10 px-6 w-full ml-50">
      <h1 className="mb-6 text-3xl font-bold">Projects</h1>

      {projects.map((proj, index) => (
        <div key={index} className="mb-6  p-4 rounded-lg">
          <div className="mb-4">
            <label className="block font-semibold text-lg">Project Title:</label>
            <input
              type="text"
              className="w-full p-2 border rounded bg-white text-sm"
              value={proj.title}
              placeholder="e.g., Task Manager App"
              onChange={(e) =>
                dispatch(setProjectTitle({ index, value: e.target.value }))
              }
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold text-lg">Description:</label>
            <textarea
              rows={4}
              className="w-full p-2 border rounded bg-white text-sm"
              value={proj.description}
              placeholder="What does the project do? "
              onChange={(e) =>
                dispatch(setProjectDescription({ index, value: e.target.value }))
              }
            ></textarea>
          </div>

          <div>
            <label className="block font-semibold text-lg">Tech Stack Used :</label>
            <input
              type="text"
              className="w-full p-2 border rounded bg-white text-sm"
              value={proj.link}
              placeholder="e.g HTML , CSS , JAVSCRIPT"
              onChange={(e) =>
                dispatch(setProjectTechStack({ index, value: e.target.value }))
              }
            />
          </div>
        </div>
      ))}

      <button
        onClick={() => dispatch(addProject())}
        className="bg-blue-700 text-white px-4 py-2 rounded-xl mt-4"
      >
        Add Another +
      </button>
    </div>
  );
};

export default Projects;
