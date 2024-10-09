import { useEffect } from "react";
import Dashboard from "./component/dashboard";
import "./App.css";

function Patron() {
  useEffect(() => {
    const menuToggle = document.getElementById("menu-toggle");
    const sideMenu = document.getElementById("side-menu");
    const mainContent = document.getElementById("main-content");

    if (menuToggle) {
      menuToggle.addEventListener("change", function () {
        if (this.checked) {
          sideMenu.classList.remove("-translate-x-full");
          mainContent.classList.add("blur");
        } else {
          sideMenu.classList.add("-translate-x-full");
          mainContent.classList.remove("blur");
        }
      });
    } else {
      console.error("Checkbox element not found.");
    }

    return () => {
      if (menuToggle) {
        menuToggle.removeEventListener("change", () => {});
      }
    };
  }, []);

  return (
    <>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>patron</title>
      </div>

      <header className="top-0 left-0 w-full dark:bg-gray-800 text-white shadow-md z-50">
        <div>
          <h1 className="text-2xl text-center font-bold p-9">Dashboard</h1>
        </div>
        <label
          htmlFor="menu-toggle"
          id="menu"
          className="absolute top-4 left-4 z-30 cursor-pointer"
        >
          <div className="w-9 h-16 flex flex-col items-center justify-center">
            <input id="menu-toggle" className="hidden peer" type="checkbox" />
            <div className="ml-6 w-[100%] h-[2px] bg-white rounded-sm transition-all duration-300 origin-left translate-y-[0.8rem] peer-checked:rotate-[-45deg]" />
            <div className="ml-6 w-[100%] h-[2px] bg-white rounded-md transition-all duration-300 origin-center peer-checked:hidden" />
            <div className="ml-6 w-[100%] h-[2px] bg-white rounded-md transition-all duration-300 origin-left -translate-y-[0.8rem] peer-checked:rotate-[45deg]" />
          </div>
        </label>
      </header>

      <div className="relative z-10 max-h-full dark:bg-gray-800 text-gray-900 flex items-center justify-center min-h-screen">
        <div lang="en">
          <main
            id="main-content"
            className="relative transition-all duration-300 text-white flex items-center justify-center h-screen overflow-auto scrollbar-hide pt-80"
          >
            <Dashboard />
          </main>

          <aside
            id="side-menu"
            className="fixed text-white top-0 left-0 w-80 sm:w-96 h-full bg-white dark:bg-gray-800 shadow-lg transform -translate-x-full transition-transform duration-300 peer-checked:translate-x-0 z-20"
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

          <footer className="fixed bottom-5 left-0 right-0 z-0">
            <div
              id="bottom-menu"
              className="flex items-center justify-between bg-blue-500 bg-opacity-80 backdrop-blur-md rounded-full px-4 sm:px-6 py-3 shadow-lg max-w-md mx-auto transition-all duration-300 hover:shadow-xl hover:bg-opacity-90"
            >
              <button
                id="show-table"
                className="text-gray-600 hover:text-gray-800 mx-2 transition-all duration-200 ease-in-out hover:bg-blue-650 hover:shadow-md rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-gray-800"
              >
                <svg
                  className="w-[24px] h-[24px] text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-3 8a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H9Zm2 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="text-gray-600 hover:text-gray-800 mx-2 transition-all duration-200 ease-in-out hover:bg-blue-650 hover:shadow-md rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-gray-800">
                <svg
                  className="w-[24px] h-[24px] text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm8 18H9v-1h6v1Zm0-3H9v-1h6v1Zm0-3H9v-1h6v1Zm0-3H9V9h6v1Zm2-2H7V4h10v1Zm2 14H7v-1h10v1Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="text-gray-600 hover:text-gray-800 mx-2 transition-all duration-200 ease-in-out hover:bg-blue-650 hover:shadow-md rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-gray-800">
                <svg
                  className="w-[24px] h-[24px] text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4c1.8 0 3.2 0 4.5.1a2 2 0 0 1 1.3 3.5l-.7.2a7 7 0 1 0-10.5 10.4l-.8.8a2 2 0 0 1-2.3 0l-2-2a2 2 0 0 1 0-2.3l.8-.8a7 7 0 0 0 10.4-10.5l.2-.7A2 2 0 0 1 16.1 4C17.3 4 18.7 4 20 4c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2-1.3 0-2.7 0-4.1-.1a2 2 0 0 1-1.6-2.7c1.3 0 2.7 0 4.1 0h1c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1-1.3 0-2.7 0-4.1.1a2 2 0 0 1-1.3-3.5C8.8 4 7.4 4 6 4 4.9 4 4 4.9 4 6v2c0 1.1.9 2 2 2 1.3 0 2.7 0 4.1.1a2 2 0 0 1 1.6 2.7c-1.3 0-2.7 0-4.1 0a2 2 0 0 0-2-2h-1c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2 1.5 0 3 .1 4.5.1Z" />
                </svg>
              </button>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Patron;
