import { useState } from "react";
import { ReqTable, TableTitle, Td, Select, Cell } from "./styles";

export default function RequirementsTable({setCounter, counter}){
    const [dataReq, setDataReq] = useState(localStorage.getItem("RequirementsTable") ? JSON.parse(localStorage.getItem("RequirementsTable")) : {
		req1:"",
		req2: "",
		req3: "",
		req4: "",
    })

    const handleChange = (e) =>{
		setDataReq({...dataReq,	[e.target.id]: e.target.value })
		let acc = 0
		for (let i in dataReq){
			if(i === e.target.id){
				if (e.target.value !== "") acc += 1
			}else{
				if(dataReq[i] !== "") acc += 1
			}
		}
		setCounter({...counter, RequirementsTable: {quantity: Object.keys(dataReq).length, counter: acc}})
		localStorage.setItem("RequirementsTable", JSON.stringify({...dataReq, [e.target.id]: e.target.value }))
		localStorage.setItem("counter", JSON.stringify({...counter, RequirementsTable: {quantity: Object.keys(dataReq).length, counter: acc}}))
	}

    return(
        <div>
            
            <ReqTable>
                
                <thead>
                    <tr>
                     <TableTitle colSpan="2">Requerimientos funcionales y de desempeño</TableTitle>
                     
                    </tr> 
                </thead>
                <tbody>
                  <tr>
                        <Td>Rigidez:</Td>
                        <Td>Altura instalada:</Td>
                    </tr>

                    <tr>
                        <Td> 
                        <div style={{display: "flex",}}>
                         <Select value={dataReq.req1} onChange={(e)=> handleChange(e)} id="req1">
                             <option hidden disabled> Seleccione </option>
                             <option value="Aumentar"> Aumentar </option>
                             <option value="Mantener"> Mantener </option>
                             <option value="Disminuir"> Disminuir </option>
                          </Select>
                        </div>
                        </Td>
                        
                        <Td>
                        <div style={{display: "flex",}}>
                         <Select value={dataReq.req2} onChange={(e)=> handleChange(e)} id="req2">
                                <option hidden disabled> Seleccione </option>
                                <option value={"Aumentar"}> Aumentar </option>
                                <option value={"Mantener"}> Mantener </option>
                                <option value={"Disminuir"}> Disminuir </option>
                                
                          </Select>
                        </div>
                        </Td>
                    </tr>
                    <tr>
                        <Td>
                            <div style={{display: "flex",}}>
                             <Select value={dataReq.req3} onChange={(e)=> handleChange(e)} id="req3">
                                <option hidden disabled> Seleccione </option>
                                <option> 5 a 10% (muy leve)</option>
                                <option> 12 a 15% (leve)</option>
                                <option> 18 a 25% (moderado)</option>
                                <option> 27 a 35% (alto)</option>
                                <option> 38% a mas (muy alto)</option>
                             </Select>
                           </div>
                        </Td>
                        <Td>
                            <Cell type="number" value={dataReq.req4} onChange={(e)=>handleChange(e)} id="req4"></Cell>
                        </Td>
                    </tr>
               console.log(counter)

                </tbody>
            </ReqTable>


        </div>
    )
}