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

export function SampleMeasurements() {
  const [dataSample, dispatch] = useReducer(reducer, coilSpringData);

  const handleChange = (field, value) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };

  const handleToggleCheckbox = () => {
    dispatch({ type: 'TOGGLE_CHECKBOX' });
  };

  return (
    <Wrapper>
      {/* ... your existing JSX code ... */}
      <div>
        <Input title="Tipo de suspensión" value={dataSample.suspensionType} onChange={(e) => handleChange('suspensionType', e.target.value)} id="suspensionType" />
        <Input title="Alambre" value={dataSample.wire} onChange={(e)=> handleChange("wire", e.target.value)} id="wire"/>
 			  <Input title="Diam.exterior 1" value={dataSample.outDiam1} onChange={(e)=> handleChange("outDiam1", e.target.value)} id="outDiam1"/>
 				<Input title="Diam.exterior 2" value={dataSample.outDiam2} onChange={(e)=> handleChange("outDiam2", e.target.value)} id="outDiam2"/>
		    <Input title="Nro de vueltas" value={dataSample.coilsNumber} onChange={(e)=> handleChange("coilsNumber", e.target.value)} id="coilsNumber"/>
 				<Div>
          <Label>Extremo 1</Label>
          <Select value={dataSample.endType1} onChange={(e)=> handleChange("endType1", e.target.value)} id="endType1">
            <option value="TASE">TASE</option>
            <option value="TCSE">TCSE</option>
            <option value="TCE">TCE</option>
            <option value="TAE">TAE</option>
          </Select>
          <Select value={dataSample.endDetail11} onChange={(e)=> handleChange("endDetail11", e.target.value)} id="endDetail1">
            <option value="no">--</option>
            <option value="sobrepuesta">sobrepuesta</option>
            <option value="libre">libre</option>
          </Select>
          <Select value={dataSample.endDetail21} onChange={(e)=> handleChange("endDetail21", e.target.value)} id="endDetail2">
          <option value="no">--</option>
          <option value="a nivel">a nivel</option>
          <option value="inclinada">inclinada</option>
          </Select>
          <Select value={dataSample.endDetail31} onChange={(e)=> handleChange("endDetail31", e.target.value)} id="endDetail3">
            <option value="no">--</option>
            <option value="descentrado">descentrado</option>
          </Select>
        </Div>
        <Input title="Luz 1" value={dataSample.gap1} onChange={(e)=> handleChange("gap1", e.target.value)} id="gap1"/>
        <Input title="Vtas red/amp 1" value={dataSample.reducedCoil1} onChange={(e)=> handleChange("reducedCoil1", e.target.value)} id="reducedCoil1"/>
        <Input title="Excentricidad 1" value={dataSample.eccentricity1} onChange={(e)=> handleChange("eccentricity1", e.target.value)} id="eccentricity1"/>     
        <Input title="Grado de inclinación 1" value={dataSample.inclinationAngle1} onChange={(e)=> handleChange("inclinationAngle1", e.target.value)} id="inclinationAngle1"/>

      </div>

      <div>
        <Input title="Origen del resorte" value={dataSample.springOrigin} onChange={(e) => handleChange('springOrigin', e.target.value)} id="springOrigin" />
        <Input title="Longitud" value={dataSample.freeLength} onChange={(e)=> handleChange("freeLength", e.target.value)} id="freeLength"/>
 			 <Input title="Diam.interior 1" value={dataSample.inDiam1} onChange={(e)=> handleChange("inDiam1", e.target.value)} id="inDiam1"/>
 			 <Input title="Diam.interior 2" value={dataSample.inDiam2} onChange={(e)=> handleChange("inDiam2", e.target.value)} id="inDiam2"/>
 			 <Input title="Sentido de vuelta" value={dataSample.wind} onChange={(e)=> handleChange("wind", e.target.value)} id="wind"/>
 			 <Div>
          <Label>Extremo 2</Label>
          <Select value={dataSample.endType2} onChange={(e)=> handleChange("endType2", e.target.value)} id="endType2">
            <option value="TASE">TASE</option>
            <option value="TCSE">TCSE</option>
            <option value="TCE">TCE</option>
            <option value="TAE">TAE</option>
          </Select>
          <Select value={dataSample.endDetail12} onChange={(e)=> handleChange("endDetail12", e.target.value)} id="endDetail12">
            <option value="no">--</option>
            <option value="sobrepuesta">sobrepuesta</option>
            <option value="libre">libre</option>
          </Select>
          <Select value={dataSample.endDetail22} onChange={(e)=> handleChange("endDetail22", e.target.value)} id="endDetail22">
            <option value="no">--</option>
            <option value="a nivel">a nivel</option>
            <option value="inclinada">inclinada</option>
          </Select>
          <Select value={dataSample.endDetail32} onChange={(e)=> handleChange("endDetail32", e.target.value)} id="endDetail32">
            <option value="no">--</option>
            <option value="descentrado">descentrado</option>
          </Select>
        </Div>
        <Input title="Luz 2" value={dataSample.gap2} onChange={(e)=> handleChange("gap2", e.target.value)} id="gap2"/>
        <Input title="Vtas red/amp 2" value={dataSample.reducedCoil2} onChange={(e)=> handleChange("reducedCoil2", e.target.value)} id="reducedCoil2"/>
        <Input title="Excentricidad 2" value={dataSample.eccentricity2} onChange={(e)=> handleChange("eccentricity2", e.target.value)} id="eccentricity2"/>     
        <Input title="Grado de inclinación 2" value={dataSample.inclinationAngle2} onChange={(e)=> handleChange("inclinationAngle2", e.target.value)} id="inclinationAngle2"/>
      
      </div>

      <div>
        <Label>Resorte progresivo NO<Switch onChange={handleToggleCheckbox} size="big" />SI</Label>
        {dataSample.isChecked && (
         <>
          <ProgresiveInput title="Luz 1" value={dataSample.luz1} onChange={(e) => handleChange('luz1', e.target.value)} id="luz1" />
          <ProgresiveInput title="Luz 2" value={dataSample.luz2} onChange={(e) => handleChange('luz2', e.target.value)} id="luz2" />
          <ProgresiveInput title="Luz 3" value={dataSample.luz3} onChange={(e)=> handleChange("luz3", e.target.value)} id="luz3"/>     
         <ProgresiveInput title="Luz 4" value={dataSample.luz4} onChange={(e)=> handleChange("luz4", e.target.value)} id="luz4"/>
         <ProgresiveInput title="Luz 5" value={dataSample.luz5} onChange={(e)=> handleChange("luz5", e.target.value)} id="luz5"/>
         <ProgresiveInput title="Luz 6" value={dataSample.luz6} onChange={(e)=> handleChange("luz6", e.target.value)} id="luz6"/>
         <ProgresiveInput title="Luz 7" value={dataSample.luz7} onChange={(e)=> handleChange("luz7", e.target.value)} id="luz7"/>     
         <ProgresiveInput title="Luz 8" value={dataSample.luz8} onChange={(e)=> handleChange("luz8", e.target.value)} id="luz8"/>
         <ProgresiveInput title="Luz 9" value={dataSample.luz9} onChange={(e)=> handleChange("luz9", e.target.value)} id="luz9"/>
         <ProgresiveInput title="Luz 10" value={dataSample.luz10} onChange={(e)=> handleChange("luz10", e.target.value)} id="luz10"/>
         <ProgresiveInput title="Luz 11" value={dataSample.luz11} onChange={(e)=> handleChange("luz11", e.target.value)} id="luz11"/>     
         <ProgresiveInput title="Luz 12" value={dataSample.luz12} onChange={(e)=> handleChange("luz12", e.target.value)} id="luz12"/>
            
         </>
        )}
      </div>
    </Wrapper>
  );
}