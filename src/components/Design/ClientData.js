import { GrisContainer, DivElement, CellName, MediumCell } from "./InputDataStyle"

export function ClientData (){
    return(
        <GrisContainer>
         <>
         
         <DivElement>
             <CellName>Nombre</CellName>
             <MediumCell/>
         </DivElement>
         <DivElement>
             <CellName>DNI/RUC</CellName>
             <MediumCell/>
         </DivElement>
         <DivElement>
             <CellName>Desarrollo</CellName>
             <MediumCell/>
         </DivElement>
          </>  
        </GrisContainer>
        
    )
    }