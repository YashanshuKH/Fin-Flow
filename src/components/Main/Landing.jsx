import styles from "./Landing.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
// import Dashboard from "../Dashboard/dashboard";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Individual from "../Graphs/Individual";

const Main = () => {
  return (
    <div>
      <Navbar />
      {/* Offcanvas */}

      <div className={`text-center p-5 ${styles.banner}`}>
        <h1 className={styles.message}>Welcome to Fin Flow</h1>
        <h1 className={styles.text}>Finance on your fingertips</h1>
        <button className={styles.get_started}>
          <Link to="login">
            Get Started <MdOutlineKeyboardArrowRight className={styles.arrow} />
          </Link>
        </button>
      </div>

      <section id="about-us">
        <h2 className={styles.why}>Why Us</h2>
        <div id="a2" className="d-flex justify-content-around flex-wrap ">
          <div className={styles.whyusbox} id={styles.reason1}><span className={styles.userexp}>
            🔒 Security & Privacy <br />
            <br />
            Bank-level security: End-to-end encryption (AES-256, TLS/HTTPS). No
            unauthorized sharing: Data is never sold to third parties.
            Regulatory compliance: Following RBI, GDPR, or other applicable
            standards.</span>
          </div>
          <div className={styles.whyusbox} id={styles.reason2}><span className={styles.userexp}>
            🛡 Credibility <br />
            <br />
            Partnerships: Integration with trusted APIs (banks, UPI, account
            aggregators). Audits & certifications: Security audits, ISO/PCI DSS
            compliance (if applicable). Team expertise: Experienced developers &
            financial domain knowledge.</span>
          </div>
          <div className={styles.whyusbox} id={styles.reason3}><span className={styles.userexp}>
            🌟 User Experience <br />
            <br />
            Transparency in financial insights: No misleading information.
            Reliable performance: Fast, stable, and bug-free application.
            Responsive support: 24/7 customer help and quick issue resolution.
            </span>
          </div>
          <div className={styles.whyusbox} id={styles.reason4}><span className={styles.userexp}>
            ✅ Transparency <br />
            <br />
            Clear policies: Simple terms of use & privacy policy, no hidden
            charges. Open communication: Notify users about how data is used and
            stored. User control: They can delete their data anytime.</span>
          </div>
        </div>
      </section>

      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default Main;
