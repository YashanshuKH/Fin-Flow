import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import styles from "./Insurance.module.css";


const Insurance = () => {
    return(
      <div className={styles.main}>
        <Navbar />
        <div>
          <Sidebar />
        </div>
         <h2>My Insurance Policies</h2>
         <br /><br /> <br />
           <section id="life">
            <div className={styles.container}>
            <h3>Life Insurance</h3>
            <p>Policy Number: <span> LIC123456789</span></p>
            <p>Status: <span> Active</span></p>
            <p>Premium Amount: <span>₹10,000/year</span></p>
            <p>Next Due Date: <span> 15-11-2025</span></p>
            <p>Coverage: <span> ₹1,00,00,000</span></p>
            <button>View Details</button>
         </div>
           </section>
            <section id="medical">
            <div className={styles.container}>
            <h3>Health Insurance</h3>
            <p>Policy Number: <span>HIC2024-567890</span></p>
            <p>Status: <span> Active</span></p>
            <p>Premium Amount: <span>₹5,000/month</span></p>
            <p>Next Due Date: <span> 27-11-2025</span></p>
            <p>Coverage: <span> ₹10,00,000</span></p>
            <button>View Details</button>
         </div>
            </section>
         <section id="vehicle">
         <div className={styles.container}>
            <h3>Vehicle Insurance</h3>
            <p>Policy Number: <span>CICAR-987-UVW</span></p>
            <p>Status: <span> Active</span></p>
            <p>Premium Amount: <span>₹1,500/month</span></p>
            <p>Next Due Date: <span> 04-12-2025</span></p>
            <p>Coverage: <span> ₹5,00,000</span></p>
            <button>View Details</button>
         </div>
         </section>
      </div>
    );
};

export default Insurance;
