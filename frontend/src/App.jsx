import React,{Fragment} from 'react'
import MainNavigation from './Components/mainNavigation/MainNavigation'
import { Routes, Route } from 'react-router-dom'

import Login from './Components/auth/Login'
import SignUp from './Components/auth/SignUp'
import AllCars from './Components/pages/AllCars'
import ShowCars from './Components/pages/ShowCars'
import EditCar from './Components/pages/EditCar'
import DeleteCar from './Components/pages/DeleteCar'
import NewCar from './Components/pages/NewCar'

function App() {
  return (
    <Fragment>
      <MainNavigation/>
      <main>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<SignUp/>}></Route>
          <Route path='/' element={<AllCars/>}></Route>
          <Route path='/new' element={<NewCar/>}></Route>
          <Route path='/cars/:id' element={<ShowCars/>}></Route>
          <Route path='/car/:id/edit' element={<EditCar/>}></Route>
          <Route path='/delete/:id' element={<DeleteCar/>}></Route>
        </Routes>
      </main>
    </Fragment>
  )
}

export default App