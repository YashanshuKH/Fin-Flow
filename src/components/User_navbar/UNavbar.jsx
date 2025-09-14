import styles from "./UNavbar.module.css"; // custom CSS Module
import { Link } from "react-router-dom";
import { FaUserCircle,
    FaCog
 } from 'react-icons/fa';
 import { FiLogOut } from 'react-icons/fi';

const UNavbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navbar}`}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-white" to="/">
          Fin Flow
        </Link>



        <div className="collapse navbar-collapse" id="navbarSupportedContent">

           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
               <Link className="nav-link" to="/help">
                Help
              </Link>
            </li>
<li className="nav-item dropdown">
  <a
    className="nav-link dropdown-toggle"
    href="#"
    id="profileDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    <i className="bi bi-person-circle"> <FaUserCircle /></i> {/* Bootstrap icon or your own */}
  </a>
  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
    <li className="dropdown-item-text">
      <strong>ID:</strong> user123
    </li>
    <li><Link className="dropdown-item" to="/settings"><FaCog className="icon" /> Settings</Link></li>
    <li><Link className="dropdown-item text-danger" to="/logout"><FiLogOut /> Log Out</Link></li>
    </ul>
</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default UNavbar;