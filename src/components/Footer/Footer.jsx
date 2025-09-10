import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top w-100">
  
  <div className="d-flex align-items-center">
    <Link to="/" className="me-2 text-body-secondary text-decoration-none lh-1" aria-label="Bootstrap">
      <svg className="bi" width="30" height="24" aria-hidden="true">
        <use xlink:to="#bootstrap"></use>
      </svg>
    </Link>
    <span className="text-body-secondary">© 2025 Company, Inc</span>
  </div>

  <ul className="nav justify-content-end list-unstyled d-flex">
    <li className="ms-3">
      <Link className={`text-body-secondary ${styles.icon}`} to="#" aria-label="Instagram">
        <FaInstagram />
      </Link>
    </li>
    <li className="ms-3">
      <Link className={`text-body-secondary ${styles.icon}`} to="#" aria-label="Facebook">
        <AiOutlineFacebook />
      </Link>
    </li>
  </ul>
</footer>

  );
};

export default Footer;
