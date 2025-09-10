import styles from "./dashboard.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Expenses from "../Graphs/Expenses"
import Individual from "../Graphs/Individual"
import Cashflow from "../Graphs/Cashflow"


const dashboard = () => {
  return (
    <div className={styles.main}>
      <Navbar />
      <div>
        <Sidebar />
      </div>
      <div className={styles.dashboard}>
        <div className={styles.dashboardheader}>
          <h3>Dashboard</h3>

        </div>
        <div className={styles.dashboard0}>
          <div className={styles.dashboard1}>
            <center className={styles.heading}>Bank accounts</center>
          </div>
          <div className={styles.dashboard1}>
            <center className={styles.heading}></center>
            <Expenses />
            <Cashflow />
          </div>
          <div className={styles.dashboard1}>
            <center className={styles.heading}>Expenses</center>
            <Individual />
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
