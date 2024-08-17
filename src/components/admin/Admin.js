import React from 'react'
import AdminNavbar from './AdminNavbar'
import AdminHome from './AdminHome'
import AdminNotice from './AdminNotice';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

export default function Admin() {
  return (
    <>
      
      <Router>
      <AdminNavbar/>
      <Routes>
        <Route exact path='/home' element={<AdminHome/>} ></Route>
        <Route exact path='/notice' element={<AdminNotice/>} ></Route>
      </Routes>
    </Router>
    </>
  )
}
