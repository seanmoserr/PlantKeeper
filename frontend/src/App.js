import logo from './logo.svg';
import './App.css';
import { addPlants, deletePlant, getPlants, getTasks, registerUser } from './plantkeeperApi';

const exPlant = {
  name: "Rosa the Rose",
  species: "Rose"
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={(e) => getTasks("joe")}>TEST</button>
        <button onClick={(e) => registerUser("newUser")}>Register user, 'new user'</button>
        <button onClick={(e) => getPlants("joe")}>Get Joe's Plants</button>
        <button onClick={(e) => addPlants("joe", exPlant)}>Add Salvia Divinorum to Joe's Plants</button>
        <button onClick={(e) => deletePlant("joe", -1)}>Delete 'Salvia Divinorum' from Joe's Plants</button>
      </header>
    </div>
  );
}

export default App;
