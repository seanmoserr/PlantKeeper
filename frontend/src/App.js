import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Loginpage from './components/Loginpage';
import './components/Loginpage.css'
import { addPlants, deletePlant, getPlants, getTasks, registerUser } from './plantkeeperApi';

const exPlant = {
  name: "Rosa the Rose",
  species: "Rose"
}


function App() {
  return (
    <>
    <div className='Loginpage'>
    <Loginpage />
    </div>
    </>
  );
}

export default App;
