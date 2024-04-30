import Loginpage from './components/Loginpage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TestComp from './components/TestComp';

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
