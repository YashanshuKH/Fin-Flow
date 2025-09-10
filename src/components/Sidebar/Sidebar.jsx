import styles from "./Sidebar.module.css";
import {
  FaHome,
  FaExchangeAlt,
  FaChartPie,
  FaCog,
  FaMoneyCheck,
  FaFileInvoice,
  FaShieldAlt,
  FaChartBar
} from "react-icons/fa";

const Sidebar=()=> {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>Dashboard</div>

      <ul className={styles.sidebar_menu}>
        <li className="active"><FaHome className="icon" /><span>Dashboard</span></li>
        <li><FaExchangeAlt className="icon" /><span>Transactions</span></li>
        <li><FaChartPie className="icon" /><span>Investments</span></li>
        <li><FaChartBar className="icon" /><span>Reports</span></li>
        <li><FaCog className="icon" /><span>Settings</span></li>
      </ul>

      <div className={styles.section}>
        <h4>Loans</h4>
        <ul className={styles.sidebar_menu}>
          <li><FaMoneyCheck className="icon" /><span>Loan 1</span></li>
        </ul>
      </div>

      <div className={styles.section}>
        <h4>Insurance</h4>
        <ul className={styles.sidebar_menu}>
          <li><FaFileInvoice className="icon" /><span>Home</span></li>
                    <li><FaFileInvoice className="icon" /><span>Medical</span></li>
        </ul>
      </div>

      <div className={styles.section}>
        <h4>Mutual Funds</h4>
        <ul className={styles.sidebar_menu}>
          <li><FaShieldAlt className="icon" /><span>Enquiry Fund</span></li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;