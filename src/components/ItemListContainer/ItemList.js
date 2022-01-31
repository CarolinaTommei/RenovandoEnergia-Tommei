import { useEffect, useState } from "react";

import { getProductos } from "./ItemListContainer";
import Item from "./Item" ;


export function Mostrar(){
    const[products, setProducts]= useState([]);
  const [isLoading, setIsLoading]=useState(false);

  useEffect(()=> {
    setIsLoading(true)
    getProductos()
    .then((data)=>setProducts(data))
    .catch((error)=>console.error(error))
    .finally(()=> setIsLoading(false));
  },[]);
  return (
      <div>
    {isLoading ?( 
        <p>Cargando...</p>
        ):(
        products.map((product)=>{
        return <Item key={product.id} product={product}/>;
        
        }))}

</div>
        
  );
    };

  




