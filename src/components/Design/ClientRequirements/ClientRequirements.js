import { useState } from "react"
//import Input from "../../Input"
import { colors } from "../../../styles/colors";
import { Wrapper, Div, ButtonSubir, SignatureContainer, Label } from "./styles"
import TextArea from "./TextArea"
import RequirementsTable from "./RequirementsTable"
import TestTable from "./TestTable"
import LoadConditionsTable from "./LoadConditionsTable"
import { FaRegTrashAlt } from "react-icons/fa";

export function ClientRequirements({ setCounter, counter }) {
  const [clientRequirements, setClientRequirements] = useState(
    JSON.parse(localStorage.getItem("ClientRequirements")) || {
      requirements: {
        stiffnessVariation: "",
        heightVariation: "",
        stiffnessIndication: "",
        heightIndication: ""
      },
      otherRequirements: "",
      reason: "",
      test40: "",
      loadConditions: {
        personWeight: 80,
        roofWeight: 0,
        trunkWeight: 0,
        peoplebyRow: [2, 3, 0, 0, 0],
      },
      observations: "",
      bumpTest: [
        {
          del: 0,
          pos: 0,
          vel: 0,
          comment: "",
        },
        {
          del: 0,
          pos: 0,
          vel: 0,
          comment: "",
        },
        {
          del: 0,
          pos: 0,
          vel: 0,
          comment: "",
        },
        {
          del: 0,
          pos: 0,
          vel: 0,
          comment: "",
        },
        {
          del: 0,
          pos: 0,
          vel: 0,
          comment: "",
        }
      ],
      signature: null,
    });

  const handleChange = (e) => {
    setClientRequirements({
      ...clientRequirements,
      [e.target.id]: e.target.value,
    });
    let acc = 0;
    if (clientRequirements.otherRequirements !== "") acc += 1;
    if (clientRequirements.observations !== "") acc += 1;
    if (clientRequirements.reason !== "") acc += 1;
    if (
      clientRequirements.requirements.stiffnessIndication !== "" &&
      clientRequirements.requirements.heightIndication !== "" &&
      clientRequirements.requirements.stiffnessVariation !== "" &&
      clientRequirements.requirements.heightVariation !== ""
    )
      acc += 1;

    setCounter({
      ...counter,
      ClientRequirements: { quantity: 4, counter: acc },
    });
    localStorage.setItem(
      "ClientRequirements",
      JSON.stringify({ ...clientRequirements, [e.target.id]: e.target.value })
    );
    localStorage.setItem(
      "counter",
      JSON.stringify({
        ...counter,
        ClientRequirements: { quantity: 4, counter: acc },
      })
    );
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Obtiene el primer archivo seleccionado
    const reader = new FileReader(); // Crea un objeto FileReader

    // Maneja el evento load del FileReader
    reader.onload = () => {
      setClientRequirements({
        ...clientRequirements,
        signature: reader.result,
      });
      localStorage.setItem(
        "ClientRequirements",
        JSON.stringify({ ...clientRequirements, signature: reader.result })
      );
    };
    reader.readAsDataURL(file);
  };

    return(
		<Wrapper>
		 <Div>
        <RequirementsTable clientRequirements={clientRequirements} setClientRequirements={setClientRequirements} counter={counter} setCounter={setCounter}/>
        <LoadConditionsTable clientRequirements={clientRequirements} setClientRequirements={setClientRequirements}/>
        <TextArea title="Otros requerimientos:" value={clientRequirements.otherRequirements} onChange={(e)=> handleChange(e)} id={"otherRequirements"}/>
        <TextArea title="Observaciones:" value={clientRequirements.observations} onChange={(e)=> handleChange(e)} id={"observations"}/>
        <TextArea title="Motivo de solicitud" value = {clientRequirements.reason} onChange={(e)=> handleChange(e)} id={"reason"}/>
        <TestTable clientRequirements={clientRequirements} setClientRequirements={setClientRequirements}/>
        <div style={{display: "grid", gap: 10}}>
          <div>
            <Label>Firma del cliente</Label>
            <SignatureContainer>
                {clientRequirements.signature ? (
              <div style={{display: 'flex', gap: 10, alignItems: 'center', position: 'relative'}}>
                <img src={clientRequirements.signature} alt="Imagen seleccionada"/>
                
                <div style={{
                   display: 'flex',
                   justifyContent: 'center',
                   alignItems: 'center',
                   position: 'absolute',
                   width: 30,
                   height: 30,
                   borderRadius: '50%',
                   background: colors.secondary.light,
                   top: 2,
                   right: 5}}>
                  <FaRegTrashAlt onClick={() => setClientRequirements({...clientRequirements, signature: null})}
                  style={{cursor: 'pointer',
                   color: colors.secondary.dark,
                   position: 'absolute',
                   zIndex: 1,
                  }}/>
                </div>
                

              </div>  

              ) : (
                <ButtonSubir htmlFor="signature">
                  <input style={{ display: 'none'}} id="signature" type="file" onChange={handleImageChange} capture="user" accept="image/*"/>
                  Subir firma 
                </ButtonSubir>
              )} 
            </SignatureContainer>
          </div>
          
                    
                
        </div>
                
        
        <TextArea title="Prueba de freno brusco (40 km/h)" value={clientRequirements.test40} onChange={(e)=> handleChange(e)} id={"test40"}/>
                                
      </Div>
    </Wrapper>
  )
}

