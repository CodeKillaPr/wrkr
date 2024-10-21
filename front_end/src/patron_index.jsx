import { useEffect, useState } from "react";
import Statistics from "./component/dashboard";
import "./App.css";
import AllButton from "./component/patron_button2";
import WorkPost from "./component/work_post";
import Employs from "./component/wrkrs_card";

function Patron() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState(null); // Controla qué componente está visible

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleJobPostClick = () => {
    if (activeComponent === "workPost") {
      setActiveComponent(null); // Cierra el componente si ya está abierto
    } else {
      setActiveComponent("workPost"); // Abre WorkPost
    }
  };

  const handleBookingClick = () => {
    if (activeComponent === "booking") {
      setActiveComponent(null); // Cierra el componente si ya está abierto
    } else {
      setActiveComponent("booking"); // Abre WorkPost
    }
  };

  const handleStatisticClick = () => {
    if (activeComponent === "statistic") {
      setActiveComponent(null); // Cierra el componente si ya está abierto
    } else {
      setActiveComponent("statistic"); // Abre Statistics
    }
  };

  const handleBackClick = () => {
    setActiveComponent(null); // Reinicia el estado para mostrar AllButton
  };

  useEffect(() => {
    const mainContent = document.getElementById("main-content");

    if (menuOpen) {
      mainContent.classList.add("blur");
    } else {
      mainContent.classList.remove("blur");
    }
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full dark:bg-gray-800 text-white shadow-sm z-30">
        <div>
          <h1 className="text-2xl text-center font-bold p-9">Welcome</h1>
        </div>
        <label
          htmlFor="menu-toggle"
          id="menu"
          className="fixed top-4 left-4 z-30 cursor-pointer"
        >
          <div className="w-9 h-16 flex flex-col items-center justify-center">
            <input
              id="menu-toggle"
              className="hidden peer"
              type="checkbox"
              checked={menuOpen}
              onChange={handleMenuToggle}
            />
            <div className="ml-6 w-full h-[2px] bg-white rounded-sm transition-all duration-300 origin-left translate-y-[0.8rem] peer-checked:rotate-[-45deg]" />
            <div className="ml-6 w-full h-[2px] bg-white rounded-md transition-all duration-300 origin-center peer-checked:hidden" />
            <div className="ml-6 w-full h-[2px] bg-white rounded-md transition-all duration-300 origin-left -translate-y-[0.8rem] peer-checked:rotate-[45deg]" />
          </div>
        </label>
        <aside
          id="side-menu"
          className={`fixed text-white top-0 left-0 w-[21rem] sm:w-80 md:w-96 h-full bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 z-20 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <img
            className="mt-16 ml-28 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 hover:scale-110 duration-300 rounded-full border-2 border-solid border-gray-400"
            src="https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671122.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728259200&semt=ais_hybrid"
            alt="Bordered avatar"
          />
          <ul className="p-2 mt-12">
            <li className="mb-8">
              <a
                href="#"
                className="block py-2 px-4 text-lg sm:text-2xl transition-all duration-500 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                Profile
              </a>
            </li>
            <li className="mb-8">
              <a
                href="#"
                className="block py-2 px-4 text-lg sm:text-2xl transition-all duration-500 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                Wallet
              </a>
            </li>
            <li className="mb-8">
              <a
                href="#"
                className="block py-2 px-4 text-lg sm:text-2xl transition-all duration-500 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                Listing
              </a>
            </li>
            <li className="mb-8">
              <a
                href="#"
                className="block py-2 px-4 text-lg sm:text-2xl transition-all duration-500 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                Setting
              </a>
            </li>
          </ul>
        </aside>
      </header>

      <div className="flex flex-col grid-cols-1 md:grid-cols-1 z-10 h-screen dark:bg-gray-800 items-center text-gray-900">
        <div>
          <main
            id="main-content"
            className="transition-all duration-300 text-white scrollbar-hide overflow-y-scroll pt-20 h-[calc(100vh-1rem)] w-full"
          >
            {/* Statistic Section */}
            <div
              className={`transition-all text-white scrollbar-hide overflow-y-scroll pt-0 h-[calc(100vh-1rem)] w-full bg-opacity-100 duration-500 ease-in-out ${
                activeComponent === "statistic"
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <div
                className={`relative transform transition-transform duration-500 ease-in-out ${
                  activeComponent === "statistic"
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-0"
                }`}
              >
                <Statistics onBackClick={handleBackClick} />
                <button
                  onClick={handleBackClick}
                  className="fixed top-[2.5rem] bg-gradient-to-t from-indigo-700 to-blue-500 left-[1rem] z-50 rounded-md p-4 m-2 text-white hover:scale-110 duration-300 shadow-black"
                >
                  Back
                </button>
              </div>
            </div>

            {/* WorkPost Section */}
            <div
              className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-100 transition-opacity duration-500 ease-in-out ${
                activeComponent === "workPost"
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <div
                className={`relative w-[50rem] h-128 top-5 transform transition-transform duration-500 ease-in-out ${
                  activeComponent === "workPost"
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-0"
                }`}
              >
                <WorkPost onBackClick={handleBackClick} />
              </div>
            </div>

            {/* Employs Section */}
            <div
              className={`absolute top-[30rem] left-1/2 transform transition-all duration-500 -translate-x-1/2 -translate-y-1/2 border border-blue-400/30 bg-blue-500/20  hover:bg-sky-700/40 p-0 rounded-lg shadow-lg w-[23rem] max-h-full overflow-y-scroll scrollbar-hide ${
                activeComponent === "booking"
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <div
                className={`${
                  activeComponent === "booking"
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-0"
                }`}
              >
                <header className="sticky top-[-0rem] z-10 w-full bg-white dark:bg-gray-800">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 p-5 mb-0">
                    Lista de Empleados
                  </h2>
                  <button
                    onClick={handleBackClick}
                    className="absolute top-4 right-4 border border-blue-400/30 bg-blue-500/20  hover:bg-blue-500/30 text-white px-3 py-1 rounded-md"
                  >
                    Back
                  </button>
                </header>
                <ul className="flex space-y-4 p-4 hover:scale-105 duration-300">
                  <Employs />
                </ul>
              </div>
            </div>

            {/* AllButton Section */}
            <div
              className={`fixed top-[5rem] left-0 right-0 z-0 transition-opacity duration-500 ease-in-out ${
                !activeComponent
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <footer id="bottom-menu">
                <div>
                  <AllButton
                    onJobPostClick={handleJobPostClick}
                    onStatisticClick={handleStatisticClick}
                    onBookingClick={handleBookingClick}
                  />
                </div>
              </footer>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Patron;
