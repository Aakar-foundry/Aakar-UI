import React, { useState } from 'react'
import classes from './LoginStyle.module.css';
import AakarImage from './images/Aakar-logo.gif';

const Login = () => {
    const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
        <form className={classes.form} >
        <div className={classes.imgcontainer}>
            <img src={AakarImage} alt="Avatar" className={classes.avatar}/>
        </div>
        
        <div  className={classes.container}>
            <label htmlFor="uname"><b>Domain Email</b></label>
            <input type="text" placeholder="Enter Domain Email" name="email" required/>
            
            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>
            
            
            
            
            
            <button type="submit">Login</button>
            
            
            <label>
                <input type="checkbox" checked={isChecked} onChange={handleOnChange} name="remember"/> Remember me
            </label>
        </div>
        
        <div  className={classes.container} style={{backgroundColor:'#f1f1f1'}}>
            <button type="button"  className={classes.cancelbtn}>Cancel</button>
            <span  className={classes.psw}>Forgot <a href=''>password?</a></span>
        </div>
    </form>
    <a  >
        <button   className={classes.signup} value="Sign Up" >Register/Sign Up</button>
    </a>
    </div>
  )
}

export default Login