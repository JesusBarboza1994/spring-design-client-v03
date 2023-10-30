import { GrisContainer_ClientData, Element_textmasInput, CellName, MediumCell, ThreeInputContainer, LargeCell } from "./InputDataStyle"

export function ClientData (){
    return(
        <GrisContainer_ClientData>
         <ThreeInputContainer>
              <Element_textmasInput>
                 <CellName>Nombre</CellName>
                 <LargeCell/>
              </Element_textmasInput>
              <Element_textmasInput>
                 <CellName>DNI/RUC</CellName>
                 <LargeCell/>
              </Element_textmasInput>
              <Element_textmasInput>
                 <CellName>Desarrollo</CellName>
                 <LargeCell/>
              </Element_textmasInput>
          </ThreeInputContainer>  

          <ThreeInputContainer>
              <Element_textmasInput>
                 <CellName>Teléfono</CellName>
                 <LargeCell/>
              </Element_textmasInput>
              <Element_textmasInput>
                 <CellName>Correo</CellName>
                 <LargeCell/>
              </Element_textmasInput>
              <Element_textmasInput>
                 <CellName>Version</CellName>
                 <LargeCell/>
              </Element_textmasInput>
          </ThreeInputContainer>  

        </GrisContainer_ClientData>
        
    )
    }