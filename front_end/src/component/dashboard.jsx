function Dashboard() {
  const empleadosContratados = 20; // Ejemplo
  const empleosPublicados = [
    { id: 1, title: "Desarrollador Frontend", date: "2024-10-01" },
    { id: 2, title: "Ingeniero de Software", date: "2024-09-25" },
    { id: 3, title: "Diseñador UI/UX", date: "2024-09-20" },
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
    <div className="min-h-screen">
      <div id="statistics" className="container mx-auto p-4 m-10 overflow-auto">
        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-700 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-2">Empleados Contratados</h2>
            <p className="text-4xl font-semibold">{empleadosContratados}</p>
          </div>
          <div className="bg-gray-700 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-2">Empleos Publicados</h2>
            <p className="text-4xl font-semibold">{empleosPublicados.length}</p>
          </div>
          <div className="bg-gray-700 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-2">
              Historial de Contrataciones
            </h2>
            <p className="text-4xl font-semibold">
              {historialContrataciones.length}
            </p>
          </div>
        </div>

        {/* Lista de Publicaciones de Empleo */}
        <div className="bg-gray-700 shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Empleos Publicados</h2>
          <table className="min-w-full bg-gray-700">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-900">Puesto</th>
                <th className="py-2 px-4 bg-gray-900">Fecha de Publicación</th>
              </tr>
            </thead>
            <tbody>
              {empleosPublicados.map((empleo) => (
                <tr key={empleo.id}>
                  <td className="border px-4 py-2">{empleo.title}</td>
                  <td className="border px-4 py-2">{empleo.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Historial de Contrataciones */}
        <div className="bg-gray-700 shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">
            Historial de Contrataciones
          </h2>
          <table className="min-w-full bg-gray-700">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-900">Nombre</th>
                <th className="py-2 px-4 bg-gray-900">Puesto</th>
                <th className="py-2 px-4 bg-gray-900">Fecha de Contratación</th>
              </tr>
            </thead>
            <tbody>
              {historialContrataciones.map((historial) => (
                <tr key={historial.id}>
                  <td className="border px-4 py-2">{historial.nombre}</td>
                  <td className="border px-4 py-2">{historial.puesto}</td>
                  <td className="border px-4 py-2">{historial.fecha}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
