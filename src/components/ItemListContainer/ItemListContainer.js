import ItemCount from "./ItemCount";
import UserCard from "./UserCard";



const ItemListContainer = ({name,info,tipos}) => {
return (
  <div className="item">
  <UserCard
 
    name="Sahumerio"
    info="El objetivo de los sahumerios es repeler los espíritus malignos, eliminar la energía negativa y atraer la positiva."
    tipos="Vainilla, Coco, Sandalo, Jazmin"
  >
    
  </UserCard>
  <UserCard
   name="Piedras Energéticas"
   info="Las piedras energéticas se pueden utilizar como método de curación porque poseen vibraciones que se activan en el cuerpo y generan equilibrio en todos los niveles y sirven de apoyo para la mejoría"
   tipos="Agata, Ojo de Tigre, Turmalina, Amatista"
  >
    
  </UserCard>
  <UserCard
    name="Aceites"
    info="Los aceites son una saludable opción para purificar los espacios y devolver la armonía a los ambientes.  En la antigüedad se usaban diferentes fragancias para agradar a los dioses, purificar las casas, alejar influencias negativas y despertar estados de conciencia que permanecen dormidos durante la urgencia de las obligaciones cotidianas."
    tipos="Eucalipto, Limón, Menta"
  >
    
  </UserCard>

  <ItemCount
  stock="5"
  initial="1"/>
  
</div>
);
};
export default ItemListContainer;