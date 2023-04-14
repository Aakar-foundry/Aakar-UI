import React, { useState } from 'react'
import classesLogin from './LoginStyle.module.css';
import AakarImage from './images/Aakar-logo.gif';

const Login = () => {
    const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
        <form className={classesLogin.form} >
        <div className={classesLogin.imgcontainer}>
            <img src={AakarImage} alt="Avatar" className={classesLogin.avatar}/>
        </div>
        
        <div  className={classesLogin.container}>
            <label htmlFor="uname"><b>Domain Email</b></label>
            <input type="text" placeholder="Enter Domain Email" name="email" required/>
            
            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>
            
            
            
            
            
            <button type="submit">Login</button>
            
            
            <label>
                <input type="checkbox" checked={isChecked} onChange={handleOnChange} name="remember"/> Remember me
            </label>
        </div>
        
        <div  className={classesLogin.container} style={{backgroundColor:'#f1f1f1'}}>
            <button type="button"  className={classesLogin.cancelbtn}>Cancel</button>
            <span  className={classesLogin.psw}>Forgot <a href=''>password?</a></span>
        </div>
    </form>
    <a  >
        <button   className={classesLogin.signup} value="Sign Up" >Register/Sign Up</button>
    </a>
    </div>
  )
}

export default Login