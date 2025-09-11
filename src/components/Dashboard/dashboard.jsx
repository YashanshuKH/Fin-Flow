import styles from "./dashboard.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Expenses from "../Graphs/Expenses";
import Individual from "../Graphs/Individual";
import Cashflow from "../Graphs/Cashflow";

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
            <div className={` ${styles.bankacc} ${styles.overall}`}>hello</div>
            <div className={` ${styles.loans} ${styles.overall}`}></div>
            <div className={` ${styles.emi} ${styles.overall}`}></div>
            <div className={` ${styles.insurance} ${styles.overall}`}></div>
          </div>
          <div className={styles.dashboard1}>
            <div className={` ${styles.income} ${styles.overall}`}>
              <Expenses />
            </div>
            <div className={` ${styles.flow} ${styles.overall}`}>
              <Cashflow />
            </div>

          </div>
          <div className={styles.dashboard1}>
            <div className={` ${styles.expense} ${styles.overall}`}>
              <Individual />
            </div>
            <div className={` ${styles.mutual} ${styles.overall}`}>
              
            </div>
            <div className={` ${styles.equity} ${styles.overall}`}>
              
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
