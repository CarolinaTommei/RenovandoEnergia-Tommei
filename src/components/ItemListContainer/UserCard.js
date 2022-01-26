
import "./UserCard.css";

function UserCard({
 name, info, tipos
  }) {
    return (
      
        <div className="card">
          <p>Nombre: {name}</p>
          <p>Información: {info}</p>
          <p>Variedades: {tipos}</p>

          
          
          
        </div>
        
        
      );
      
  }

  export default UserCard;