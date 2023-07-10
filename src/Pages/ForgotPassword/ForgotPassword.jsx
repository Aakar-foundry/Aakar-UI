import React, { useState } from "react";
import OTPInput from "react-otp-input";
import FPclasses from "./ForgetPassword.module.css";
import AakarImage from "./images/Aakar-logo.gif";
const ForgotPassword = () => {
  const [OTP, setOTP] = useState();
  function handleChange(OTP) {
    setOTP(OTP);
  }
  function submitHandler(e) {
    e.preventDefault();
    console.log(OTP);
  }
  return (
    <>
    <div className={FPclasses.top}>
          <div className={FPclasses.form}>
          <div className={FPclasses.imgcontainer}>
              <img
                src={AakarImage}
                alt="Avatar"
                className={FPclasses.avatar}
              />
            </div>
            <div className={FPclasses.verifyDiv}>
      <div>
      
        <div className={FPclasses.container}>
          <form onSubmit={submitHandler}>
          <h1 style={{textAlign:"center"}}>Verify your E-mail ID. </h1>
          <label>Enter your Email:</label>
          <input type="email" />
          <div className={FPclasses.otpElements}>
            <div className={FPclasses.otp}>
                <label>OTP :</label>
              <OTPInput
                onChange={handleChange}
                value={OTP}
                inputStyle="inputStyle"
                numInputs={6}
                separator={<span></span>}
                renderInput={(props) => <input {...props} />}
                inputType="tel"
              />
            </div>
            <button type="submit">Verify</button>
          </div>
        </form>
      </div>
    </div>
    </div>
    </div>
    </div>
    
    </>
  );
};

export default ForgotPassword;
