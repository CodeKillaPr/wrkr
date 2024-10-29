import { useState } from "react";
import { createResume } from "../assets/api.js"; // Import createResume function
import PropTypes from "prop-types";
import { createBooking } from "../assets/api.js";

function ResumeForm({ token, onSubmit, job_id }) {
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
      const resumeResponse = await createResume(resumeData, token);
      const resume_id = resumeResponse.resume.id;

      console.log("Resume created successfully:", resumeResponse);

      // Use the resume ID to create the booking
      const bookingResponse = await createBooking({
        job_id,
        resume_id,
        token,
      });
      console.log("Booking created successfully:", bookingResponse);
    } catch (error) {
      console.error("Error creating resume or booking:", error.message);
    }
    onSubmit();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen dark">
      <div className="w-full max-w-md border-4 border-blue-300/70 bg-gray-800/90 rounded-lg hover:shadow-[0_0_20px_rgba(0,183,255,0.5)] duration-1000 p-6">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">
          Professional Pitch
        </h2>
        <form className="flex flex-col" onSubmit={handleResumeSubmit}>
          <h1 className="text-white font-bold text-lg">Title</h1>
          <input
            name="title"
            placeholder="ex. Software Engineer, etc."
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            value={resumeData.title}
            onChange={handleChange}
          />

          <h1 className="text-white font-bold text-lg">Jobs Title</h1>
          <input
            name="job_titles"
            placeholder="ex. Other Job Title, etc."
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            value={resumeData.job_titles}
            onChange={handleChange}
          />

          <h1 className="text-white font-bold text-lg">Description</h1>
          <input
            name="description"
            placeholder="ex. Full Stack Developer with 5 years etc."
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
            placeholder="ex. Universidad de Buenos Aires etc."
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
  job_id: PropTypes.string.isRequired,
};

export default ResumeForm;
