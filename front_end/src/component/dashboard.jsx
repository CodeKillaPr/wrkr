import { useEffect, useState } from "react";
import Graph from "./graph1";
import Job from "./graph2";

function Statistics() {
  const [empleosPublicados, setEmpleosPublicados] = useState(0);
  const empleadosContratados = 74;
  //   const historialContrataciones = [
  //     {
  //       id: 1,
  //       nombre: "Juan Pérez",
  //       puesto: "Desarrollador Backend",
  //       fecha: "2024-09-30",
  //     },
  //     {
  //       id: 2,
  //       nombre: "Ana López",
  //       puesto: "Ingeniera de DevOps",
  //       fecha: "2024-08-22",
  //     },
  //   ];

  useEffect(() => {
    console.log("Fetching job count from API in dashboard.jsx");

    // Fetch job data from API
    fetch("/api/job_count")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.job_count !== undefined) {
          setEmpleosPublicados(data.job_count);
        }
      })
      .catch((error) => console.error("Error fetching job count:", error));
  }, []);

  return (
    <>
      <div className="flex justify-center min-h-screen bg-gray-800">
        <div
          id="statistics"
          className="container mx-auto p-10 m-0 overflow-auto"
        >
          <div className="flex flex-col items-center gap-4 hover:gap-7 md:flex-wrap md:flex-row md:justify-center duration-300">
            {/* Empleados Contratados */}
            <div className="group bg-red-500 shadow-md hover:scale-110 duration-300 rounded-lg p-6 relative flex flex-col items-center">
              <h2 className="text-2xl font-bold mb-2">Empleados Contratados</h2>
              <p className="text-4xl font-semibold">{empleadosContratados}</p>
              <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:max-h-96">
                <Graph />
              </div>
            </div>

            {/* Empleos Publicados */}
            <div className="group bg-yellow-500 shadow-md hover:scale-110 duration-300 rounded-lg p-6 relative flex flex-col items-center">
              <h2 className="text-2xl font-bold mb-2">Empleos Publicados</h2>
              <p className="text-4xl font-semibold">{empleosPublicados}</p>
              <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:max-h-96">
                {empleosPublicados !== null && (
                  <Job jobCount={empleosPublicados} />
                )}
              </div>
            </div>

            {/* Historial de Contrataciones */}
            <div className="group bg-green-700 shadow-md hover:scale-110 duration-300 rounded-lg p-6 relative flex flex-col items-center">
              <h2 className="text-2xl font-bold mb-2">
                Contrataciones Realizadas
              </h2>
              <p className="text-4xl font-semibold">
                {empleosPublicados !== null ? empleosPublicados : "Cargando..."}
              </p>
              <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:max-h-96">
                {empleosPublicados !== null && (
                  <Job jobCount={empleosPublicados} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;
