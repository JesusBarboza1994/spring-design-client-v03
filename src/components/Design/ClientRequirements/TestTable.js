import { ReqTable, TableTitle, Td, Cell, Title, Comment} from "./styles";

export default function TestTable(){
    return(
        <div>
            
            <ReqTable>
                
                <thead>
                    <tr>
                     <TableTitle colSpan="5">Prueba de rompemuelles - Numero de oscilaciones</TableTitle>
                     
                    </tr> 
                </thead>
                <tbody>
                  <tr>
                        <td>№</td>
                        <Title>Delantero</Title>
                        <Title>Posterior</Title>
                        <Title>Vel.(kph)</Title>
                        <Comment>Comentario</Comment>
                    </tr>

                    <tr>
                        <td>1</td>                     
                        <td>
                         <Cell type="number"></Cell> 
                        </td>
                        <td>
                         <Cell type="number"></Cell> 
                        </td>
                        <td>
                         <Cell type="number"></Cell> 
                        </td>
                        <td>
                         <Cell type="number"></Cell> 
                        </td>                          
                    </tr>
                    <tr>
                        <td>2</td>                     
                        <td>
                         <Cell type="number"></Cell> 
                        </td>
                        <td>
                         <Cell type="number"></Cell> 
                        </td>
                        <td>
                         <Cell type="number"></Cell> 
                        </td>
                        <td>
                         <Cell type="number"></Cell> 
                        </td>                          
                    </tr>
                    <tr>
                        <td>3</td>                     
                        <td>
                         <Cell type="number"></Cell> 
                        </td>
                        <td>
                         <Cell type="number"></Cell> 
                        </td>
                        <td>
                         <Cell type="number"></Cell> 
                        </td>
                        <td>
                         <Cell type="number"></Cell> 
                        </td>                          
                    </tr>
                    <tr>
                        <td>4</td>                     
                        <td>
                         <Cell type="number"></Cell> 
                        </td>
                        <td>
                         <Cell type="number"></Cell> 
                        </td>
                        <td>
                         <Cell type="number"></Cell> 
                        </td>
                        <td>
                         <Cell type="number"></Cell> 
                        </td>                          
                    </tr>
                    <tr>
                        <td>5</td>                     
                        <td>
                         <Cell type="number"></Cell> 
                        </td>
                        <td>
                         <Cell type="number"></Cell> 
                        </td>
                        <td>
                         <Cell type="number"></Cell> 
                        </td>
                        <td>
                         <Cell type="number"></Cell> 
                        </td>                          
                    </tr>

                   



                </tbody>
            </ReqTable>


        </div>
    )
}