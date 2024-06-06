import React, { useEffect, useRef} from 'react'
import styles from './NewCar.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const EditCar = () => {
    const params=useParams();
    let modelInputRef=useRef();
    let yearInputRef=useRef();
    let mileageInputRef=useRef();
    
    const navigate=useNavigate();

    async function fetchCar() {
        try {
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/car/${params.id}`);
            const { company, model, year, mileage } = res.data;
        } catch (error) {
            console.log("Cannot fetch car details");
        }
    }

    useEffect(()=>{
        fetchCar();
    },[])

    //Performing actual changes in Database while editing
    async function editCarHandler(e){
        e.preventDefault();
        const model=modelInputRef.current.value;
        const year=yearInputRef.current.value;
        const mileage=mileageInputRef.current.value;
        try{
          let res = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/car/${params.id}`, { model,year,mileage});
            // console.log(res);
        }
        catch(e){
            console.log("Cannot edit car details");
        }
        navigate('/');
    }
  return (
    <form onSubmit={editCarHandler}className={styles['new-car-form']}>
    <h3>Edit Car Details</h3>
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
        <input type="text" id='mileage' ref={mileageInputRef} placeholder="Car Mileage"/>
      </div>
      <button>Edit</button>
    </form>
  )
}

export default EditCar
