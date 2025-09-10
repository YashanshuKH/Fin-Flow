import { IoPersonSharp } from "react-icons/io5";
import { CiMobile1 } from "react-icons/ci";
import { CgPassword } from "react-icons/cg";
import styles from "./OTP.module.css";

const OtpVerification = () => {
  return (
    <div className={styles.body}>
      <h2 className={styles.title}>Verify</h2>
      <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="mobileno">
              <CiMobile1 /> Mobile :
            </label>
            <input
              type="text"
              name="mobileno"
              placeholder="Mobile Number"
              maxLength={10}
              inputMode="numeric"
              pattern="\d{10}"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="otp">
               OTP :
            </label>
            <input
              type="text"
              name="otp"
              placeholder="Enter 6 digit OTP"
              inputMode="numeric"
              pattern="\d{6}"
              required
            />
          </div>
        
        <button type="submit" className={styles.submitBtn}>
          Verify OTP
        </button>
        <center className={styles.not}>Didn't receive OTP ? <Link className={styles.signup} to="/login"/>RESEND</center>
      </form>
      
    </div>
  );
};

export default OtpVerification;
