import { ReqTable, TableTitle, Td, Select } from "./styles";
import apiFetch from "../../../services/api-fetch";


export default function RequirementsTable(){
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
                        <div style={{display: "flex",}}>
                         <Select>
                             <option> Seleccionar</option>
                             <option> Aumentar</option>
                             <option> Mantener</option>
                             <option> Disminuir</option>
                          </Select>
                        </div>
                        
                        <Td>aumentar</Td>
                    </tr>
                    <tr>
                        <Td>5%</Td>
                        <Td>
                            <input type="number"></input>
                        </Td>
                    </tr>


                </tbody>
            </ReqTable>


        </div>
    )
}