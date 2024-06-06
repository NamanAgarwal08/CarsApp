import React, { useRef} from 'react'
import styles from "./SignUp.module.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    let navigate=useNavigate();
    const firstnameRef=useRef();
    const secondnameRef=useRef();
    const emailRef=useRef();
    const passwordRef=useRef();
    const ageRef=useRef();
    const addressRef=useRef();

  const signuphandler = async (e) => {
      
        e.preventDefault();
      
        const firstname = firstnameRef.current.value;
        const secondname=secondnameRef.current.value;
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        const age=ageRef.current.value;
        const address=addressRef.current.value;
        
        
      
        try{
            let res= await axios.post(`${import.meta.env.VITE_BACKEND_URL}/register`,{firstname,secondname,email,password,age,address});
            // console.log(res);
            navigate('/login');

        }catch(e){
            console.log("Cannot Sign Up");
        }
    }

  return (
    <form onSubmit={signuphandler} className={styles['new-register-form']}>
      <div>
        <label htmlFor='firstname'>Firstname:</label>
        <input type="text" id='firstname' ref={firstnameRef} placeholder="Enter Firstname"/>
      </div>
      <div>
        <label htmlFor='secondname'>Lastname:</label>
        <input type="text" id='secondname' ref={secondnameRef} placeholder="Enter Lastname"/>
      </div>
      <div>
        <label htmlFor='email'>Email:</label>
        <input type="text" id='email' ref={emailRef} placeholder="Enter email"/>
      </div>
        <div>
            <label htmlFor='password'>Password:</label>
            <input type="text" id='password' ref={passwordRef} placeholder="Enter Password"/>
      </div>
      <div>
        <label htmlFor='age'>Age:</label>
        <input type="text" id='age' ref={ageRef} placeholder="Enter Age"/>
      </div>
      <div>
        <label htmlFor='address'>Address:</label>
        <input type="text" id='address' ref={addressRef} placeholder="Enter Address"/>
      </div>
      <button>SignUp</button>
    </form>
  )
}

export default SignUp