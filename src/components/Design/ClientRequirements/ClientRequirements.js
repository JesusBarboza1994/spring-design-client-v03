import { useState } from "react"
import Input from "../../Input"
import { Wrapper } from "./styles"
import TextArea from "./TextArea"
import RequirementsTable from "./RequirementsTable"
import TestTable from "./TestTable"

export function ClientRequirements(){
    
    
    return(
		<Wrapper>
			<div style={{display:"grid", gridTemplateColumns: "1fr 1fr", gap:"40px", columnGap: "auto",}}>
             <TextArea title="Otros requerimientos:"/>
             <TextArea title="Observaciones:"/>
             <TextArea title="Motivo de solicitud"/>
             <TextArea title="Prueba de freno brusco (40 km/h)"/>
             <TextArea title="Firma del cliente"/>
             <RequirementsTable/>
             <TestTable/>
            </div>
       </Wrapper>
    )
}