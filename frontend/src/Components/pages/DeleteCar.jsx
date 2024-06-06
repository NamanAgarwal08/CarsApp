import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Car from '../Car/Car';
import { useNavigate, useParams } from 'react-router-dom';

function DeleteCar() {
  let[cars,setCars]=useState([]);
  const navigate=useNavigate();
  const params=useParams();
  async function deleteCar(){
    let res=await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/delete/${params.id}`);
    setCars(res.data);
  }

  useEffect(()=>{
    deleteCar();
    navigate('/');
  },[]);

  return (
    <div>
      <h2 style={{marginLeft:'45%'}}>All Quotes</h2>
      <ul>
        {
          cars.map((car,index)=>{
            return <Car key={car._id} company={car.company} model={car.model} year={car.year} mileage={car.mileage} id={car._id}/>
          })
        }
      </ul>
    </div>
  )
}

export default DeleteCar