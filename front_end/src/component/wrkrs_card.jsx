function Employs() {
  return (
    <div
      id="workers-list"
      tabIndex="0"
      className="group m-2 h-20 w-80 rounded-2xl border border-green-400/30 bg-green-500/20  hover:bg-green-500/40 duration-700 focus:h-[30rem] focus:shadow-[0_0_20px_rgba(0,183,255,0.5)] delay-0"
    >
      <div className="group relative flex gap-2 p-4">
        <img
          className="h-12 w-12 rounded-full border border-green-500/80"
          src="https://img.freepik.com/psd-premium/ilustracion-3d-avatar-o-perfil-humano_23-2150671167.jpg"
          alt="Profile"
        />
        <div className="flex-1 text-white">
          <p className="text-xl">Kelyan</p>
          <p className="text-sm">Programmer</p>
        </div>
      </div>

      <div
        id="resume"
        className="max-h-0 opacity-0 overflow-hidden transition-all duration-700 ease-in-out group-focus:opacity-100 group-focus:max-h-96 delay-25"
      >
        <div className="w-80 bg-gray-800/50 p-4 transition-all focus:shadow-[0_0_30px_rgba(0,183,255,0.5)]">
          <h2 className="text-lg font-semibold text-white/80 mb-2">Resume</h2>
          <ul className="text-xs text-white/60 space-y-2">
            <li className="pt-2">
              <h4 className="text-xs font-semibold text-white/80 mb-1">
                Software Engineer
              </h4>
              <ul className="text-xs text-white/60 space-y-1 ml-4">
                <li>Innovatech</li>
                <li>Marzo 2017 - Diciembre 2019</li>
              </ul>
            </li>

            <li className="pt-2">
              <h4 className="text-xs font-semibold text-white/80 mb-1">
                Habilidades Técnicas
              </h4>
              <ul className="text-xs text-white/60 space-y-1 ml-4">
                <li>Lenguajes: JavaScript (ES6+), Python, SQL</li>
                <li>Frameworks: React, Node.js, Express, Django</li>
                <li>Bases de Datos: PostgreSQL, MySQL, MongoDB</li>
                <li>Herramientas: Git, Docker, Jenkins, AWS</li>
              </ul>
            </li>

            <li className="pt-2">
              <h4 className="text-xs font-semibold text-white/80 mb-1">
                Educación
              </h4>
              <ul className="text-xs text-white/60 space-y-1 ml-4">
                <li>Universidad de Buenos Aires — Ingeniería en Informática</li>
              </ul>
            </li>
          </ul>

          <div className="mt-4 flex space-x-2">
            <button className="flex-1 rounded-lg border border-blue-500/30 bg-blue-500/10 px-3 py-2 text-xs font-medium text-white hover:bg-blue-500/50 duration-300">
              Contracted
            </button>
            <button className="flex-1 rounded-lg bg-blue-500/20 px-3 py-2 text-xs font-medium text-white hover:bg-blue-500/50 duration-300">
              Denied
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employs;
