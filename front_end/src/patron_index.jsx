import { useEffect, useState } from "react";
import Statistics from "./component/dashboard";
import "./App.css";
import Button from "./component/patron_button";

function Patron() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
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
          <h1 className="text-2xl text-center font-bold p-9">Dashboard</h1>
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
          className={`fixed text-white top-0 left-0 w-80 sm:w-96 h-full bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 z-20 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <img
            className="mt-16 ml-28 w-36 h-36 hover:scale-110 duration-300 rounded-full border-2 border-solid border-gray-400"
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
            <Statistics />
          </main>

          <footer className="fixed bottom-5 left-0 right-0 z-0">
            <div
              id="bottom-menu"
              className="flex items-center justify-center  bg-opacity-80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg max-w-14 mx-auto transition-all duration-300 hover:shadow-xl hover:bg-opacity-90"
            >
              <Button />
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Patron;
