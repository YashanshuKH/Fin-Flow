import { IoPersonSharp } from "react-icons/io5";
import { CiMobile1 } from "react-icons/ci";
import { FaRegAddressCard, FaAddressBook, FaCity } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { CgCalendarDates, CgPassword } from "react-icons/cg";
import { TbMapPinCode, TbBuildingEstate, TbLockPassword } from "react-icons/tb";
import Navbar from "../Navbar/Navbar";

import { useState } from "react"; 
import axios from "axios"; 

import styles from "./Signup.module.css";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { LoginContext } from "../../../context/Logincontext";

const Signup = () => {
  const navigate = useNavigate();
  const { url } = useContext(LoginContext);
  const [data, setdata] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    mobileno: "",
    email: "",
    dob: "",
    pannumber: "",
    aadhaarnumber: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
    password: "",
    confirmpassword:""
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
    let newUrl = url + "/api/user/signup";
    try {
      const response = await axios.post(newUrl, data);
      console.log("arrived");
      if (response.data.success) {
        navigate("/login");
      }
    } catch (error) {
      if (error.response?.data?.errors) {
    console.error("Validation errors:", error.response.data.errors);
    alert(
      error.response.data.errors
        .map((err) => err.msg)
        .join("\n")
    );
  } else {
    alert(error.response?.data?.message || "Signup failed");
  }
    }
  };
  return (
    <div className={styles.body}>
      <Navbar />
      <h2 className={styles.title}>Sign Up</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="firstname">
              <IoPersonSharp /> First Name:
            </label>
            <input
              type="text"
              name="firstname"
              value={data.firstname}
              onChange={onChangeHandler}
              placeholder="First Name"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="middlename">
              <IoPersonSharp /> Middle Name:
            </label>
            <input
              type="text"
              name="middlename"
              value={data.middlename}
              onChange={onChangeHandler}
              placeholder="Middle Name"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastname">
              <IoPersonSharp /> Last Name:
            </label>
            <input
              type="text"
              name="lastname"
              value={data.lastname}
              onChange={onChangeHandler}
              placeholder="Last Name"
              required
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="mobileno">
            <CiMobile1 /> Mobile:
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
          <label htmlFor="email">
            <MdAlternateEmail /> Email:
          </label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            placeholder="Email"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="dob">
            <CgCalendarDates /> Date of Birth:
          </label>
          <input
            type="date"
            name="dob"
            value={data.dob}
            onChange={onChangeHandler}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="pannumber">
            <FaRegAddressCard /> PAN:
          </label>
          <input
            type="text"
            name="pannumber"
            placeholder="PAN Number"
            value={data.pannumber}
            onChange={onChangeHandler}
            maxLength={10}
pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"

            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="aadhaarnumber">
            <FaRegAddressCard /> Aadhaar:
          </label>
          <input
            type="text"
            name="aadhaarnumber"
            placeholder="Aadhaar Number"
            value={data.aadhaarnumber}
            onChange={onChangeHandler}
            maxLength={12}
            inputMode="numeric"
            pattern="\d{12}"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="address">
            <FaAddressBook /> Address:
          </label>
          <input
            type="text"
            name="address"
            value={data.address}
            onChange={onChangeHandler}
            placeholder="Address"
            required
          />
        </div>

        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="pincode">
              <TbMapPinCode /> Pincode:
            </label>
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={data.pincode}
              onChange={onChangeHandler}
              maxLength={6}
              inputMode="numeric"
              pattern="\d{6}"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="city">
              <FaCity /> City:
            </label>
            <input
              type="text"
              name="city"
              value={data.city}
              onChange={onChangeHandler}
              placeholder="City"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="state">
              <TbBuildingEstate /> State:
            </label>
            <input
              type="text"
              name="state"
              value={data.state}
              onChange={onChangeHandler}
              placeholder="State"
              required
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="password">
              <CgPassword /> Password:
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
          <div className={styles.formGroup}>
            <label htmlFor="confirmpassword">
              <TbLockPassword /> Confirm Password:
            </label>
            <input
              type="password"
              name="confirmpassword"
              value={data.confirmpassword}
              onChange={onChangeHandler}
              placeholder="Confirm Password"
              required
            />
          </div>
        </div>

        <button className={styles.submitBtn}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
