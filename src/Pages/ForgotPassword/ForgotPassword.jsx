import React, { useState } from "react";
import OTPInput from "react-otp-input";
import FPclasses from "./ForgetPassword.module.css";
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
        <h1 style={{textAlign:"center"}}>ForgetPassword </h1>
    <div className={FPclasses.verifyDiv}>
      <div>
        <form onSubmit={submitHandler}>
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
    </>
  );
};

export default ForgotPassword;
