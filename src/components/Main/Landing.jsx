import styles from "./Landing.module.css"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
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

      
      <h2 className= {styles.why}>Why Us</h2>
      <div id="a2" className="d-flex justify-content-around flex-wrap ">
        <div className={styles.whyusbox} id={styles.reason1}>Reason 1</div>
        <div className={styles.whyusbox} id={styles.reason2}>Reason 2</div>
        <div className={styles.whyusbox} id={styles.reason3}>Reason 3</div>
        <div className={styles.whyusbox} id={styles.reason4}>Reason 4</div>
      </div> 

      <Footer />
    </div>
  );
};

export default Main;
