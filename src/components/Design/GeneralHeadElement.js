import { CellName, DivElement, GrisContainer, MediumCell } from "./InputDataStyle";



export function GeneralHeadElement (){
return(
    <GrisContainer>
     <DivElement>
         <CellName>Fecha</CellName>
         <MediumCell/>
     </DivElement>
     <DivElement>
         <CellName>Correlativo de diseño</CellName>
         <MediumCell/>
     </DivElement>
     <DivElement>
         <CellName>Tipo de resorte:</CellName>
         <CellName>SUSPENSION</CellName>
     </DivElement>
        
    </GrisContainer>
    
)
}