import { useState } from "react"
//import Input from "../../Input"
//import styled from "@emotion/styled";
import { Wrapper, Label, Input, Div, Input2 } from "./styles"

export function TechnicalStandard(){
    const [check1, setCheck1] = useState({
		applies: false,
        noApplies: false,
        detail:"",
    })
    const [check2, setCheck2] = useState({
		applies: false,
        noApplies: false,
        detail:"",
    })
    
    const handleAppliesChange = (e) => {
        setCheck1({ ...check1, applies: e.target.value, noApplies: false });
        setCheck2({ ...check2, applies: e.target.value, noApplies: false });
    };

    const handleNoAppliesChange = (e) => {
        setCheck1({ ...check1, noApplies: e.target.value, applies: false });
        setCheck2({ ...check2, noApplies: e.target.value, applies: false });
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
                        value={check1.applies}
                        name="requisitos1" 
                        onChange={handleAppliesChange}
                        id="applies"
                        applies={check1.applies}/> 
                </Div>
                <Div>
                    <label>Aplica</label> 
                    <Input type="radio"
                        value={check2.applies}
                        name="requisitos2" 
                        onChange={handleAppliesChange}
                        id="applies"
                        applies={check2.applies}/>  
                </Div>
            </div>
            <div>
                <Div>
                    <label>No aplica</label> 
                    <Input type="radio"
                        value={check1.noApplies}
                        name="requisitos1" 
                        onChange={handleNoAppliesChange}
                        id="noApplies"
                        applies={check1.applies}/>  
                </Div>
                <Div>
                    <label>No aplica</label> 
                    <Input type="radio"
                        value={check2.noApplies}
                        name="requisitos2" 
                        onChange={handleNoAppliesChange}
                        id="noApplies"
                        applies={check2.applies}/>  
                </Div>
            </div>
            <div>
                <Div>
                    <label>Detalle</label> 
                    <Input2 value={check1.detail} 
                        onChange={(e) => setCheck1({ ...check1, detail: e.target.value })}
                    />
                </Div>
                <Div>
                    <label>Detalle</label> 
                    <Input2 value={check2.detail} 
                        onChange={(e) => setCheck2({ ...check2, detail: e.target.value })}
                    />
                </Div>
            </div>

        </Wrapper>
    )
}
