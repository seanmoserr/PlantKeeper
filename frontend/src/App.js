import Loginpage from './components/Loginpage';
import Home from './components/home'
import './components/Loginpage.css'
import './components/home.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TestComp from './components/TestComp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Loginpage />} />
            <Route path="/home/:uname" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
