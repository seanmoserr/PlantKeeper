import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Loginpage from './components/Loginpage';
import './components/Loginpage.css'
import { addPlants, checkUser, deletePlant, getPlants, getTasks, registerUser } from './plantkeeperApi';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TestComp from './components/TestComp';

const exPlant = {
  name: "Rosa the Rose",
  species: "Rose"
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Loginpage />} />
            <Route path="/home/:uname" element={<TestComp />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
