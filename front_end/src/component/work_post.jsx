import { useState } from "react";
import myImage from "../assets/img/avatar.png";
import { jwtDecode } from "jwt-decode"; // Importa jwt-decode
import PropTypes from "prop-types";
import { createJob } from "../assets/api"; // Importa createJob

function WorkPost({ onBackClick }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pay, setPay] = useState("");
  const [location, setLocation] = useState("");
  const [time_frame, setTimeFrame] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    // Verifica si el token existe
    if (!token) {
      console.error("No hay token disponible.");
      return;
    }

    // Decodifica el token para obtener el estado de administrador
    let isAdmin = false;

    try {
      const decodedToken = jwtDecode(token); // Decodifica el token
      isAdmin = decodedToken.is_admin; // Verifica la propiedad is_admin
    } catch (error) {
      console.error("Error decodificando el token:", error);
      return;
    }

    // Verifica si el usuario es un administrador
    if (!isAdmin) {
      console.error("No tienes permisos para publicar empleos.");
      return;
    }

    const jobData = {
      title,
      description,
      pay: parseFloat(pay), // Convertir a número
      location,
      time_frame,
    };

    try {
      const data = await createJob(jobData, token);
      console.log("Job posted successfully!", data);
      // Limpiar campos del formulario
      setTitle("");
      setDescription("");
      setPay("");
      setLocation("");
      setTimeFrame("");
    } catch (error) {
      console.error("Error posting job:", error);
      // Imprimir respuesta del servidor para más detalles
      if (error.response && error.response.data) {
        console.error("Server Response:", error.response.data);
      } else {
        console.error("Error Details:", error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
      <div className="relative xs:w-[20rem] lg:w-full max-w-md bg-gray-700 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">
          Jobs Post Form
        </h2>

        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            placeholder="Job title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-600 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 hover:scale-105"
            type="text"
            required
          />

          <textarea
            placeholder="Description"
            className="bg-gray-600 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 hover:scale-105"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <input
            placeholder="Pay rate"
            className="bg-gray-600 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 no-spinner hover:scale-105"
            type="number"
            step="0.01"
            value={pay}
            onChange={(e) => setPay(e.target.value)}
            required
          />

          <input
            placeholder="Location"
            className="bg-gray-600 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 hover:scale-105"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />

          <input
            placeholder="Time frame"
            className="bg-gray-600 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 hover:scale-105"
            type="text"
            value={time_frame}
            onChange={(e) => setTimeFrame(e.target.value)}
            required
          />

          <div className="flex items-center justify-between mt-4">
            <button
              className="mb-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150 hover:scale-105"
              type="submit"
            >
              Submit
            </button>
          </div>

          <button
            type="button"
            onClick={onBackClick}
            className="mb-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-[0.5rem] px-[1rem] w-[5.5rem] rounded-md hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150 hover:scale-105"
          >
            Back
          </button>
        </form>

        <img
          src={myImage}
          alt="3D Man Holding Laptop"
          className="absolute xs:top-[15.8rem] xs:right-[-9rem] lg:top-[10rem] lg:right-[-13rem] w-96 h-auto mt-4 rounded-lg"
        />
      </div>
    </div>
  );
}
WorkPost.propTypes = {
  onBackClick: PropTypes.func.isRequired,
};
export default WorkPost;
