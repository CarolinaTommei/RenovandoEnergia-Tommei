import './App.css';
import NavBar from './components/NavBar/NavBar';
import {MiModulo} from './MiModulo.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Mostrar } from './components/ItemListContainer/ItemList';

function App() {



  return (
    
    <div className="App">
      
      <header className="App-header">
    
        
         <NavBar/>
          
        
      
      </header>
      <MiModulo/>
      <Mostrar/>

      

    </div>
  );
}

export default App
