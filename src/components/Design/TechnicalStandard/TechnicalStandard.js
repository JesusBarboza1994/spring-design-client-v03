import { useState } from "react"
//import Input from "../../Input"
import { Wrapper, Label, Input } from "./styles"

export function TechnicalStandard(){
    const [checks, setChecks] = useState({
		brand:"",

    })

    return(
        <Wrapper>
            <div>
                <p>Requisitos legales o reglamentos</p>
                <p>Normas o codigos de practicas que la organizacion se ha comprometido a implementar</p>
            </div>
            <div>
            {/* <Input title="Marca" value={checks.brand} onChange={(e)=>setChecks({...checks, brand:e.target.value})} id="brand"/> */}
				<label>Aplica</label> 
                <Input></Input> 
                <label>Aplica</label> 
                <Input></Input> 
            </div>
            <div>
                <label>No aplica</label> 
                <Input></Input> 
                <label>No aplica</label> 
                <Input></Input> 
            </div>
            <div>
                <label>Detalle</label> 
                <Input></Input> 
                <label>Detalle</label> 
                <Input></Input> 
            </div>

        </Wrapper>
    )
}
