import { useEffect, useState } from "react";
import "@fontsource/abeezee/400-italic.css";
import { useAuth } from '../../context/auth-context';
import { DivSimul1, Div1, Label1, Paragraph1, DivCalculo, Input8 } from "./style";




export default function TestStrength() {

  const {dimensions, kControlCargas, bControlCargas} = useAuth();
  
  const [inputFuerza, setInputFuerza] = useState(0);
  const [long, setLong] = useState(0);
  const [def, setDef] = useState(0);

  function handleInputFuerza(e){

    setInputFuerza(Number(e.target.value))

    let defNuevo = (Number(e.target.value)-bControlCargas)/kControlCargas
    let longNuevo = (Number(dimensions.L0)-defNuevo).toFixed(1)

    setLong(longNuevo)
    setDef(defNuevo)

  }

  return(
    <div>
      <DivSimul1> 
          <Paragraph1>Punto de control</Paragraph1>
          <div style={{display: 'flex', margin: 8,}}>
            <Div1>
              <Label1>F</Label1>
              <Input8 type="number" value={inputFuerza} onChange={(e) => handleInputFuerza(e)}/>
            </Div1>
            <Div1>
              <Label1>L</Label1>
              <DivCalculo id={"L"}>{long}</DivCalculo>
            </Div1>
          </div>
              
      </DivSimul1>

    </div>
  )
}