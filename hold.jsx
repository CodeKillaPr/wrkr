<div
  id="job-card"
  className="absolute top-[25rem] left-1/2 transform transition-opacity duration-500 -translate-x-1/2 -translate-y-1/2 dark:bg-gray-800 p-0 rounded-lg shadow-lg w-[23rem] max-h-full overflow-y-scroll scrollbar-hide"
>
  <header className="sticky top-[-0rem] z-10 w-full bg-white dark:bg-gray-800">
    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 p-5 mb-0">
      Lista de Empleados
    </h2>
  </header>
  <ul className="flex space-y-4 p-4 hover:scale-105 duration-300">
    <Employs />
  </ul>
</div>;
