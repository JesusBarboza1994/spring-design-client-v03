import { useEffect, useState } from "react";
import { useAuth } from '../../context/auth-context';
import { Form, Div, Input, Label, DivSimulForm, Pform, Select } from "./styles";

export default function PrincipalData(){
  const [type1,setType1] = useState("TASE");
  const [type2,setType2] = useState("TASE");
  const [mater,setMater] = useState([
    "SHI-180",
    "SHI-165",
    "CRSI SAE 9254(REC)",
    "CRSI SAE 9254",
    "CRMN SAE 5160",
    "ACC",
    "ACC HS3 GALV",
    "BCC CAL.8-14",
    "CP DSR",
    "CP-DEINFRA",
    "FDSICR (DSR)",
    "FTO",
    "FTO-TWO (DSR)",
    "HD C-DSR",
    "HD CLASE B",
    "HD CLASE C",
    "INOX CLASE A-DSR",
    "INOX CLASE B-DSR",
    "INOX SANDVIK"
  ]);
  useEffect(() => {
    let extremo1 = type1
    let extremo2 = type2
    setDimensions({...dimensions,
      Ext1: extremo1, Ext2: extremo2
    })

  }, [type1, type2])

  function handleInput(e){
    setDimensions({...dimensions, [e.target.id]:e.target.value})
  }
  function handleSubmit(e){
    e.preventDefault();
    console.log(dimensions)
  }

 return(
    <DivSimulForm>
        <Form onSubmit={handleSubmit}>
          <div>
            <Pform>Datos principales</Pform>
              <Div>
                <Label>d</Label>
                <Input  value={dimensions.d} type="number" id={"d"} onChange={(e) => handleInput(e)}/>
              </Div>
              <Div>
                <Label>Dext</Label>
                <Input  value={dimensions.Dext} type="number" id={"Dext"} onChange={(e) => handleInput(e)}/>
              </Div>
              <Div>
                <Label>N</Label>
                <Input  value={dimensions.N} type="number" id={"N"} onChange={(e) => handleInput(e)}/>
              </Div>
              <Div>
                <Label>L0</Label>
                <Input  value={dimensions.L0} type="number" id={"L0"} onChange={(e) => handleInput(e)}/>
              </Div>
              
          </div>

          <div>
            <Pform>Extremo 1</Pform>
              <Div>
                <Label>Luz1</Label>
                <Input  value={dimensions.Luz1} type="number" id={"Luz1"} onChange={(e) => handleInput(e)}/>
              </Div>
              <Div>
                <Label>Dint1</Label>
                <Input  value={dimensions.Dint1} type="number" id={"Dint1"} onChange={(e) => handleInput(e)}/>
              </Div>
              <Div>
                <Label>Vtas1</Label>
                <Input  value={dimensions.Vtas1} type="number" id={"Vtas1"} onChange={(e) => handleInput(e)}/>
              </Div>
              <Div>
                <Label>Ext1</Label>
                <Select value={type1} id={"Ext1"} onChange={(e) => setType1(e.target.value)}>
                  <option value="TASE">TASE</option>
                  <option value="TCSE">TCSE</option>
                  <option value="TCE">TCE</option>
                  <option value="TAE">TAE</option>
                </Select>
              </Div>
          </div>
          
          <div>
            <Pform>Extremo 2</Pform>
              <Div>
                <Label>Luz2</Label>
                <Input  value={dimensions.Luz2} type="number" id={"Luz2"} onChange={(e) => handleInput(e)}/>
              </Div>
              <Div>
                <Label>Dint2</Label>
                <Input  value={dimensions.Dint2} type="number" id={"Dint2"} onChange={(e) => handleInput(e)}/>
              </Div>
              <Div>
                <Label>Vtas2</Label>
                <Input  value={dimensions.Vtas2} type="number" id={"Vtas2"} onChange={(e) => handleInput(e)}/>
              </Div>
              <Div>
                <Label>Ext2</Label>
                <Select  value={type2} id={"Ext2"} onChange={(e) => setType2(e.target.value)}>
                  <option value="TASE">TASE</option>
                  <option value="TCSE">TCSE</option>
                  <option value="TCE">TCE</option>
                  <option value="TAE">TAE</option>
                </Select>
              </Div>
          </div>
            
        </Form>
      </DivSimulForm>
 )


}