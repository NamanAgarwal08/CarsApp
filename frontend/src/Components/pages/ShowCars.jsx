import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import styles from './ShowCars.module.css'

const ShowCars =() => {
    const params=useParams();  //To access the value of the parameters

    //To fetch the author and text on the basis of the id I'll use the useState() hook
  let [car, setCar] = useState({
      company: "",
      model: "",
      year: "",
      mileage:"",
      createdAt:""
    })
    
    async function fetchCar(){
        let res=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/car/${params.id}`);
        let {company,model,year,mileage,createdAt}=res.data;
        // console.log(res.data);
        setCar({company,model,year,mileage,createdAt});
    }

    useEffect(()=>{
        fetchCar();
    },[])

  return (
    <div className={styles['car-container']}>
      <h6 className={styles['car-model']}>{car.model}</h6>
      <p className={styles['car-text']}><b>Company Name : </b>{car.company}</p>
      <br />
      <p className={styles['car-text']}>Year : {car.year}</p>
      <p className={styles['car-text']}>Mileage : {car.mileage} km/hr</p>
      <br />
      <br />
      <p className={styles['car-text']}><b>Details Uploaded at : </b>{car.createdAt}</p>
    </div>
  )
}

export default ShowCars
