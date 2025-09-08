import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 border-top w-100">
  
  <div class="d-flex align-items-center">
    <a href="/" class="me-2 text-body-secondary text-decoration-none lh-1" aria-label="Bootstrap">
      <svg class="bi" width="30" height="24" aria-hidden="true">
        <use xlink:href="#bootstrap"></use>
      </svg>
    </a>
    <span class="text-body-secondary">© 2025 Company, Inc</span>
  </div>

  <ul class="nav justify-content-end list-unstyled d-flex">
    <li class="ms-3">
      <a class={`text-body-secondary ${styles.icon}`} href="#" aria-label="Instagram">
        <FaInstagram />
      </a>
    </li>
    <li class="ms-3">
      <a class={`text-body-secondary ${styles.icon}`} href="#" aria-label="Facebook">
        <AiOutlineFacebook />
      </a>
    </li>
  </ul>
</footer>

  );
};

export default Footer;
