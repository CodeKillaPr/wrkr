import { useState, useEffect } from "react";
import maplibregl from "maplibre-gl"; // Importar maplibregl
import "./App.css";
import axios from "axios";
import BookinCard from "./component/booking_card";
import ResumeForm from "./component/resume_form";

function Worker() {
  const [showJobList, setShowJobList] = useState(false); // Estado para controlar la visibilidad de la lista de empleos
  const [jobs, setJobs] = useState([]); // Estado para almacenar la lista de trabajos
  const [selectedJob, setSelectedJob] = useState(null); // Estado para almacenar el trabajo seleccionado
  const token = localStorage.getItem("token");
  const [showResumeForm, setShowResumeForm] = useState(false); // Estado para controlar la visibilidad del formulario de currículum

  const handleAcceptJob = () => {
    setShowResumeForm(true); // Muestra el formulario ResumeForm
  };

  const handleResumeSubmit = () => {
    setShowResumeForm(false); // Oculta el formulario ResumeForm
    setSelectedJob(null); // Oculta el BookingCard
    setShowJobList(true); // Muestra la lista de trabajos
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("/api/jobs");
        console.log("Jobs fetched:", response.data.jobs); // Mensaje de depuración
        setJobs(response.data.jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const handleViewJob = (job) => {
    setSelectedJob(job); // Actualiza el trabajo seleccionado para mostrar BookingCard
    setShowJobList(false); // Oculta el job-card
  };

  const handleCloseBookingCard = () => {
    setSelectedJob(null); // Cierra el BookingCard
    setShowJobList(true); // Muestra el job-card
  };

  useEffect(() => {
    const menuToggle = document.getElementById("menu-toggle");
    const sideMenu = document.getElementById("side-menu");
    const mainContent = document.getElementById("main-content");
    const footerContent = document.getElementById("footer-container");

    if (menuToggle) {
      menuToggle.addEventListener("change", function () {
        if (this.checked) {
          sideMenu.classList.remove("-translate-x-full");
          mainContent.classList.add("blur");
          footerContent.classList.add("blur");
        } else {
          sideMenu.classList.add("-translate-x-full");
          footerContent.classList.remove("blur");
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
        <link
          href="https://unpkg.com/maplibre-gl@2.4.0/dist/maplibre-gl.css"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/maplibre-gl@2.4.0/dist/maplibre-gl.js" />
      </div>

      <div className="relative z-10 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
        <div>
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
          <main id="main-content" className="relative z-0">
            <div id="map" className="w-screen h-screen"></div>
            <button
              id="find-me"
              className="absolute bottom-64 right-4 hover:scale-110 border border-blue-400/30 bg-blue-500/20  hover:bg-blue-500/50 bg-opacity-50 transition-all duration-500  py-2 px-4 rounded-lg shadow-lg"
            >
              Find Me
            </button>
            {showJobList && (
              <div
                id="job-card"
                className={`absolute top-[25rem] left-1/2 transform transition-opacity duration-500 ${
                  selectedJob ? "opacity-0" : "opacity-100"
                } -translate-x-1/2 -translate-y-1/2 border border-gray-500/30 bg-gray-800/90 p-0 rounded-lg shadow-lg w-[28rem] max-h-[31rem] overflow-y-scroll scrollbar-hide`}
              >
                <header className="sticky top-[-0rem] z-10 w-full bg-white dark:bg-gray-800">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 p-5 mb-0">
                    Lista de Empleos
                  </h2>
                </header>
                <ul className="space-y-4 p-5">
                  {jobs.map((job) => (
                    <li
                      key={job.id}
                      className="bg-gray-100 hover:scale-105 duration-100 dark:bg-gray-700 p-4 rounded-md shadow-md"
                    >
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                        {job.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {job.location} · {job.time_frame}
                      </p>
                      <button
                        className="mt-2 border border-blue-400/30 bg-blue-500/20 text-white py-1 px-3 rounded  hover:bg-blue-500/40 hover:scale-105 duration-200"
                        onClick={() => handleViewJob(job)} // Manejador del botón "Ver"
                      >
                        Ver
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {selectedJob && !showResumeForm && (
              <div
                className={`fixed inset-0 bg-black bg-opacity-50 flex transition-all items-center justify-center z-50 duration-500 ${
                  selectedJob ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="gap-4 p-5 rounded-lg bg-gray-800/95 shadow-lg transition-all duration-500 hover:scale-110">
                  <BookinCard job={selectedJob} onAccept={handleAcceptJob} />
                  <button
                    className="mt-4 bg-red-500/20 border border-red-500/55 hover:bg-red-500/50 text-white py-2 px-4 rounded duration-300"
                    onClick={handleCloseBookingCard} // Cerrar el popup
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            )}

            {showResumeForm && (
              <div className="fixed inset-0 w-full h-full items-center justify-center">
                <ResumeForm token={token} onSubmit={handleResumeSubmit} />
              </div>
            )}
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
        </div>
        <footer
          id="footer-container"
          className="fixed bottom-5 left-0 right-0 z-10"
        >
          <div
            id="bottom-menu"
            className="flex items-center justify-between border border-blue-400/30 bg-blue-500/20  hover:bg-blue-500/40  bg-opacity-80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg max-w-md mx-auto transition-all duration-300 hover:shadow-xl hover:bg-opacity-90"
          >
            <button
              id="show-table"
              onClick={() => setShowJobList(!showJobList)}
              className="text-gray-600 hover:text-gray-800 mx-2 transition-all duration-200 ease-in-out hover:bg-blue-650 hover:shadow-md rounded-full p-1"
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
            <button className="text-gray-600 hover:text-gray-800 mx-2 transition-all duration-200 ease-in-out hover:bg-blue-650 hover:shadow-md rounded-full p-1">
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
            <button className="text-gray-600 hover:text-gray-800 mx-2 transition-all duration-200 ease-in-out hover:bg-blue-650 hover:shadow-md rounded-full p-1">
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
    </>
  );
}

export default Worker;
