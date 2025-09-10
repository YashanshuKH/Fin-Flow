import styles from "./Navbar.module.css"; // custom CSS Module
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navbar}`}>
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand fw-bold text-white" to="/">
          Fin Flow
        </Link>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Left side */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-us">
                About Us
              </a>
            </li>
          </ul>

          {/* Right side */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* Use /help route if you have one, else make it <a href="#"> */}
              <Link className="nav-link" to="/help">
                Help
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-warning px-3 ms-2" to="/login">
                Log In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
