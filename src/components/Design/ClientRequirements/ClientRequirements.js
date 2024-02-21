import { useState } from "react"
import Input from "../../Input"
import { Wrapper, Div } from "./styles"
import TextArea from "./TextArea"
import RequirementsTable from "./RequirementsTable"
import TestTable from "./TestTable"
import LoadConditionsTable from "./LoadConditionsTable"

export function ClientRequirements(){
    
    
    return(
		<Wrapper>
		 <Div>
        <RequirementsTable/>
        <LoadConditionsTable/>
        <TextArea title="Otros requerimientos:"/>
        <TextArea title="Observaciones:"/>
        <TextArea title="Motivo de solicitud"/>
        <TestTable/>
        <TextArea title="Firma del cliente"/>
        <TextArea title="Prueba de freno brusco (40 km/h)"/>   
                        
      </Div>
    </Wrapper>
    )
}