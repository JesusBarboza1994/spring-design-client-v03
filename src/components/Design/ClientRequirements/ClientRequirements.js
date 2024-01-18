import { useState } from "react"
import Input from "../../Input"
import { Wrapper } from "./styles"
import TextArea from "./TextArea"
import RequirementsTable from "./RequirementsTable"
import TestTable from "./TestTable"
import LoadConditionsTable from "./LoadConditionsTable"

export function ClientRequirements(){
    
    
    return(
		<Wrapper>
			<div style={{display:"grid", gridTemplateColumns: "1fr 1fr", gap:"40px", columnGap: "70px",}}>
             <RequirementsTable/>
             <LoadConditionsTable/>
             <TextArea title="Otros requerimientos:"/>
             <TextArea title="Observaciones:"/>
             <TextArea title="Motivo de solicitud"/>
             <TestTable/>
             <TextArea title="Prueba de freno brusco (40 km/h)"/>
             <TextArea title="Firma del cliente"/>
             
                        
            </div>
       </Wrapper>
    )
}