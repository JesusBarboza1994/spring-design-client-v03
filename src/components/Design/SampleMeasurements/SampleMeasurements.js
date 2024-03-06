import { useEffect } from "react"
import { colors } from "../../../styles/colors";
import Input from "../../Input"
import ProgresiveInput from "./ProgresiveInput"
import { Wrapper, Select, Label, Div } from "./styles"
import { Switch } from "@mui/material";

import React, { useReducer } from 'react';

const coilSpringData = {
  suspensionType: "",
  wire: "",
  outDiam1: "",
	outDiam2: "",
	coilsNumber: "",
	endType1:"",
  endDetail11: "",
  endDetail21: "",
  endDetail31: "",
  gap1: "",
  reducedCoil1: "",
  eccentricity1: "",
  inclinationAngle1: "",

  springOrigin:"",
  freeLength: "", 
  inDiam1: "",
  inDiam2: "",
  wind: "",
  endType2:"",
  endDetail12: "",
  endDetail22: "",
  endDetail32: "",
  gap2: "",
  reducedCoil2: "",
  eccentricity2: "",
  inclinationAngle2: "",

  luz1: "",
  luz2: "",
  luz3: "",
  luz4: "",
  luz5: "",
  luz6: "",
  luz7: "",
  luz8: "",
  luz9: "",
  luz10: "",
  luz11: "",
  luz12: "",
  isChecked: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'TOGGLE_CHECKBOX':
      return {
        ...state,
        isChecked: !state.isChecked,
      };
    // Add other cases as needed for additional actions
    default:
      return state;
  }
};

