import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";

// Registrar los componentes de Chart.js
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

function Job() {
  const [jobCount, setJobCount] = useState(0);

  useEffect(() => {
    // Fetch job count from API
    fetch("/api/job_count")
      .then((response) => response.json())
      .then((data) => setJobCount(data.job_count))
      .catch((error) => console.error("Error fetching job count:", error));
  }, []);

  // Get current month and next 5 months
  const currentMonthIndex = new Date().getMonth();
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const months = [];
  for (let i = 0; i < 6; i++) {
    months.push(monthNames[(currentMonthIndex + i) % 12]);
  }

  // Datos del gráfico
  const data = {
    labels: months, // Use current month and next 5 months in the labels array
    datasets: [
      {
        label: "Datos de Empleos",
        data: Array(6).fill(0), // Initialize all months with 0
        fill: false,
        backgroundColor: "#3772d1",
        borderColor: "#3772d1",
      },
    ],
  };

  // Set job count for the current month
  data.datasets[0].data[0] = jobCount;

  // Opciones del gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "white", // Cambia el color del texto de la leyenda a blanco
        },
      },
      title: {
        display: true,
        text: "Gráfico Lineal de Empleos",
        color: "white",
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
      },
      y: {
        ticks: {
          color: "white", // Cambia el color del texto de las etiquetas del eje Y a blanco
        },
      },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-gray-700 rounded-lg">
      <Line data={data} options={options} />
    </div>
  );
}

export default Job;
