import "@fontsource/abeezee/400-italic.css";
import { DescripcionResorte } from "./Description";
import { DescripDiv, Paragraph3, Textarea } from "./styles";

export function TextArea(){
   
    let descripcion = DescripcionResorte()

 return(
    <div>  
        <Paragraph3>Descripcion</Paragraph3>
        <DescripDiv placeholder="Descripcion">{descripcion}</DescripDiv>
        <Textarea placeholder="Datos adicionales"/>
          
    </div>  
    )
    
}   