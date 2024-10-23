import { useState } from "react";
import { createResume } from "../assets/api.js"; // Import createResume function
import PropTypes from "prop-types";

function ResumeForm({ token, onSubmit }) {
  const [resumeData, setResumeData] = useState({
    title: "",
    description: "",
    skills: "",
    education: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleResumeSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createResume(resumeData, token);
      console.log("Resume created successfully:", response);
    } catch (error) {
      console.error("Error creating resume:", error.message);
    }
    onSubmit();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen dark">
      <div className="w-full max-w-md border-4 border-blue-300/70 bg-gray-800/90 rounded-lg hover:shadow-2xl hover:shadow-sky-500 duration-1000 p-6">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">
          Professional Pitch
        </h2>
        <form className="flex flex-col" onSubmit={handleResumeSubmit}>
          <h1 className="text-white font-bold text-lg">Title</h1>
          <input
            name="title"
            placeholder="ex. Software Engineer, Data Analyst"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            value={resumeData.title}
            onChange={handleChange}
          />
          <h1 className="text-white font-bold text-lg">Description</h1>
          <input
            name="description"
            placeholder="ex. Full Stack Developer with 5 years of experience"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            value={resumeData.description}
            onChange={handleChange}
          />
          <h1 className="text-white font-bold text-lg">Skills</h1>
          <input
            name="skills"
            placeholder="ex. JavaScript, Python, React, Node.js"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            value={resumeData.skills}
            onChange={handleChange}
          />
          <h1 className="text-white font-bold text-lg">Educación</h1>
          <input
            name="education"
            placeholder="ex. Universidad de Buenos Aires  Ingeniería en Informática"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            value={resumeData.education}
            onChange={handleChange}
          />
          <button
            className="border border-blue-400/30 bg-blue-500/20  hover:bg-blue-500/30  text-white font-bold py-2 px-4 rounded-lg mt-4 transition ease-in-out duration-150"
            type="submit"
          >
            Apply
          </button>
        </form>
      </div>
    </div>
  );
}

ResumeForm.propTypes = {
  token: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ResumeForm;
