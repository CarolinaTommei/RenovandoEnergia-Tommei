
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {MiModulo} from './MiModulo.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {
  return (
    
    <div className="App">
      
      <header className="App-header">
    
        
         <NavBar/>
          
        
      
      </header>
      <MiModulo/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
