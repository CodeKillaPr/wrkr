import { useState, useEffect } from "react";
import maplibregl from "maplibre-gl"; // Importar maplibregl
import "./App.css";

function Worker() {
  const [showJobList, setShowJobList] = useState(false); // Estado para controlar la visibilidad de la lista de empleos

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

    const map = new maplibregl.Map({
      container: "map",
      style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
      center: [-66.1057, 18.4655],
      zoom: 12,
      attributionControl: false,
    });

    let currentMarker = null;

    const locateUser = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const userCoordinates = [longitude, latitude];
            map.flyTo({
              center: userCoordinates,
              zoom: 17,
              speed: 1.2,
              curve: 1,
            });

            if (currentMarker) {
              currentMarker.remove();
            }

            currentMarker = new maplibregl.Marker()
              .setLngLat(userCoordinates)
              .addTo(map);
          },
          (error) => {
            console.error("Error getting location: ", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    const findMeButton = document.getElementById("find-me");
    if (findMeButton) {
      findMeButton.addEventListener("click", locateUser);
    } else {
      console.error("Find Me button not found.");
    }

    return () => {
      if (menuToggle) {
        menuToggle.removeEventListener("change", function () {});
      }
      if (findMeButton) {
        findMeButton.removeEventListener("click", locateUser);
      }
    };
  }, []);

  return (
    <>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://unpkg.com/maplibre-gl@2.4.0/dist/maplibre-gl.css"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/maplibre-gl@2.4.0/dist/maplibre-gl.js" />
        <title>Document</title>
      </div>

      <div className="relative z-10 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
        <div lang="en">
          <label
            htmlFor="menu-toggle"
            id="menu"
            className="absolute top-4 left-4 z-30 cursor-pointer"
          >
            <div className="w-9 h-16 flex flex-col items-center justify-center z-50">
              <input id="menu-toggle" className="hidden peer" type="checkbox" />
              <div className="ml-6 w-[100%] h-[2px] bg-white rounded-sm transition-all duration-300 origin-left translate-y-[0.8rem] peer-checked:rotate-[-45deg]" />
              <div className="ml-6 w-[100%] h-[2px] bg-white rounded-md transition-all duration-300 origin-center peer-checked:hidden" />
              <div className="ml-6 w-[100%] h-[2px] bg-white rounded-md transition-all duration-300 origin-left -translate-y-[0.8rem] peer-checked:rotate-[45deg]" />
            </div>
          </label>

          <main id="main-content" className="relative z-20">
            <div id="map" className="w-screen h-screen"></div>
            <button
              id="find-me"
              className="absolute bottom-64 right-4 hover:scale-110  bg-blue-500 bg-opacity-50 transition-all duration-500 hover:bg-blue-500 dark:hover:bg-blue-500 py-2 px-4 rounded-lg shadow-lg"
            >
              Find Me
            </button>
            {showJobList && (
              <div
                id="job-card"
                className="absolute top-1/2 left-1/2 transform hover:scale-110  duration-500 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96"
              >
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  Lista de Empleos
                </h2>

                <ul className="space-y-4">
                  <li className="bg-gray-100 hover:scale-110  duration-100 dark:bg-gray-700 p-4 rounded-md shadow-md">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                      Mamadora
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Frenshie · Tiempo Completo
                    </p>
                    <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
                      Aplicar
                    </button>
                  </li>

                  <li className="bg-gray-100 hover:scale-110  duration-100 dark:bg-gray-700 p-4 rounded-md shadow-md">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                      Empeñador de culo
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      calle 14 · Tiempo Completo
                    </p>
                    <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
                      Aplicar
                    </button>
                  </li>

                  <li className="bg-gray-100 hover:scale-110 duration-100 dark:bg-gray-700 p-4 rounded-md shadow-md">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                      Runner
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Lloren torres · Tiempo Completo
                    </p>
                    <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
                      Aplicar
                    </button>
                  </li>
                </ul>
              </div>
            )}
            {/* <div
              id="chat-box"
              className="absolute top-1/2 left-1/2 transform duration-500 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96"
            >
              <div
                id="booking-box"
                className="absolute top-1/2 left-1/2 transform hover:scale-110  duration-500 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96"
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Agenda
                </h3>
                <input type="month" className="text-black" />
              </div>
            </div> */}
          </main>

          <aside
            id="side-menu"
            className="fixed top-0 left-0 w-96 h-full bg-white dark:bg-gray-800 shadow-lg transform -translate-x-full transition-transform duration-300 peer-checked:translate-x-0 z-20"
          >
            <img
              className="mt-16 ml-28 w-36 h-36 hover:scale-110 duration-300 rounded-full border-2 border-solid border-gray-400"
              src="https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728000000&semt=ais_hybrid"
              alt="Bordered avatar"
            />
            <ul className="p-2 mt-12">
              <li className="mb-8">
                <a
                  href="#"
                  className="block py-2 px-4 text-2xl transition-all duration-500 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Profile
                </a>
              </li>
              <li className="mb-8">
                <a
                  href="#"
                  className="block py-2 px-4 text-2xl transition-all duration-500 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Wallet
                </a>
              </li>
              <li className="mb-8">
                <a
                  href="#"
                  className="block py-2 px-4 text-2xl transition-all duration-500 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Listing
                </a>
              </li>
              <li className="mb-8">
                <a
                  href="#"
                  className="block py-2 px-4 text-2xl transition-all duration-500 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Setting
                </a>
              </li>
            </ul>
          </aside>

          <footer className="fixed bottom-5 left-0 right-0 z-30">
            <div
              id="bottom-menu"
              className="flex items-center justify-between bg-blue-500 bg-opacity-80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg max-w-md mx-auto transition-all duration-300 hover:shadow-xl hover:bg-opacity-90"
            >
              <button
                id="show-table"
                onClick={() => setShowJobList(!showJobList)}
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
                    d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z"
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
                    d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M8.023 17.215c.033-.03.066-.062.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Worker;
