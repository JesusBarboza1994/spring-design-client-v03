import { useState } from "react"
//import Input from "../../Input"
//import styled from "@emotion/styled";
import { Wrapper, Label, Input, Div, Input2 } from "./styles"

export function TechnicalStandard(){
    const [checks, setChecks] = useState({
		applies: false,
        noApplies: false,
        detail:"",
    })
    const handleAppliesChange = (e) => {
        setChecks({ ...checks, applies: e.target.value, noApplies: false });
    };

    const handleNoAppliesChange = (e) => {
        setChecks({ ...checks, noApplies: e.target.value, applies: false });
    };
    return(
        <Wrapper>
            <div>
                <p>Requisitos legales o reglamentos</p>
                <p>Normas o codigos de practicas que la organizacion se ha comprometido a implementar</p>
            </div>
            <div>
                <Div>
                    <label>Aplica</label> 
                    <Input type="radio"
                        value={checks.applies}
                        name="requisitos" 
                        onChange={handleAppliesChange}
                        id="applies"
                        applies={checks.applies}/> 
                </Div>
                <Div>
                    <label>Aplica</label> 
                    <Input type="radio"
                        value={checks.applies}
                        name="requisitos" 
                        onChange={handleAppliesChange}
                        id="applies"
                        applies={checks.applies}/>  
                </Div>
            </div>
            <div>
                <Div>
                    <label>No aplica</label> 
                    <Input type="radio"
                        value={checks.noApplies}
                        name="requisitos" 
                        onChange={handleNoAppliesChange}
                        id="noApplies"
                        applies={checks.applies}/>  
                </Div>
                <Div>
                    <label>No aplica</label> 
                    <Input type="radio"
                        value={checks.noApplies}
                        name="requisitos" 
                        onChange={handleNoAppliesChange}
                        id="noApplies"
                        applies={checks.applies}/>  
                </Div>
            </div>
            <div>
                <Div>
                    <label>Detalle</label> 
                    <Input2 value={checks.detail} 
                        onChange={(e) => setChecks({ ...checks, detail: e.target.value })}
                    />
                </Div>
                <Div>
                    <label>Detalle</label> 
                    <Input2 value={checks.detail} 
                        onChange={(e) => setChecks({ ...checks, detail: e.target.value })}
                    />
                </Div>
            </div>

        </Wrapper>
    )
}
