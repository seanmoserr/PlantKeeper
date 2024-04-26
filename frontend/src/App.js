import logo from './logo.svg';
import './App.css';
import { getTasks } from './plantkeeperApi';

function App() {
  return (
    <>
    <div className='Loginpage'>
    <Loginpage />
    <button onClick={(e) => registerUser("eno", "123")}>Register User, Eno</button>
    <button onClick={(e) => registerUser("mr. jones", "321")}>Register User, mr. jones</button>
    </div>
  );
}

export default App;
