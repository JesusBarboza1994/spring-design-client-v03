import { ReqTable, TableTitle, Td, Cell, Td1, Cell1, Tr } from "./styles";

export default function LoadConditionsTable(){
  return(
    <div>
        
      <ReqTable>
          
        <thead>
          <tr>
            <TableTitle colSpan="2">Condiciones de carga en el vehiculo</TableTitle>
            
          </tr> 
       </thead>

       <tbody>
          <Tr>
            <Td1>Peso por persona (kg):</Td1>
            <Td>
             <Cell type="number"></Cell>
            </Td>
          </Tr>
          <Tr>
            <Td1>Distribucion de pasajeros en filas:</Td1>
            <Td>
              <tr>
                <Td1>Fila:</Td1>
                <Td>1</Td>
                <Td>2</Td>  
                <Td>3</Td>
                <Td>4</Td>
                <Td>5</Td>

              </tr>
              <tr>
                <Td1>Personas:</Td1>
                <Td><Cell1 type="number"></Cell1></Td>
                <Td><Cell1 type="number"></Cell1></Td>  
                <Td><Cell1 type="number"></Cell1></Td>
                <Td><Cell1 type="number"></Cell1></Td>
                <Td><Cell1 type="number"></Cell1></Td>

              </tr>

            </Td>
          </Tr>
          <Tr>
            <Td1>Carga en el maletero (kg):</Td1>
            <Td>
            <Cell type="number"></Cell>
            </Td>
          </Tr>
          <Tr>
            <Td1>Carga en la parrilla (kg):</Td1>
            <Td>
            <Cell type="number"></Cell>
            </Td>
          </Tr>

        </tbody>
      </ReqTable>


    </div>
  )
}