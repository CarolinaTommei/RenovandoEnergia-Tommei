import sahumerio from "../../imagenes/sahumerio.jpg";
import aceites from "../../imagenes/aceites.jpg";
import piedras from "../../imagenes/piedras.jpg";
export const PRODUCTS = [
  {
        id:0,
        name:"Sahumerio",
        info:"El objetivo de los sahumerios es repeler los espíritus malignos, eliminar la energía negativa y atraer la positiva.",
        tipos:"Vainilla, Coco, Sandalo, Jazmin",
        precio:350,
        img: sahumerio,
  },
  {
    id:1,
    name:"Aceites",
    info:"Los aceites son una saludable opción para purificar los espacios y devolver la armonía a los ambientes.  En la antigüedad se usaban diferentes fragancias para agradar a los dioses, purificar las casas, alejar influencias negativas y despertar estados de conciencia que permanecen dormidos durante la urgencia de las obligaciones cotidianas.",
    tipos:"Eucalipto, Limón, Menta",
    precio:400,
    img: aceites,
},
{
  id:2,
  name:"Piedras Energéticas",
  info:"Las piedras energéticas se pueden utilizar como método de curación porque poseen vibraciones que se activan en el cuerpo y generan equilibrio en todos los niveles y sirven de apoyo para la mejoría",
  tipos:"Agata, Ojo de Tigre, Turmalina, Amatista",
  precio:500,
  img: piedras,
},
];

export function getProductos () {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve (PRODUCTS)

    },2000);

  });
};
