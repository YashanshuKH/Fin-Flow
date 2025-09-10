import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  datasets: [
    {
      label: "Revenue",
      data: [300, 250, 400, 330, 500, 470, 210],
      backgroundColor: [
        "rgba(75, 192, 192, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(255, 99, 132, 0.6)",
        "rgba(153, 102, 255, 0.6)",
        "rgba(255, 159, 64, 0.6)",
      ],
      borderColor: [
        "rgba(75, 192, 192, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 2,
      borderRadius: 8, // rounded bars
      hoverBackgroundColor: "rgba(0, 0, 0, 0.8)",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      labels: {
        color: "#333",
        font: {
          size: 14,
          weight: "bold",
        },
      },
    },
    title: {
      display: true,
      text: "Cash Flow (in ₹)",
      font: {
        size: 20,
        weight: "bold",
      },
      color: "#111",
    },
    tooltip: {
      backgroundColor: "#222",
      titleColor: "#fff",
      bodyColor: "#ddd",
      padding: 10,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#444",
        font: { size: 13 },
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(200, 200, 200, 0.2)",
      },
      ticks: {
        color: "#444",
        font: { size: 13 },
      },
    },
  },
};

export default function Cashflow() {
  return <Bar data={data} options={options} />;
}
