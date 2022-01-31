import {useState} from "react";

function ItemCount({stock, initial, onadd}){
const [counter,setCounter]= useState(1);

const sumar=()=>{
    if(counter<stock)
    {setCounter(counter+1);
    }
};

const restar=()=>{
    
    if(counter>initial){
      setCounter(counter-1)
    }
 
};
const agregar=()=>{
    
    onadd=counter;
    console.log(onadd);
    }
 



return(
    <div>
        <div>
       
        
            <button onClick={sumar}>+</button>            
            {counter}            
            <button onClick={restar}>-</button>
            <button onClick={agregar}>AGREGAR AL CARRITO</button>
        </div>
       
    </div>
    
)
};

export default ItemCount;