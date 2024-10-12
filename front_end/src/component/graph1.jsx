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

function Graph() {
  // Datos del gráfico
  const data = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [
      {
        label: "Datos de Contratos",
        data: [8, 10, 40, 8, 16, 12],
        fill: false,
        backgroundColor: "#3772d1",
        borderColor: "#3772d1",
      },
    ],
  };

  // Opciones del gráfico
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
        beginAtZero: true, // Asegura que comience desde 0
        min: 0, // Establecer valor mínimo en 0
        max: 100, // Valor máximo en 20
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
    <div className="w-full max-w-4xl mx-auto p-4 bg-gray-700 rounded-lg h-52">
      {/* Ajustar la altura de la gráfica */}
      <Line data={data} options={options} />
    </div>
  );
}

export default Graph;
