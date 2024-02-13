import "@fontsource/abeezee/400-italic.css";
import { Description } from "../Description";
import { DescripDiv, Paragraph, Wrapper, Div } from "./styles";

export function TextArea(){
   
    let descripcion = Description()

 return(
    <Wrapper>  
        
        <div>
            <div>
                <Paragraph>Descripcion</Paragraph>
                <DescripDiv>{descripcion}</DescripDiv>
            </div>
         
                
            <div>
                <Paragraph>Material</Paragraph>
               <DescripDiv style={{height: 40}}/>
            </div>
         
        </div>
    </Wrapper>  
    )
    
}