import React from "react";
import "./Sidebar.css";
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

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">Dashboard</div>

      <ul className="sidebar-menu">
        <li className="active"><FaHome className="icon" /><span>Dashboard</span></li>
        <li><FaExchangeAlt className="icon" /><span>Transactions</span></li>
        <li><FaChartPie className="icon" /><span>Investments</span></li>
        <li><FaChartBar className="icon" /><span>Reports</span></li>
        <li><FaCog className="icon" /><span>Settings</span></li>
      </ul>

      <div className="section">
        <h4>Loans</h4>
        <ul className="sidebar-menu">
          <li><FaMoneyCheck className="icon" /><span>Loan 1</span></li>
        </ul>
      </div>

      <div className="section">
        <h4>Insurance</h4>
        <ul className="sidebar-menu">
          <li><FaFileInvoice className="icon" /><span>Home</span></li>
                    <li><FaFileInvoice className="icon" /><span>Medical</span></li>
        </ul>
      </div>

      <div className="section">
        <h4>Mutual Funds</h4>
        <ul className="sidebar-menu">
          <li><FaShieldAlt className="icon" /><span>Enquiry Fund</span></li>
        </ul>
      </div>
    </aside>
  );
}
