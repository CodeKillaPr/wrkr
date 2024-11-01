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
import PropTypes from "prop-types";

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

const Job = ({ jobCount }) => {
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
  const months = Array.from(
    { length: 6 },
    (_, i) => monthNames[(currentMonthIndex + i) % 12]
  );

  const jobCounts = [jobCount, 10, 20, 50, 30, 15]; // Initialize with jobCount for the current month
  // Chart data
  const data = {
    labels: months,
    datasets: [
      {
        label: "Jobs Data",
        data: jobCounts, // Initialize with jobCount for the current month
        fill: false,
        backgroundColor: "#00b3ff",
        borderColor: "#00b3ff",
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Esto permite controlar mejor la altura de la gráfica
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "white",
        },
      },
      title: {
        display: true,
        text: "Jobs Line Graph",
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
        beginAtZero: true, // Asegura que comience desde 0
        min: 0, // Establecer valor mínimo en 0
        max: 50, // Valor máximo en 20
        ticks: {
          stepSize: 5, // Espaciado entre los ticks
          color: "white",
        },
      },
    },
    layout: {
      padding: {
        bottom: 10, // Añadir un poco de espacio inferior para asegurar que la gráfica no se corte
      },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-yellow-500 rounded-lg h-[16rem]">
      <Line data={data} options={options} />
    </div>
  );
};

Job.propTypes = {
  jobCount: PropTypes.number.isRequired,
};

export default Job;
