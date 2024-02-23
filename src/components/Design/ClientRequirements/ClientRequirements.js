import { useState, useEffect } from "react"
import { Wrapper, Div} from "./styles"
import TextArea from "./TextArea"
import RequirementsTable from "./RequirementsTable"
import TestTable from "./TestTable"
import LoadConditionsTable from "./LoadConditionsTable"

export function ClientRequirements({setCounter, counter}){

  const [dataClientReq, setDataClientReq] = useState(localStorage.getItem("ClientRequirements") ? JSON.parse(localStorage.getItem("ClientRequirements")) : {
    reqTable: "",
    textArea: "",
  })

  const [dataTextArea, setDataTextArea] = useState(localStorage.getItem("TextArea") ? JSON.parse(localStorage.getItem("TextArea")) : {
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
    setCounter({...counter, TextArea: {quantity: Object.keys(dataTextArea).length, counter: acc}}); console.log(counter)
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
    setCounter({...counter, TextArea: {quantity: Object.keys(dataTextArea).length, counter: acc}})
    localStorage.setItem("TextArea", JSON.stringify({...dataTextArea, [e.target.id]: e.target.value }))
    localStorage.setItem("counter", JSON.stringify({...counter, TextArea: {quantity: Object.keys(dataTextArea).length, counter: acc}}))
  }

  useEffect(()=>{
    let acc = 0
    for (let i in dataClientReq){
        if(dataClientReq[i] !== "") acc += 1
    }
    setCounter({...counter, ClientRequirements: {quantity: Object.keys(dataClientReq).length, counter: acc}}); console.log(counter)
  }, [])
  const handleChangeReq = (e) =>{
    setDataClientReq({...dataClientReq,	[e.target.id]: e.target.value })
    let acc = 0
    for (let i in dataClientReq){
      if(i === e.target.id){
        if (e.target.value !== "") acc += 1
      }else{
        if(dataClientReq[i] !== "") acc += 1
      }
    }
    setCounter({...counter, ClientRequirements: {quantity: Object.keys(dataClientReq).length, counter: acc}})
    localStorage.setItem("ClientRequirements", JSON.stringify({...dataClientReq, [e.target.id]: e.target.value }))
    localStorage.setItem("counter", JSON.stringify({...counter, ClientRequirements: {quantity: Object.keys(dataClientReq).length, counter: acc}}))
  }

  return(
    <Wrapper>
      <Div>
        <RequirementsTable onChange={(e)=> handleChangeReq(e)} setCounter={setCounter} counter={counter} id="reqTable"/>
        <LoadConditionsTable/>
        <TextArea title="Otros requerimientos:" value={dataTextArea.otrosReq} onChange={(e)=> handleChange(e)} setCounter={setCounter} counter={counter} id="otrosReq"/>
        <TextArea title="Observaciones:" value={dataTextArea.observaciones} onChange={(e)=> handleChange(e)} setCounter={setCounter} counter={counter} id="observaciones"/>
        <TextArea title="Motivo de solicitud" value={dataTextArea.motivo} onChange={(e)=> handleChange(e)} setCounter={setCounter} counter={counter} id="motivo"/>
        <TestTable/>
        <TextArea title="Firma del cliente" value={dataTextArea.firma} onChange={(e)=> handleChange(e)} setCounter={setCounter} counter={counter} id="firma"/>
        <TextArea title="Prueba de freno brusco (40 km/h)"/>   
                        
      </Div>
    </Wrapper>
  )
}

// export function ClientRequirements({ setCounter, counter }) {
//   const initialClientReqState = {
//     reqTable: "",
//     textArea: "",
//   };

//   const initialTextAreaState = {
//     otrosReq: "",
//     observaciones: "",
//     motivo: "",
//     firma: "",
//   };

//   const [dataClientReq, setDataClientReq] = useState(() => JSON.parse(localStorage.getItem("ClientRequirements")) || initialClientReqState);
//   const [dataTextArea, setDataTextArea] = useState(() => JSON.parse(localStorage.getItem("TextArea")) || initialTextAreaState);

//   useEffect(() => {
//     updateCounter("ClientRequirements", dataClientReq);
//   }, [dataClientReq]);

//   useEffect(() => {
//     updateCounter("TextArea", dataTextArea);
//   }, [dataTextArea]);

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setDataTextArea(prevData => ({ ...prevData, [id]: value }));
//   };

//   const handleChangeReq = (e) => {
//     const { id, value } = e.target;
//     setDataClientReq(prevData => ({ ...prevData, [id]: value }));
//   };

//   const updateCounter = (section, data) => {
//     let acc = Object.values(data).filter(value => value !== "").length;
//     setCounter(prevCounter => ({
//       ...prevCounter,
//       [section]: { quantity: Object.keys(data).length, counter: acc }
//     }));
//     localStorage.setItem(section, JSON.stringify(data));
//     localStorage.setItem("counter", JSON.stringify({
//       ...counter,
//       [section]: { quantity: Object.keys(data).length, counter: acc }
//     }));
//   };

//   return (
//     <Wrapper>
//       <Div>
//         <RequirementsTable onChange={handleChangeReq} setCounter={setCounter} counter={counter} id="reqTable" />
//         <LoadConditionsTable />
//         <TextArea title="Otros requerimientos:" value={dataTextArea.otrosReq} onChange={handleChange} setCounter={setCounter} counter={counter} id="otrosReq" />
//         <TextArea title="Observaciones:" value={dataTextArea.observaciones} onChange={handleChange} setCounter={setCounter} counter={counter} id="observaciones" />
//         <TextArea title="Motivo de solicitud" value={dataTextArea.motivo} onChange={handleChange} setCounter={setCounter} counter={counter} id="motivo" />
//         <TestTable />
//         <TextArea title="Firma del cliente" value={dataTextArea.firma} onChange={handleChange} setCounter={setCounter} counter={counter} id="firma" />
//         <TextArea title="Prueba de freno brusco (40 km/h)" />
//       </Div>
//     </Wrapper>
//   );
// }
