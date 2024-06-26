import { useEffect } from "react";
import { useAuth } from "../../../context/auth-context";

export function Description(){  //codifica el resorte acorde a los datos presentados en la hoja de diseño

  const {originalDimensions, simulation_data,tablaToler,coef, descrip, setDescrip,grado} = useAuth();
        
  //Se convierte el numero de vueltas (v.totales: "n") a fracción en texto.
  var residuo = originalDimensions.N*8 % 8;
  var entero = (originalDimensions.N*8-residuo)/8; 
  var fraccion; 

  switch (residuo){
    case 0: fraccion = ""; break;
    case 1: fraccion = "1/8"; break;
    case 2: fraccion = "1/4"; break;
    case 3: fraccion = "3/8"; break;
    case 4: fraccion = "1/2"; break;
    case 5: fraccion = "5/8"; break;
    case 6: fraccion = "3/4"; break;
    case 7: fraccion = "7/8"; break;
  }
  var n;
  if(fraccion !=""){
    n = entero + "." + fraccion;
  }else{
    n = entero;
  }
  
     
  //Se convierte el numero de vueltas amp/red del extremo 1 ("n1") a fracción en texto.
  var residuo1 = originalDimensions.Vtas1*8 % 8;
  var entero1 = (originalDimensions.Vtas1*8-residuo1)/8; 
  var fraccion1; 
  switch (residuo1){
    case 0: fraccion1 = ""; break;
    case 1: fraccion1 = "1/8"; break;
    case 2: fraccion1 = "1/4"; break;
    case 3: fraccion1 = "3/8"; break;
    case 4: fraccion1 = "1/2"; break;
    case 5: fraccion1 = "5/8"; break;
    case 6: fraccion1 = "3/4"; break;
    case 7: fraccion1 = "7/8"; break;
  }
  var n1;
  if(fraccion1 !=""){
    if (entero1 != 0){
      n1 = entero1 + "." + fraccion1;
    } else {
      n1 = fraccion1;
    }
  }else{
    if (entero1 != 0){
      n1 = entero1;
    } else {
      n1 = "";
    }
  }
   
  //Se convierte el numero de vueltas amp/red del extremo 2 ("n2") a fracción en texto.
  var residuo2 = originalDimensions.Vtas2*8 % 8;
  var entero2 = (originalDimensions.Vtas2*8-residuo2)/8; 
  var fraccion2; 
  switch (residuo2){
    case 1: fraccion2 = "1/8"; break;
    case 2: fraccion2 = "1/4"; break;
    case 3: fraccion2 = "3/8"; break;
    case 4: fraccion2 = "1/2"; break;
    case 5: fraccion2 = "5/8"; break;
    case 6: fraccion2 = "3/4"; break;
    case 7: fraccion2 = "7/8"; break;
    }
    var n2;
  if(fraccion2 !=""){
    if (entero2 != 0){
      n2 = entero2 + "." + fraccion2;
    } else {
      n2 = fraccion2;
    }
  }else{
    if (entero2 != 0){
      n2 = entero2;
    } else {
      n2 = "";
    }
  }
   
  var mensaje;   //código de producto
  //var mensaje2;  //especifica cant. de MP al momento del diseño
  var mensaje3="";  //indica si el resorte requerirá plano o no
  var mensaje4="" ////especifica dentro de los demás mensajes si es o no progresivo
   
   
  if(originalDimensions.Dext2 != ""){
    mensaje = "Res Susp. " + simulation_data.material + " " + originalDimensions.d  + " x " + originalDimensions.Dext + " - " + originalDimensions.Dext2 + " x " + originalDimensions.L0 + " " + "(+/-" + coef.toler_L0 + ")"+ " x " + n + "\n";
  }else{
    if(originalDimensions.Dint1 != "" && originalDimensions.Dint1!=" " && originalDimensions.Dint1 != "-" && originalDimensions.Dint2 != "" && originalDimensions.Dint2!=" " && originalDimensions.Dint2 != "-"){
      mensaje = "Res Susp. " + mensaje4 + simulation_data.material + " "  + originalDimensions.d  + " x " + originalDimensions.Dext + " " + "(+/-" + tablaToler.valor + ")" + " / " + originalDimensions.Dint1 + " - " + originalDimensions.Dint2 + " x " + originalDimensions.L0 + " " + "(+/-" + coef.toler_L0 + ")" + " x " + n + "\n";
      }
    if((originalDimensions.Dint1 != "" && originalDimensions.Dint1!=" " && originalDimensions.Dint1 != "-") && (originalDimensions.Dint2 == "" || originalDimensions.Dint2==" " || originalDimensions.Dint2 == "-")){
      mensaje = "Res Susp. " + mensaje4 + simulation_data.material + " "  + originalDimensions.d  + " x " + originalDimensions.Dext + + " " + "(+/-" + tablaToler.valor + ")" + " / " + originalDimensions.Dint1 + " x " + originalDimensions.L0 + " " + "(+/-" + coef.toler_L0 + ")" +" x " + n + "\n";  
      }
    if((originalDimensions.Dint2 != "" && originalDimensions.Dint2!=" " && originalDimensions.Dint2 != "-") && (originalDimensions.Dint1 == "" || originalDimensions.Dint1==" " || originalDimensions.Dint1 == "-")){
      mensaje = "Res Susp. " + mensaje4 + simulation_data.material + " "  + originalDimensions.d  + " x " + originalDimensions.Dext + + " " + "(+/-" + tablaToler.valor + ")" + " / " + originalDimensions.Dint2 + " x " + originalDimensions.L0 + " " + "(+/-" + coef.toler_L0 + ")" +" x " + n +"\n";  
      }
    if((originalDimensions.Dint2 == "" || originalDimensions.Dint2==" " || originalDimensions.Dint2 == "-") && (originalDimensions.Dint1 == "" || originalDimensions.Dint1==" " || originalDimensions.Dint1 == "-")){
      mensaje = "Res Susp. " + mensaje4 + simulation_data.material + " "  + originalDimensions.d  + " x " + originalDimensions.Dext + + " " + "(+/-" + tablaToler.valor + ")" + " x " + originalDimensions.L0 + " " + "(+/-" + coef.toler_L0 + ")" + " x " + n  +"\n";  
      }
  }  
  useEffect(() => {

  if(originalDimensions.d >0 && originalDimensions.Dext >0 && originalDimensions.N >0 && originalDimensions.L0 >0)
    
  setDescrip({...descrip, descrip: mensaje })
          
 }, [grado])

        
}