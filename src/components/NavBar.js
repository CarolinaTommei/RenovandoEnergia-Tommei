import bolacristal from '../bolacristal.png';

import './NavBar.css';
function NavBar(){
    return( 
    <div className='Barra-menu'>

        <div className='Nav-logo'>
            <img src={bolacristal} className="logo" alt="logo" />
            <h1>Renovando Energía</h1>

        </div>
        
        <nav>
            <ul>
                <li>Inicio</li>
                <li>Sahumerio</li>
                <li>Piedras</li>
                <li>Aceites</li>
            </ul>
        </nav>
    </div>
    );
    

}


export default NavBar;