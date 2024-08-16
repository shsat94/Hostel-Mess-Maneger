import React from 'react'
import Navbar from './Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import StudentProfile from './StudentProfile';
import StudentHomePage from './StudentHomePage';



export default function Student() {
  return (
    <>
   <Router>
      <Navbar />
      <Routes>
        <Route exact path='/home' element={<StudentHomePage/>} ></Route>
        <Route exact path='/studentprofile' element={<StudentProfile/>} ></Route>
      </Routes>
    </Router>
    </>
  )
}