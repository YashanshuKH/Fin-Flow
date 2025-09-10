import styles from "./Landing.module.css"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Dashboard from "../Dashboard/dashboard"; 
import { Link } from "react-router-dom";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Main = () => {
  return (
    <div>
      <Navbar />
      {/* Offcanvas */}
       
      
      <div  className={`text-center p-5 ${styles.banner}`}>
        <h1 className={styles.message}>Welcome to Fin Flow</h1>
        <h1 className={styles.text}>Anonymous text</h1>
        <button  className= {styles.get_started}><Link to="login">
          Get Started <MdOutlineKeyboardArrowRight className={styles.arrow} />
</Link>
        </button>
      </div>
       
      <section id="about-us">
      <h2 className= {styles.why}>Why Us</h2>
      <div id="a2" className="d-flex justify-content-around flex-wrap ">
        <div className={styles.whyusbox} id={styles.reason1}>🔒 Security & Privacy <br /><br />
          Bank-level security: End-to-end encryption (AES-256, TLS/HTTPS).
          No unauthorized sharing: Data is never sold to third parties.
          Regulatory compliance: Following RBI, GDPR, or other applicable standards.
</div>
        <div className={styles.whyusbox} id={styles.reason2}>
</div>
        <div className={styles.whyusbox} id={styles.reason3}>Reason 3</div>
        <div className={styles.whyusbox} id={styles.reason4}>✅ Transparency <br /><br />
          Clear policies: Simple terms of use & privacy policy, no hidden charges.
          Open communication: Notify users about how data is used and stored.
          User control: They can delete their data anytime.</div>
      </div> 
      </section>

      <section id="contact">
        <Footer />
      </section>
      <Dashboard />
    </div>
  );
};

export default Main;
