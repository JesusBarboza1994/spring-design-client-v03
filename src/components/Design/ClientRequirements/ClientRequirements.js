import { useState, useEffect } from "react"
import Input from "../../Input"
import { Wrapper, Div } from "./styles"
import TextArea from "./TextArea"
import RequirementsTable from "./RequirementsTable"
import TestTable from "./TestTable"
import LoadConditionsTable from "./LoadConditionsTable"

export function ClientRequirements({setCounter, counter}){
      const [dataTextArea, setDataTextArea] = useState(localStorage.getItem("ClientRequirements") ? JSON.parse(localStorage.getItem("ClientRequirements")) : {
        otrosReq:"",
        observaciones: "",
        motivo: "",
        firma: "",
      })
      useEffect(()=>{
        let acc = 0
        for (let i in dataTextArea){
            if(dataTextArea[i] !== "") acc += 1
        }
        setCounter({...counter, ClientRequirements: {quantity: Object.keys(dataTextArea).length, counter: acc}}); console.log(counter)
      }, [])
    
      const handleChange = (e) =>{
        setDataTextArea({...dataTextArea,	[e.target.id]: e.target.value })
        let acc = 0
        for (let i in dataTextArea){
          if(i === e.target.id){
            if (e.target.value !== "") acc += 1
          }else{
            if(dataTextArea[i] !== "") acc += 1
          }
        }
        setCounter({...counter, ClientRequirements: {quantity: Object.keys(dataTextArea).length, counter: acc}})
        localStorage.setItem("ClientRequirements", JSON.stringify({...dataTextArea, [e.target.id]: e.target.value }))
        localStorage.setItem("counter", JSON.stringify({...counter, ClientRequirements: {quantity: Object.keys(dataTextArea).length, counter: acc}}))
      }

      return(
		<Wrapper>
		 <Div>
        <RequirementsTable setCounter={setCounter} counter={counter}/>
        <LoadConditionsTable/>
        <TextArea title="Otros requerimientos:" value={dataTextArea.otrosReq} onChange={(e)=> handleChange(e)} setCounter={setCounter} counter={counter} id="otrosReq"/>
        <TextArea title="Observaciones:" value={dataTextArea.observaciones} onChange={(e)=> handleChange(e)} id="observaciones"/>
        <TextArea title="Motivo de solicitud" value={dataTextArea.motivo} onChange={(e)=> handleChange(e)} id="motivo"/>
        <TestTable/>
        <TextArea title="Firma del cliente" value={dataTextArea.firma} onChange={(e)=> handleChange(e)} id="firma"/>
        <TextArea title="Prueba de freno brusco (40 km/h)"/>   
                        
      </Div>
    </Wrapper>
    )
}