import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const data = {
  labels: ["Income", "Expenses"],
  datasets: [
    {
      label: "Finance Overview",
      data: [250, 150],
      backgroundColor: [
        "rgba(75, 192, 192, 0.7)", // Income
        "rgba(255, 99, 132, 0.7)", // Expenses
      ],
      borderColor: [
        "rgba(75, 192, 192, 1)",
        "rgba(255, 99, 132, 1)",
      ],
      borderWidth: 2,
      hoverOffset: 12, // pops out more on hover
    },
  ],
};

const options = {
  responsive: true,
  cutout: "70%", // makes it look like a donut (inner radius)
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        font: {
          size: 14,
          weight: "bold",
        },
        color: "#333",
      },
    },
    title: {
      display: true,
      text: "Income vs Expenses",
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
      callbacks: {
        label: function (context) {
          let label = context.label || "";
          let value = context.raw || 0;
          let total = context.dataset.data.reduce((a, b) => a + b, 0);
          let percentage = ((value / total) * 100).toFixed(1);
          return `${label}: ${value} (${percentage}%)`;
        },
      },
    },
  },
  animation: {
    animateScale: true,
    animateRotate: true,
  },
};

export default function Expenses() {
  return <Doughnut data={data} options={options} />;
}
