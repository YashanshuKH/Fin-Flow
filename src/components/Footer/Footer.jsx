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
 
     <div className="d-flex align-items-center">
    <div className="me-4 text-end">
          <p className="mb-0 text-body-secondary">
            Email: <a className={styles.link} href="mailto:finflow@gmail.com">finflow@gmail.com</a>
          </p>
          <p className="mb-0 text-body-secondary">
            Contact: <a className={styles.link} href="tel"> 9865321475</a>
          </p>
        </div>

      </div>


</footer>

  );
};

export default Footer;
