import bolacristal from '../../bolacristal.png';
import CartWidget from '../CartWidget/CartWidget';


import './NavBar.css';
function NavBar(){
    return( 
    <div className='Barra-menu'>

        <div className='Nav-logo'>
            <img src={bolacristal} className="logo" alt="logo" />
            <h1>Renovando Energía</h1>

        </div>
        <div className='Nav-seleccion'>
        <nav>
            <ul>
                <li>Inicio</li>
                <li>Sahumerio</li>
                <li>Piedras</li>
                <li>Aceites</li>
            </ul>
        </nav>
        <CartWidget/>
        </div>
        
    </div>
    );
    

}


export default NavBar;