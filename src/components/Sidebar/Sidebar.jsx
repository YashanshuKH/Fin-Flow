import styles from "./Sidebar.module.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

import {
  FaHome,
  FaExchangeAlt,
  FaChartPie,
  FaCog,
  FaMoneyCheck,
  FaFileInvoice,
  FaShieldAlt,
  FaChartBar,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <ul className={styles.sidebar_menu}>
        <li className="active">
          <FaHome className="icon" />
          <HashLink className={styles.sidebar_link} smooth to="/dashboard">
            Dashboard
          </HashLink>
        </li>
        <li className="active">
          <FaExchangeAlt className="icon" />
          <HashLink className={styles.sidebar_link} smooth to="/transaction">
            Transaction
          </HashLink>
        </li>
        <li>
          <FaChartPie className="icon" />
          <HashLink className={styles.sidebar_link} smooth to="/investment">
            Investment
          </HashLink>
        </li>
        <li>
          <FaMoneyCheck className="icon" />
          <HashLink className={styles.sidebar_link} smooth to="/loans">
            Loans
          </HashLink>
        </li>
        <li>
          <FaFileInvoice className="icon" />
          <HashLink className={styles.sidebar_link} smooth to="/insurance">
            Insurance
          </HashLink>
        </li>
        <li>
          <FaShieldAlt className="icon" />
          <HashLink className={styles.sidebar_link} smooth to="/mutualfunds">
            Mutual Funds
          </HashLink>
        </li>
        <li>
          <FaChartPie className="icon" />
          <HashLink className={styles.sidebar_link} smooth to="/equityshares">
            Equity Shares
          </HashLink>
        </li>
    <hr />
        <div>
        <li>
          <FaChartBar className="icon" />
          <span>Reports</span>
        </li>
        <li>
          <FaCog className="icon" />
          <span>Settings</span>
        </li>
        </div>
      </ul>
    </aside>
  );
};

export default Sidebar;
