import React, { useRef } from 'react'
import styles from './NewCar.module.css'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function NewCar() {
  let navigate = useNavigate();
  
  let companyInputRef=useRef();
  let modelInputRef=useRef();
  let yearInputRef=useRef();
  let mileageInputRef=useRef();

  const addCarHandler=async(e)=>{
    e.preventDefault();
    const company = companyInputRef.current.value;
    const model = modelInputRef.current.value;
    const year = yearInputRef.current.value;
    const mileage = mileageInputRef.current.value;
    try {
      let res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/addcar`, {company,model,year,mileage})
      // console.log(res);
      navigate('/');
    } 
    catch (e) {
      console.log("Cannot create a new Car Info")
    }
  }
  return (
    <form onSubmit={addCarHandler} className={styles['new-car-form']}>
      <div>
        <label htmlFor='company'>Company:</label>
        <input type="text" id='company' ref={companyInputRef} placeholder="Company Name"/>
      </div>
      <div>
        <label htmlFor='model'>Model:</label>
        <input type="text" id='model' ref={modelInputRef} placeholder="Car Model"/>
      </div>
      <div>
        <label htmlFor='year'>Year:</label>
        <input type="text" id='year' ref={yearInputRef} placeholder="Year"/>
      </div>
      <div>
        <label htmlFor='mileage'>Mileage:</label>
        <input type="text" id='mileage' ref={mileageInputRef} placeholder="Car Mileage in km/hr"/>
      </div>
      <button>Add Car</button>
    </form>
  )
}

export default NewCar