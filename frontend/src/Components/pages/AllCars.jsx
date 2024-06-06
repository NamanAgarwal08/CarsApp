import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Car from '../Car/Car';
import { useNavigate } from 'react-router-dom';

function AllCars() {
  let [cars, setCars] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      getCars();
    }
  }, [token, navigate]);

  async function getCars() {
    try {
      let res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/allcars`);
      setCars(res.data);
    } catch (error) {
      console.error("Error fetching cars data", error);
    }
  }

  return (
    <div>
      <h2 style={{ marginLeft: '45%' }}>All Cars</h2>
      <ul>
        {
          cars.map((car) => (
            <Car
              key={car._id}
              company={car.company}
              model={car.model}
              year={car.year}
              mileage={car.mileage}
              id={car._id}
            />
          ))
        }
      </ul>
    </div>
  );
}

export default AllCars;
