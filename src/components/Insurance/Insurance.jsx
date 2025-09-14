import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import UNavbar from "../User_navbar/UNavbar";
import styles from "./Insurance.module.css";

const Insurance = () => {
  // Track which section is expanded
  const [openSection, setOpenSection] = useState(null);

  // Toggle function
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className={styles.main}>
      <UNavbar />
      <div>
        <Sidebar />
      </div>

      <h2>My Insurance Policies</h2>
      <br />

      {/* Life Insurance */}
      <section id="life">
        <div className={styles.container}>
          <h3>Life Insurance</h3>
          <p>Policy Number: <span>LIC123456789</span></p>
          <p>Status: <span>Active</span></p>
          <p>Premium Amount: <span>₹10,000/year</span></p>
          <p>Next Due Date: <span>15-11-2025</span></p>
          <p>Coverage: <span>₹1,00,00,000</span></p>

          {openSection === "life" && (
            <div style={{ marginTop: "10px", color: "#333" }}>
              <hr />
              <p>Nominee: <span>Rahul Sharma</span></p>
              <p>Plan Type: <span>Term Insurance</span></p>
              <p>Policy Start Date: <span>15-11-2020</span></p>
            </div>
          )}
        

          <button onClick={() => toggleSection("life")}>
            {openSection === "life" ? "Hide Details" : "View Details"}
          </button>
        </div>

      </section>

      {/* Health Insurance */}
      <section id="medical">
        <div className={styles.container}>
          <h3>Health Insurance</h3>
          <p>Policy Number: <span>HIC2024-567890</span></p>
          <p>Status: <span>Active</span></p>
          <p>Premium Amount: <span>₹5,000/month</span></p>
          <p>Next Due Date: <span>27-11-2025</span></p>
          <p>Coverage: <span>₹10,00,000</span></p>

          {openSection === "medical" && (
            <div style={{ marginTop: "10px", color: "#333" }}>
              <hr />
              <p>Hospital Network: <span>250+ Hospitals</span></p>
              <p>Co-pay: <span>10%</span></p>
              <p>Cashless Available: <span>Yes</span></p>
            </div>
          )}
                    <button onClick={() => toggleSection("medical")}>
            {openSection === "medical" ? "Hide Details" : "View Details"}
          </button>
        </div>
      </section>

      {/* Vehicle Insurance */}
      <section id="vehicle">
        <div className={styles.container}>
          <h3>Vehicle Insurance</h3>
          <p>Policy Number: <span>CICAR-987-UVW</span></p>
          <p>Status: <span>Active</span></p>
          <p>Premium Amount: <span>₹1,500/month</span></p>
          <p>Next Due Date: <span>04-12-2025</span></p>
          <p>Coverage: <span>₹5,00,000</span></p>

          {openSection === "vehicle" && (
            <div style={{ marginTop: "10px", color: "#333" }}>
              <hr />
              <p>Vehicle Type: <span>Car</span></p>
              <p>Model: <span>Hyundai i20</span></p>
              <p>Policy Start Date: <span>04-12-2022</span></p>
            </div>
          )}

          <button onClick={() => toggleSection("vehicle")}>
            {openSection === "vehicle" ? "Hide Details" : "View Details"}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Insurance;