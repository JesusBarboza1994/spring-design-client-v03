import { useState } from "react"
//import Input from "../../Input"
//import styled from "@emotion/styled";
import { Wrapper, Label, Input, Div, Input2 } from "./styles"

export function TechnicalStandard(){
    const [check1, setCheck1] = useState({
		applies1: false,
        noApplies1: false,
        detail1:"",
    })
    const [check2, setCheck2] = useState({
		applies2: false,
        noApplies2: false,
        detail2:"",
    })
    const handleAppliesChange = (e) => {
        setCheck1({ ...check1, applies1: e.target.value, noApplies1: false });
        setCheck2({ ...check2, applies2: e.target.value, noApplies2: false });
    };

    const handleNoAppliesChange = (e) => {
        setCheck1({ ...check1, noApplies1: e.target.value, applies1: false });
        setCheck2({ ...check2, noApplies2: e.target.value, applies2: false });
    };
    return(
        <Wrapper>
            <div>
                <p>Requisitos legales o reglamentos</p>
                <p>Normas o codigos de practicas que la organizacion se ha comprometido a implementar</p>
            </div>
            <div>
                <Div>
                    <Label>Aplica</Label> 
                    <Input type="radio"
                        value={check1.applies1}
                        name="requisitos1" 
                        onChange={handleAppliesChange}
                        id="applies1"
                        applies={check1.applies1}/> 
                </Div>
                <Div>
                    <Label>Aplica</Label> 
                    <Input type="radio"
                        value={check2.applies2}
                        name="requisitos2" 
                        onChange={handleAppliesChange}
                        id="applies2"
                        applies={check2.applies2}/>  
                </Div>
            </div>
            <div>
                <Div>
                    <label>No aplica</label> 
                    <Input type="radio"
                        value={check1.noApplies1}
                        name="requisitos1" 
                        onChange={handleNoAppliesChange}
                        id="noApplies1"
                        applies={check1.applies1}/>  
                </Div>
                <Div>
                    <label>No aplica</label> 
                    <Input type="radio"
                        value={check2.noApplies2}
                        name="requisitos2" 
                        onChange={handleNoAppliesChange}
                        id="noApplies2"
                        applies={check2.applies2}/>  
                </Div>
            </div>
            <div>
                <Div>
                    <label>Detalle</label> 
                    <Input2 value={check1.detail1} 
                        onChange={(e) => setCheck1({ ...check1, detail1: e.target.value })}
                    />
                </Div>
                <Div>
                    <label>Detalle</label> 
                    <Input2 value={check2.detail2} 
                        onChange={(e) => setCheck2({ ...check2, detail2: e.target.value })}
                    />
                </Div>
            </div>

        </Wrapper>
    )
}
