import bolacristal from './bolacristal.png';
import './App.css';
import {MiModulo} from './MiModulo.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bolacristal} className="App-logo" alt="logo" />
        <p>
          Renovando Energías
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Inicio
        </a>
      </header>
      <MiModulo/>
    </div>
  );
}

export default App;
