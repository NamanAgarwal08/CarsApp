import React, { Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './MainNavigation.module.css';

const MainNavigation = () => {
  const navigate=useNavigate();
  const token=localStorage.getItem("token");
  // console.log(token);

  const logouthandler=()=>{
    localStorage.removeItem("token");
    navigate('/login');
  }
  return (
    <nav className={styles.nav}>
        <h1>Cars App</h1>
        <ul>
            <li><Link to='/'>All Cars</Link></li>
            {token ? (
              <Fragment>
                <li><Link to='/new'>New Car</Link></li>
                <li><button onClick={logouthandler}>Logout</button></li>
              </Fragment>
              
            ) : (
              <li><Link to='/login'>Login</Link></li>
            )}
        </ul>
    </nav>
  )
}

export default MainNavigation
