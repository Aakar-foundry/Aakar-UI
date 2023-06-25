import React, { useState } from "react";
import classes from "./RegisterStyle.module.css";
import AakarImage from "./images/Aakar-logo.gif";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(firstname);
    console.log(lastname);
    console.log(email);
    console.log(password);
    console.log(chpassword);
  };
  const navigate = useNavigate();
  const cancelHandler = ()=>{
    setChpassword('');
    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
  }

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [chpassword, setChpassword] = useState("");
  return (
    <div className={classes.top}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.imgcontainer}>
          <img src={AakarImage} alt="Avatar" className={classes.avatar} />
        </div>

        <div className={classes.container}>
          <label htmlFor="firstname">
            <b>FirstName</b>
          </label>
          <input
            type="text"
            placeholder="Enter FirstName"
            name="firstname"
            value={firstname}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            required
          />
          <label htmlFor="lastname">
            <b>LastName</b>
          </label>
          <input
            type="text"
            placeholder="Enter LastName"
            name="lastname"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            value={lastname}
            required
          />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            name="email"
            required
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter Password"
            name="psw"
            value={password}
            required
          />
          <label htmlFor="conpsw">
            <b>Confirm Password</b>
          </label>
          <input
            type="password"
            onChange={(e) => {
              setChpassword(e.target.value);
            }}
            placeholder="Confirm Password"
            name="conpsw"
            value={chpassword}
            required
          />
        </div>

        <div
          className={classes.container}
          style={{ backgroundColor: "#f1f1f1" }}
        >
          <a>
            <button className={classes.signup} 
            value="Sign Up">
              Register/Sign Up
            </button>
          </a>
          <a>
            <button type="button"
            onClick={()=>navigate("/login")}
             className={classes.signin} >
              Sign In
            </button>
          </a>
        </div>
      </form>
    </div>
  );
};

export default Register;
