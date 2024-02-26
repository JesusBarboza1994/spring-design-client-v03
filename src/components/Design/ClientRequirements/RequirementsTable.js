import { useEffect } from "react";
import { ReqTable, TableTitle, Td, Select, Cell } from "./styles";

export default function RequirementsTable({
  clientRequirements,
  setClientRequirements,
  counter,
  setCounter,
}) {

	useEffect(() => {
		let acc = 0
    if(clientRequirements.otherRequirements !== "") acc += 1
    if(clientRequirements.observations !== "") acc += 1
    if(clientRequirements.reason !== "") acc += 1
    if(clientRequirements.requirements.stiffnessIndication !== "" 
      && clientRequirements.requirements.heightIndication !== ""
      && clientRequirements.requirements.stiffnessVariation !== ""
      && clientRequirements.requirements.heightVariation !== "") acc += 1

    setCounter({...counter, ClientRequirements: {quantity: 4, counter: acc}})
    localStorage.setItem("counter", JSON.stringify({...counter, ClientRequirements: {quantity: 4, counter: acc}}))
	
		
	}, [clientRequirements])
	
  return (
    <div>
      <ReqTable>
        <thead>
          <tr>
            <TableTitle colSpan="2">
              Requerimientos funcionales y de desempeño
            </TableTitle>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>Rigidez:</Td>
            <Td>Altura instalada:</Td>
          </tr>

          <tr>
            <Td>
              <div style={{ display: "flex" }}>
                <Select
                  value={clientRequirements.requirements.stiffnessIndication}
                  onChange={(e) =>
                    setClientRequirements({
                      ...clientRequirements,
                      requirements: {
                        ...clientRequirements.requirements,
                        stiffnessIndication: e.target.value,
                      },
                    })
                  }
                >
                  <option hidden disabled>
                    {" "}
                    Seleccione{" "}
                  </option>
                  <option value="Aumentar"> Aumentar </option>
                  <option value="Mantener"> Mantener </option>
                  <option value="Disminuir"> Disminuir </option>
                </Select>
              </div>
            </Td>

            <Td>
              <div style={{ display: "flex" }}>
                <Select
                  value={clientRequirements.requirements.heightIndication}
                  onChange={(e) =>
                    setClientRequirements({
                      ...clientRequirements,
                      requirements: {
                        ...clientRequirements.requirements,
                        heightIndication: e.target.value,
                      },
                    })
                  }
                >
                  <option hidden disabled>
                    {" "}
                    Seleccione{" "}
                  </option>
                  <option value={"Aumentar"}> Aumentar </option>
                  <option value={"Mantener"}> Mantener </option>
                  <option value={"Disminuir"}> Disminuir </option>
                </Select>
              </div>
            </Td>
          </tr>
          <tr>
            <Td>
              <div style={{ display: "flex" }}>
                <Select
                  value={clientRequirements.requirements.stiffnessVariation}
                  onChange={(e) =>
                    setClientRequirements({
                      ...clientRequirements,
                      requirements: {
                        ...clientRequirements.requirements,
                        stiffnessVariation: e.target.value,
                      },
                    })
                  }
                >
                  <option> -- </option>
                  <option value={5}> 5 a 10% (muy leve)</option>
                  <option value={12}> 12 a 15% (leve)</option>
                  <option value={16}> 16 a 25% (moderado)</option>
                  <option value={26}> 26 a 35% (alto)</option>
                  <option value={36}> 36% a mas (muy alto)</option>
                </Select>
              </div>
            </Td>
            <Td>
              <Cell
                type="number"
                value={clientRequirements.requirements.heightVariation}
                onChange={(e) =>
                  setClientRequirements({
                    ...clientRequirements,
                    requirements: {
                      ...clientRequirements.requirements,
                      heightVariation: e.target.value,
                    },
                  })
                }
              ></Cell>
            </Td>
          </tr>
        </tbody>
      </ReqTable>
    </div>
  );
}
