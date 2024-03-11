import { ReqTable, TableTitle, Tr, Td, Cell, Td1, Cell1, Cell2 } from "./styles";

export default function LoadConditionsTable({
  clientRequirements,
  setClientRequirements,
}) {
  const handleChange = (e, index) => {
    const people = clientRequirements.loadConditions.peoplebyRow
    people[index] = e.target.value
    setClientRequirements({ ...clientRequirements, loadConditions: { ...clientRequirements.loadConditions, peoplebyRow: people} })
    localStorage.setItem("ClientRequirements", JSON.stringify({...clientRequirements, loadConditions: { ...clientRequirements.loadConditions, peoplebyRow: people}}))
  }
  return (
    <div>
      <ReqTable>
        <thead>
          <tr>
            <TableTitle colSpan="2">
              Condiciones de carga en el vehiculo
            </TableTitle>
          </tr>
        </thead>

        <tbody>
          <Tr>
            <Td1>Peso por persona (kg):</Td1>
            <Td>
              <Cell type="number" value={clientRequirements.loadConditions.personWeight} onChange={(e) => setClientRequirements({ ...clientRequirements, loadConditions: { ...clientRequirements.loadConditions, personWeight: e.target.value } })}></Cell>
            </Td>
          </Tr>
          <Tr>
            <Td1>Distribucion de pasajeros en filas:</Td1>
            <Td>
              {/* <Tr>
                <Td1>Fila:</Td1>
                <div>
                <Td><Cell1>1</Cell1></Td>
                <Td><Cell1>2</Cell1></Td>
                <Td><Cell1>3</Cell1></Td>
                <Td><Cell1>4</Cell1></Td>
                <Td><Cell1>5</Cell1></Td>
                </div>
              </Tr> */}
              
                {/* <Td1>Personas por fila:</Td1> */}
               <div> 
                <Td>
                  <Cell2 type="number" value={clientRequirements.loadConditions.peoplebyRow[0]} ></Cell2>
                </Td>
                <Td>
                  <Cell2 type="number" value={clientRequirements.loadConditions.peoplebyRow[1]} onChange={(e) => handleChange(e, 1)}></Cell2>
                </Td>
                <Td>
                  <Cell2 type="number" value={clientRequirements.loadConditions.peoplebyRow[2]} onChange={(e) => handleChange(e, 2)}></Cell2>
                </Td>
                <Td>
                  <Cell2 type="number" value={clientRequirements.loadConditions.peoplebyRow[3]} onChange={(e) => handleChange(e, 3)}></Cell2>
                </Td>
                <Td>
                  <Cell2 type="number" value={clientRequirements.loadConditions.peoplebyRow[4]} onChange={(e) => handleChange(e, 4)}></Cell2>
                </Td>
                
              </div>
            </Td>
          </Tr>
          
          <Tr>
            <Td1>Carga en el maletero (kg):</Td1>
            <Td>
              <Cell type="number" value={clientRequirements.loadConditions.trunkWeight} onChange={(e) => setClientRequirements({ ...clientRequirements, loadConditions: { ...clientRequirements.loadConditions, trunkWeight: e.target.value } })}></Cell>
            </Td>
          </Tr>
          <Tr>
            <Td1>Carga en la parrilla (kg):</Td1>
            <Td>
              <Cell type="number" value={clientRequirements.loadConditions.roofWeight} onChange={(e) => setClientRequirements({ ...clientRequirements, loadConditions: { ...clientRequirements.loadConditions, roofWeight: e.target.value } })}></Cell>
            </Td>
          </Tr>
        </tbody>
      </ReqTable>
    </div>
  );
}
