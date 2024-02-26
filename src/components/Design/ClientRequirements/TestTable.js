import { ReqTable, TableTitle, Cell, Title, Comment } from "./styles";

export default function TestTable({
  clientRequirements,
  setClientRequirements,
}) {
  
  const handleChange = (e, index, key) => {
    const bumpTest = clientRequirements.bumpTest
    bumpTest[index][key] = e.target.value
    setClientRequirements({...clientRequirements, bumpTest: bumpTest})
    localStorage.setItem("ClientRequirements", JSON.stringify({...clientRequirements, bumpTest: bumpTest}))
  }
  return (
    <div>
      <ReqTable>
        <thead>
          <tr>
            <TableTitle colSpan="5">
              Prueba de rompemuelles - Numero de oscilaciones
            </TableTitle>
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
          {
            
          clientRequirements.bumpTest.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                {Object.keys(item).map((key) => {
                  return <td key={key}>
                    <Cell
                      type={key === "comment" ? "text" : "number"}
                      value={item[key]}
                      onChange={(e) => handleChange(e, index, key)}
                    />
                  </td>;
                })}
                
              </tr>
            );
          })}
        </tbody>
      </ReqTable>
    </div>
  );
}
