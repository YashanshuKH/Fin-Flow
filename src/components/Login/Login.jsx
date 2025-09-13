import { IoPersonSharp } from "react-icons/io5";
import { CiMobile1 } from "react-icons/ci";
import { CgPassword } from "react-icons/cg";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useState } from "react"; 
import axios from "axios"; 

import { useNavigate } from "react-router";
import { useContext } from "react";
import { LoginContext } from "../../../context/Logincontext";
const Login = () => {
  const navigate = useNavigate();
  const { url } = useContext(LoginContext);
  const [data, setdata] = useState({
    firstname: "",
    password: "",
    mobileno: "",
  });
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setdata((prevData) => {
      const newData = { ...prevData, [name]: value };
      return newData; // return new state
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    let newUrl = url + "/api/user/login";
    try {
      const response = await axios.post(newUrl, data);
      console.log("arrived");
      if (response.data.success) {
        navigate("/dashboard");
      }
    } catch (error) {
        if (error.response?.data?.errors) {
    console.error("Validation errors:", error.response.data.errors);
    alert(
      error.response.data.errors
        .map((err) => err.msg)
        .join("\n")
    );
    }
    }
     
  };
  return (
    <div className={styles.body}>
      <Navbar />
      <h2 className={styles.title}>Log In</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="firstname">
            <IoPersonSharp /> Name :
          </label>
          <input
            type="text"
            name="firstname"
            placeholder="Name"
            value={data.name}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="mobileno">
            <CiMobile1 /> Mobile :
          </label>
          <input
            type="text"
            name="mobileno"
            placeholder="Mobile Number"
            value={data.mobileno}
            onChange={onChangeHandler}
            maxLength={10}
            inputMode="numeric"
            pattern="\d{10}"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">
            <CgPassword /> Password :
          </label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={onChangeHandler}
            placeholder="Password"
            required
          />
        </div>

        <button className={styles.submitBtn}>
          Log in
        </button>
        <center className={styles.not}>
          Don't Have an Account ?
          <Link className={styles.signup} to="/signup">
            Sign Up
          </Link>
        </center>
      </form>
    </div>
  );
};

export default Login;