export function SampleMeasurements({setCounter, counter}) {
  const [dataSample, dispatch] = useReducer(reducer, localStorage.getItem("SampleMeasurements") ? JSON.parse(localStorage.getItem("SampleMeasurements")): coilSpringData);

  useEffect(()=>{
		let acc = 0
		for (let i in dataSample){
				if(dataSample[i] !== "") acc += 1
		}
		setCounter({...counter, SampleMeasurements: {quantity: Object.keys(dataSample).length, counter: acc}});
  
	}, [])

  const handleChange = (e) => {
    dispatch({ type: 'UPDATE_FIELD', field: e.target.id, value: e.target.value});
    let acc = 0
		for (let i in dataSample){
			if(i === e.target.id){
				if (e.target.value !== "") acc += 1
			}else{
				if(dataSample[i] !== "") acc += 1
			}
		}
		setCounter({...counter, SampleMeasurements: {quantity: Object.keys(dataSample).length, counter: acc}})
		localStorage.setItem("SampleMeasurements", JSON.stringify({...dataSample, [e.target.id]: e.target.value }))
		localStorage.setItem("counter", JSON.stringify({...counter, SampleMeasurements: {quantity: Object.keys(dataSample).length, counter: acc}}))


  };

  const handleToggleCheckbox = () => {
    dispatch({ type: 'TOGGLE_CHECKBOX' });
  };

  return (
    <Wrapper>
      <div>
        <Input title="Tipo de suspensión" value={dataSample.suspensionType} onChange={(e) => handleChange(e)} id="suspensionType" />
        <Input title="Alambre" value={dataSample.wire} onChange={(e)=> handleChange(e)} id="wire"/>
 			  <Input title="Diam.exterior 1" value={dataSample.outDiam1} onChange={(e)=> handleChange(e)} id="outDiam1"/>
 				<Input title="Diam.exterior 2" value={dataSample.outDiam2} onChange={(e)=> handleChange(e)} id="outDiam2"/>
		    <Input title="Nro de vueltas" value={dataSample.coilsNumber} onChange={(e)=> handleChange(e)} id="coilsNumber"/>
 				<Div>
          <Label>Extremo 1</Label>
          <Select value={dataSample.endType1} onChange={(e)=> handleChange(e)} id="endType1">
            <option value="TASE">TASE</option>
            <option value="TCSE">TCSE</option>
            <option value="TCE">TCE</option>
            <option value="TAE">TAE</option>
          </Select>
          <Select value={dataSample.endDetail11} onChange={(e)=> handleChange(e)} id="endDetail11">
            <option value="no">--</option>
            <option value="sobrepuesta">sobrepuesta</option>
            <option value="libre">libre</option>
          </Select>
          <Select value={dataSample.endDetail21} onChange={(e)=> handleChange(e)} id="endDetail21">
          <option value="no">--</option>
          <option value="a nivel">a nivel</option>
          <option value="inclinada">inclinada</option>
          </Select>
          <Select value={dataSample.endDetail31} onChange={(e)=> handleChange(e)} id="endDetail31">
            <option value="no">--</option>
            <option value="descentrado">descentrado</option>
          </Select>
        </Div>
        <Input title="Luz 1" value={dataSample.gap1} onChange={(e)=> handleChange(e)} id="gap1"/>
        <Input title="Vtas red/amp 1" value={dataSample.reducedCoil1} onChange={(e)=> handleChange(e)} id="reducedCoil1"/>
        <Input title="Excentricidad 1" value={dataSample.eccentricity1} onChange={(e)=> handleChange(e)} id="eccentricity1"/>     
        <Input title="Grado de inclinación 1" value={dataSample.inclinationAngle1} onChange={(e)=> handleChange(e)} id="inclinationAngle1"/>

      </div>

      <div>
        <Input title="Origen del resorte" value={dataSample.springOrigin} onChange={(e) => handleChange(e)} id="springOrigin" />
        <Input title="Longitud" value={dataSample.freeLength} onChange={(e)=> handleChange(e)} id="freeLength"/>
 			 <Input title="Diam.interior 1" value={dataSample.inDiam1} onChange={(e)=> handleChange(e)} id="inDiam1"/>
 			 <Input title="Diam.interior 2" value={dataSample.inDiam2} onChange={(e)=> handleChange(e)} id="inDiam2"/>
 			 <Input title="Sentido de vuelta" value={dataSample.wind} onChange={(e)=> handleChange(e)} id="wind"/>
 			 <Div>
          <Label>Extremo 2</Label>
          <Select value={dataSample.endType2} onChange={(e)=> handleChange(e)} id="endType2">
            <option value="TASE">TASE</option>
            <option value="TCSE">TCSE</option>
            <option value="TCE">TCE</option>
            <option value="TAE">TAE</option>
          </Select>
          <Select value={dataSample.endDetail12} onChange={(e)=> handleChange(e)} id="endDetail12">
            <option value="no">--</option>
            <option value="sobrepuesta">sobrepuesta</option>
            <option value="libre">libre</option>
          </Select>
          <Select value={dataSample.endDetail22} onChange={(e)=> handleChange(e)} id="endDetail22">
            <option value="no">--</option>
            <option value="a nivel">a nivel</option>
            <option value="inclinada">inclinada</option>
          </Select>
          <Select value={dataSample.endDetail32} onChange={(e)=> handleChange(e)} id="endDetail32">
            <option value="no">--</option>
            <option value="descentrado">descentrado</option>
          </Select>
        </Div>
        <Input title="Luz 2" value={dataSample.gap2} onChange={(e)=> handleChange(e)} id="gap2"/>
        <Input title="Vtas red/amp 2" value={dataSample.reducedCoil2} onChange={(e)=> handleChange(e)} id="reducedCoil2"/>
        <Input title="Excentricidad 2" value={dataSample.eccentricity2} onChange={(e)=> handleChange(e)} id="eccentricity2"/>     
        <Input title="Grado de inclinación 2" value={dataSample.inclinationAngle2} onChange={(e)=> handleChange(e)} id="inclinationAngle2"/>
      
      </div>

      <div>
        <Label>Resorte progresivo </Label>
        <div style={{color: colors.font.text }}>NO<Switch onChange={handleToggleCheckbox} size="big"/>SI</div>
        {dataSample.isChecked && (
         <>
          <ProgresiveInput title="Luz 1" value={dataSample.luz1} onChange={(e) => handleChange(e)} id="luz1" />
          <ProgresiveInput title="Luz 2" value={dataSample.luz2} onChange={(e) => handleChange(e)} id="luz2" />
          <ProgresiveInput title="Luz 3" value={dataSample.luz3} onChange={(e)=> handleChange(e)} id="luz3"/>     
         <ProgresiveInput title="Luz 4" value={dataSample.luz4} onChange={(e)=> handleChange(e)} id="luz4"/>
         <ProgresiveInput title="Luz 5" value={dataSample.luz5} onChange={(e)=> handleChange(e)} id="luz5"/>
         <ProgresiveInput title="Luz 6" value={dataSample.luz6} onChange={(e)=> handleChange(e)} id="luz6"/>
         <ProgresiveInput title="Luz 7" value={dataSample.luz7} onChange={(e)=> handleChange(e)} id="luz7"/>     
         <ProgresiveInput title="Luz 8" value={dataSample.luz8} onChange={(e)=> handleChange(e)} id="luz8"/>
         <ProgresiveInput title="Luz 9" value={dataSample.luz9} onChange={(e)=> handleChange(e)} id="luz9"/>
         <ProgresiveInput title="Luz 10" value={dataSample.luz10} onChange={(e)=> handleChange(e)} id="luz10"/>
         <ProgresiveInput title="Luz 11" value={dataSample.luz11} onChange={(e)=> handleChange(e)} id="luz11"/>     
         <ProgresiveInput title="Luz 12" value={dataSample.luz12} onChange={(e)=> handleChange(e)} id="luz12"/>
            
         </>
        )}
      </div>
    </Wrapper>
  );
}