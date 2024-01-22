import { useState } from "react"
//import Input from "../../Input"
//import styled from "@emotion/styled";
import { Wrapper, Label, Input, Div, Input2 } from "./styles"

export function TechnicalStandard(){
    const [checks, setChecks] = useState({
		X:"si",
        Detail:"",
    })

    return(
        <Wrapper>
            <div>
                <p>Requisitos legales o reglamentos</p>
                <p>Normas o codigos de practicas que la organizacion se ha comprometido a implementar</p>
            </div>
            <div>
                <Div>
                {/* <Input title="Marca" value={checks.brand} onChange={(e)=>setChecks({...checks, brand:e.target.value})} id="brand"/> */}
                    <label>Aplica</label> 
                    <Input></Input> 
                </Div>
                <Div>
                    <label>Aplica</label> 
                    <Input></Input> 
                </Div>
            </div>
            <div>
                <Div>
                    <label>No aplica</label> 
                    <Input></Input> 
                </Div>
                <Div>
                    <label>No aplica</label> 
                    <Input></Input> 
                </Div>
            </div>
            <div>
                <Div>
                    <label>Detalle</label> 
                    <Input2 />
                </Div>
                <Div>
                    <label>Detalle</label> 
                    <Input2/>
                </Div>
            </div>

        </Wrapper>
    )
}
