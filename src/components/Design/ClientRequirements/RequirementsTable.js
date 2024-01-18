import { ReqTable, TableTitle, Td, Select, Cell } from "./styles";

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
                        <Td> 
                        <div style={{display: "flex",}}>
                         <Select>
                             <option> Seleccione</option>
                             <option> Aumentar</option>
                             <option> Mantener</option>
                             <option> Disminuir</option>
                          </Select>
                        </div>
                        </Td>
                        
                        <Td>
                        <div style={{display: "flex",}}>
                         <Select>
                         <option> Seleccione</option>
                                <option> Aumentar</option>
                                <option> Mantener</option>
                                <option> Disminuir</option>
                                
                          </Select>
                        </div>
                        </Td>
                    </tr>
                    <tr>
                        <Td>
                            <div style={{display: "flex",}}>
                             <Select>
                                <option> -- </option>
                                <option> 5 a 10% (muy leve)</option>
                                <option> 12 a 15% (leve)</option>
                                <option> 18 a 25% (moderado)</option>
                                <option> 27 a 35% (alto)</option>
                                <option> 38% a mas (muy alto)</option>
                             </Select>
                           </div>
                        </Td>
                        <Td>
                            <Cell type="number"></Cell>
                        </Td>
                    </tr>


                </tbody>
            </ReqTable>


        </div>
    )
}