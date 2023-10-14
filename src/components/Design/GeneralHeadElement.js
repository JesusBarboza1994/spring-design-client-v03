import { MediumCell } from "./InputdataStyle";
import { Paragraph } from "./style";

export function GeneralHeadElement (){
return(
    <Wrapper>
     <div>
         <Paragraph>Fecha</Paragraph>
         <MediumCell/>
     </div>
     <div>
         <Paragraph>Correlativo de diseño</Paragraph>
         <MediumCell/>
     </div>
     <div>
         <Paragraph>Tipo de resorte</Paragraph>
         <MediumCell/>
     </div>
        
    </Wrapper>
    
)
}