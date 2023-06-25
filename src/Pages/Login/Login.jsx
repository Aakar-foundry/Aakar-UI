import React, { useState } from "react";
import classesLogin from "./LoginStyle.module.css";
import AakarImage from "./images/Aakar-logo.gif";
import { USER } from "../../Utils/Constant";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveAuth } from "../../Reducer/authSlice";

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [loginDetails, SetLoginDetails] = useState({
    userName: "",
    password: "",
  });
  const { isAuthenticated, userRole } = useSelector(
    (state) => state.authDetails
  );
  const handleOnchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "username") {
      SetLoginDetails((pre) => ({
        ...pre,
        userName: value,
      }));
    } else {
      SetLoginDetails((pre) => ({
        ...pre,
        password: value,
      }));
    }
  };
  const handleOnRemember = () => {
    setIsChecked(!isChecked);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async () => {
    try {
        console.log("HEllo")
      dispatch(
        saveAuth({
          isAuthenticated: true,
          userRole: USER,
          token: "Token",
        })
      );
      sessionStorage.setItem("userName", loginDetails.userName);
      console.log("AKSH");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {isAuthenticated === true ? (
        navigate("/base/home")
      ) : (
        <div>
          <div className={classesLogin.form}>
            <div className={classesLogin.imgcontainer}>
              <img
                src={AakarImage}
                alt="Avatar"
                className={classesLogin.avatar}
              />
            </div>

            <div className={classesLogin.container}>
              <label htmlFor="uname">
                <b>Domain Email</b>
              </label>
              <input
                type="text"
                placeholder="Enter Domain Email"
                name="username"
                onChange={handleOnchange}
                required
              />

              <label htmlFor="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                onChange={handleOnchange}
                required
              />

              <button onClick={handleLogin}>Login</button>

              <label>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleOnRemember}
                  name="remember"
                />{" "}
                Remember me
              </label>
            </div>

            <div
              className={classesLogin.container}
              style={{ backgroundColor: "#f1f1f1" }}
            >
              <button type="button" className={classesLogin.cancelbtn}>
                Cancel
              </button>
              <span className={classesLogin.psw}>
                Forgot <a href="">password?</a>
              </span>
            </div>
          </div>
          <button className={classesLogin.signup} value="Sign Up">
            Register/Sign Up
          </button>
        </div>
      )}
    </>
  );
};

export default Login;
