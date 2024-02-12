import "@fontsource/abeezee/400-italic.css";
import { Description } from "../Description";
import { DescripDiv, Paragraph, Textarea, Wrapper } from "./styles";

export function TextArea(){
   
    let descripcion = Description()

 return(
    <Wrapper>  
        
        <div>
         <Paragraph>Descripcion</Paragraph>
         <DescripDiv>{descripcion}</DescripDiv>
        </div>

        <div>
         <Paragraph>Material</Paragraph>
         <DescripDiv placeholder="Datos adicionales"/>
        </div>
    </Wrapper>  
    )
    
}