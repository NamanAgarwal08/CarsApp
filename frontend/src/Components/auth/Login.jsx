import React, { useRef } from 'react'
import styles from "./Login.module.css";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef=useRef();
    const passRef=useRef();
    let navigate=useNavigate();

    const loginhandler=async(e)=>{
        e.preventDefault();
        const email=emailRef.current.value;
        const password=passRef.current.value;
        try{
           let res= await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`,{email,password});
           const token = res.data.token;
          //  console.log(token);
           if(token){
            localStorage.setItem('token',token);
            navigate('/');
           }else{
            console.log("Token is Not Generated");
           }
           navigate('/');
        }catch(e){
            console.log("Cannot Login");
        }
    }
  return (
    <form className={styles['new-login-form']} onSubmit={loginhandler}>
    <div>
      <label htmlFor='email'>Email:</label>
      <input type="text" id='email' ref={emailRef} placeholder="Enter Email"/>
    </div>
    <div>
        <label htmlFor='password'>Password:</label>
        <input type="text" id='password'  ref={passRef} placeholder="Enter Password"/>
    </div>
      <button>Login</button>
      <br />
      <br />
    <p>Not registerd yet!!! <Link to='/register'>Register</Link></p>
  </form>
  )
}

export default Login
