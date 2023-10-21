import "@fontsource/abeezee/400-italic.css";
import { Description } from "./Description";
import { DescripDiv, Paragraph3, Textarea } from "./styles";

export function TextArea(){
   
    let descripcion = Description()

 return(
    <div>  
        <Paragraph3>Descripcion</Paragraph3>
        <DescripDiv placeholder="Descripcion">{descripcion}</DescripDiv>
        <Textarea placeholder="Datos adicionales"/>
          
    </div>  
    )
    
}   