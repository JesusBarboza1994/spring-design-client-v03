import { ReqTable, TableTitle, Td, Th } from "./styles";


export default function RequirementsTable(){
    return(
        <div>
            
            <TableTitle>Requerimientos funcionales y de desempeño</TableTitle>
            <ReqTable>
                
                <thead>
                    <tr>
                     <Th>Rigidez:</Th>
                     <Th>Altura instalada:</Th>
                    </tr> 
                </thead>
                <tbody>
                    <tr>
                        <Td>Aumentar</Td>
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