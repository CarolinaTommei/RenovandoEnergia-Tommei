import "./ItemStyle.css";

import ItemCount from "./ItemCount";

const Item = ({product}) => {
 

    return(
   
        <div className="card">
          <img src={product.img} alt={product.name} className="imgProduct"/>
          <p>Nombre: {product.name}</p>
          <p>Información: {product.info}</p>
          <p>Variedades: {product.tipos}</p>
          <p>Precio: {product.precio}</p> 
          
          <button> MAS INFO </button>
          <ItemCount
      stock="5"
      initial="1"/>
    


        </div>
        
        
        
   
    );
};
export default Item;