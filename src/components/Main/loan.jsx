import React from "react";
import "./App.css";

const loans = [
  {
    type: "Home Loan",
    bank: "HDFC Bank",
    loanNo: "HL-2023-12345",
    balance: "₹50,00,000",
    emi: "₹45,000 / month",
    due: "Dec 1, 2025",
    status: "Active",
    icon: "🏠",
  },
  {
    type: "Car Loan",
    bank: "ICICI Bank",
    loanNo: "CL-2024-67890",
    balance: "₹10,00,000",
    emi: "₹20,000 / month",
    due: "Nov 25, 2025",
    status: "Active",
    icon: "🚗",
  },
  {
    type: "Personal Loan",
    bank: "AXIS Bank",
    loanNo: "PL-2025-54321",
    balance: "₹5,00,000",
    emi: "₹15,000 / month",
    due: "Dec 10, 2025",
    status: "Active",
    icon: "💳",
  },
];

function App() {
  const handleViewDetails = (loanType) => {
    alert(`Viewing details of ${loanType}`);
  };

  return (
    <div className="container">
      <h2 className="title">My Loans</h2>
      <p className="summary">
        Active Loans: <span className="blue">{loans.length}</span> | Total
        Balance: <span className="blue">₹65,00,000</span>
      </p>

      <div className="loan-list">
        {loans.map((loan, index) => (
          <div key={index} className="loan-card">
            <div className="loan-header">
              <span className="loan-icon">{loan.icon}</span>
              <div>
                <h3 className="loan-type">{loan.type}</h3>
                <p className="bank-name">{loan.bank}</p>
              </div>
            </div>

            <p>Loan No: {loan.loanNo}</p>
            <p>
              Status: <span className="status">{loan.status} ✅</span>
            </p>
            <p>
              Balance: <span className="blue">{loan.balance}</span>
            </p>
            <p>Monthly EMI: {loan.emi}</p>
            <p>Next Due: {loan.due}</p>

            <button
              className="details-btn"
              onClick={() => handleViewDetails(loan.type)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
