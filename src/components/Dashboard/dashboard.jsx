import styles from "./dashboard.module.css";
import Sidebar from "../Sidebar/Sidebar";
import UNavbar from "../User_navbar/UNavbar";
import Expenses from "../Graphs/Expenses";
import Individual from "../Graphs/Individual";
import Cashflow from "../Graphs/Cashflow";


const dashboard = () => {
  return (
    <div className={styles.main}>
      <UNavbar />
      <div>
        <Sidebar />
      </div>
      <div className={styles.dashboard}>
        <div className={styles.dashboardheader}>
          <h3>Dashboard</h3>
        </div>
        <div className={styles.dashboard0}>
          <div className={styles.dashboard1}>
            <div className={` ${styles.bankacc} ${styles.overall}`}>
              <h5>Bank Accounts</h5>
              <span className={styles.bank}>1. HDFC Bank:   <span>******3457</span></span><br />
              <span className={styles.bank}>2. SBI Bank:   <span>******2463</span></span>
            </div>
            <div className={` ${styles.loans} ${styles.overall}`}>
              <h5>Loans and EMIs</h5>
              <div>
                <span className={styles.bank}>1. HDFC Home Loan</span><br />
              </div>
              <div>
                <span className={styles.bank}>2. Car EMIs  </span>
              </div>
            </div>
            <div className={` ${styles.insurance} ${styles.overall}`}>
              <h5>Insurance</h5>
              <div>
                <span className={styles.bank}>1. Life Insurance : <span>7th Oct</span></span><br />
              </div>
              <div>
                <span className={styles.bank}>2. Vehicle Insurance: 30th Sep</span>
              </div>
            </div>
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
              <h5>Mutual Funds</h5>
              <div>
                <span className={styles.bank}>1. Equity Fund  : <span>12%</span></span><br />
                <span className={styles.bank}>2. Gapont Fund: <span>3%</span></span><br />
                
              </div>
            </div>
            <div className={` ${styles.equity} ${styles.overall}`}>
              <h5>Equity Shares</h5>
              <div>
                <span className={styles.bank}>1.Tata Motors : <span>₹2,34,000</span></span><br />
                <span className={styles.bank}>2.Reliance : <span>₹1,20,000</span></span><br />
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
