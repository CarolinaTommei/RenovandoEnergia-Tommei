
import Carrito from '../../Carrito.png';
import './CartWidget.css';

function CartWidget() {
    return (
<div className='Carrito'>
        <img src={Carrito} className="icono-carrito" alt='icono-carrito' />
        <p className='Numerocarrito'>4</p>

        </div>
    );
}
export default CartWidget;