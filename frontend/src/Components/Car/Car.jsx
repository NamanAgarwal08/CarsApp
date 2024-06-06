import React from 'react'
import styles from './Car.module.css'
import { useNavigate} from 'react-router-dom'

const Car = (props) => {
  let navigate=useNavigate();

  const showCarHandler=(id)=>{
    navigate(`/cars/${id}`)
  }
  const editCarHandler=(id)=>{
    navigate(`/car/${id}/edit`)
  }

  const deleteCarHandler=(id)=>{
    navigate(`/delete/${id}`);
  }

  return (
    <li className={styles.car}>
        <span>
            <p>{props.company}</p>
            <h3>{props.model}</h3>
        </span>
        <button onClick={()=>showCarHandler(props.id)}>View Full Details</button>
        <button onClick={()=>editCarHandler(props.id)}>Edit Details</button>
        <button onClick={()=>deleteCarHandler(props.id)}>Delete</button>
    </li>
  )
}

export default Car
