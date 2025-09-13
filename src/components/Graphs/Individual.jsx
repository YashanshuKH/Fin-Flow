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
  labels: ["Expenses"], // Single group
  datasets: [
    {
      label: "Travel",
      data: [200],
      backgroundColor: "rgba(54, 162, 235, 0.8)", // blue
    },
    {
      label: "Shopping",
      data: [180],
      backgroundColor: "rgba(75, 192, 192, 0.8)", // cyan
    },
    {
      label: "Other",
      data: [220],
      backgroundColor: "rgba(153, 102, 255, 0.8)", // purple
    },
    {
      label: "Sinout",
      data: [250],
      backgroundColor: "rgba(255, 99, 132, 0.8)", // pink/red
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "bottom", // 👈 labels under chart
      labels: {
        usePointStyle: true, // 👈 makes circular dots
        pointStyle: "circle",
        padding: 15,
      },
    },
    title: {
      display: true,
      text: "Expenses",
      align: "center",
      font: {
        size: 20,
        weight: "bold",
      },
      color: "#111",
      
    },
  },
  scales: {
    x: {
      stacked: false,
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        borderDash: [5, 5],
      },
    },
  },
};

export default function ExpensesChart() {
  return <Bar data={data} options={options} />;
}
