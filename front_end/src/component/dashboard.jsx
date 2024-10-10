import Graph from "./graph1";
import Job from "./graph2";

function Statistics() {
  const empleadosContratados = 74;
  const empleosPublicados = [
    { id: 1, title: "Desarrollador Frontend", date: "2024-10-01" },
    { id: 2, title: "Ingeniero de Software", date: "2024-09-25" },
    { id: 3, title: "Diseñador UI/UX", date: "2024-09-20" },
    { id: 4, title: "Desarrollador Backend", date: "2024-09-15" },
    { id: 5, title: "Ingeniero DevOps", date: "2024-09-10" },
    { id: 6, title: "Desarrollador Fullstack", date: "2024-09-05" },
    { id: 7, title: "Analista de Datos", date: "2024-09-01" },
    { id: 8, title: "Ingeniero de Redes", date: "2024-08-30" },
    { id: 9, title: "Desarrollador de Videojuegos", date: "2024-08-25" },
    { id: 10, title: "Ingeniero de Sistemas", date: "2024-08-20" },
    { id: 11, title: "Desarrollador de Apps Móviles", date: "2024-08-15" },
    { id: 12, title: "Ingeniero de Seguridad Informática", date: "2024-08-10" },
    { id: 13, title: "Desarrollador de Software", date: "2024-08-05" },
    { id: 14, title: "Ingeniero de Hardware", date: "2024-08-01" },
    { id: 15, title: "Desarrollador Web", date: "2024-07-30" },
    { id: 16, title: "Ingeniero de Telecomunicaciones", date: "2024-07-25" },
    { id: 17, title: "Desarrollador de Bases de Datos", date: "2024-07-20" },
    { id: 18, title: "Ingeniero de Sistemas Embebidos", date: "2024-07-15" },
  ];

  const historialContrataciones = [
    {
      id: 1,
      nombre: "Juan Pérez",
      puesto: "Desarrollador Backend",
      fecha: "2024-09-30",
    },
    {
      id: 2,
      nombre: "Ana López",
      puesto: "Ingeniera de DevOps",
      fecha: "2024-08-22",
    },
  ];

  return (
    <>
      <div className="flex justify-center  min-h-screen bg-gray-800">
        <div
          id="statistics"
          className="container mx-auto p-10 m-0 overflow-auto"
        >
          <div className="flex flex-col items-center gap-4 hover:gap-8 md:flex-wrap md:flex-row md:justify-center">
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
              <p className="text-4xl font-semibold">
                {empleosPublicados.length}
              </p>
              <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:max-h-96">
                <Job />
              </div>
            </div>

            {/* Historial de Contrataciones */}
            <div className="group bg-green-700 shadow-md hover:scale-110 duration-300 rounded-lg p-6 relative flex flex-col items-center">
              <h2 className="text-2xl font-bold mb-2">
                Contrataciones Realizadas
              </h2>
              <p className="text-4xl font-semibold">
                {historialContrataciones.length}
              </p>
              <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:max-h-96">
                <Graph />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;
