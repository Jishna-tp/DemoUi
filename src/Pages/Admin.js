import React from 'react'
import './Body.css';
import {Routes, Route } from 'react-router-dom';
import Home from './Home'
import Profile from './Profile'
import {Settings, Venue, Department} from './Settings'

const Admin = () => {
  return (
    <Routes>
        

        <Route path="/" element={<Home />} >
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Settings/venue" element={<Venue />} />
        <Route path="/Settings/Department" element={<Department />} />
        </Route>
    </Routes>
  )
}

export default Admin