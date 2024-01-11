import { useState } from "react"
import Input from "../../Input"
import { Wrapper } from "./styles"
import Element1 from "./Element1"
import RequirementsTable from "./RequirementsTable"

export function ClientRequirements(){
    
    
    return(
		<Wrapper>
			<div style={{display:"grid", gridTemplateColumns: "1fr 1fr", gap:"30px", columnGap: "50px",}}>
             <Element1 title="Otros requerimientos:"/>
             <Element1 title="Observaciones:"/>
             <Element1 title="Motivo de solicitud"/>
             <Element1 title="Prueba de freno brusco (40 km/h)"/>
             <Element1 title="Firma del cliente"/>
             <RequirementsTable/>
            </div>
       </Wrapper>
    )
}