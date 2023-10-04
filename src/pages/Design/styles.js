import styled from "@emotion/styled"
import { colors } from "../../styles/colors"

export const Form = styled.form`
  display:flex;
  grid-template-columns: auto, auto, auto;
  justify-content: center;
  row-gap: 6px;
  width: 500px;
  color:white;
`
export const Div = styled.div`
  display:flex;
  aling-items: center;
  width:125px;
  height:40px;
  margin:3px 16px 14px 16px;
  background: black;
  border:2px solid gray;
  border-radius:8px;
  
`
export const Input = styled.input`
  width:40px;
  height:18px;
  color:white;
  background-color: black;
  margin: 9px;
  font-family:"ABeeZee";
  font-size: 12px;
  border-style:inset;
  border-radius: 4px;
  text-align: left;
     
`
export const DivCalculo = styled.div`
  width:40px;
  height:18px;
  color: white;
  background-color: black;
  margin:8px;
  font-family:"ABeeZee";
  font-size: 13px;
  border-style:outset;
`
export const Label = styled.label`
  height: 20px;
  width: 60px;
  display:block;
  background-color:black;
  margin-top:8px;
  margin-left: 10px;
  font-family:"ABeeZee";
  font-size: 13px;
  color: ${colors.grey};
            
`
export const DivSimulForm = styled.div`
  display:flex;
  grid-template-columns: auto, auto, auto;
  flex-wrap: wrap;
  justify-content: center;
  row-gap:none;
  margin-bottom:20px;
  margin-top: 10px;
  margin-left: 50px;
  width: 500px;
  height: 255px;
  background-color: #363636;  
  border-radius:8px;     

`
export const DivSimul = styled.div`
  display:flex;
  grid-template-columns: auto, auto, auto;
  flex-wrap: wrap;
  justify-content: center;
  //column-gap:8px;
  row-gap:none;
  margin-bottom:20px;
  margin-top: 10px;
  margin-left: 30px;
  width: 500px;
  height: 140px;
  background-color: #363636;  
  border-radius:8px;        
`

export const Paragraph = styled.p`
  block-size:1px;
  margin-left:30px;
  margin-bottom: 10px;
  font-family:"ABeeZee";
  font-size:12px;
  color: white;  
  width: 148px;
`
export const Button = styled.button`
  width:125px;
  height:40px;
  margin:3px 12px;
  border-radius:8px;
  background-color: #fc1221c5;
  color: white;
  
`
export const Length_table = styled.table`
  background-color: black; 
  width:500px;
  //height:270px;
  font-family: "ABeeZee";
  border-collapse: collapse;
  color: grey;
  border: 2px solid grey;
  //border-radius: 8px;
          
`

export const Input8 = styled.input`
  width:42px;
  height:18px;
  color:white;
  background-color: black;
  margin:8px;
  font-family:"ABeeZee";
  font-size: 12px;
  border-style:inset;
  border-radius: 4px;
     
`
export const Th = styled.th`
  width: 180px;
  height: 70px;
  //writing-mode: vertical-lr;
  //text-orientation: upright;
  font-size: 14px;
  border: 1px solid grey;
  letter-spacing: 1px;
  //border-radius: 8px;
  
`
export const Th2 = styled.th`
  width: 200px;
  height: 20px;
  text-align: left;
  font-size: 14px;
  letter-spacing: 1px;
  padding: 10px;
  border: 1px solid grey;
  color: grey;
`
export const Td = styled.td`
  text-align: center;
  //width: 55px;
  border: 1px solid grey;
  
`
// export const Table2 = styled.table`
//   width:210px;
//   height:210px;
//   font-family: "ABeeZee";
//   border: 2px solid grey;
//   border-collapse: collapse;
//   color: grey;

// `
export const Select = styled.select`
  background-color: black;
  color: white;
  font-family:"ABeeZee";
  font-size: 13px;
  border: 0px;
  margin-left: 0px;

`
export const H1 = styled.h1`
 
 color: white;
 font-size: 22px;
 margin-left: 50px;
 margin-top: 20px;
 font-family:"Inter";
 font-style: italic;
`

export const H2 = styled.h2`
color: white;
font-size: 18px;
margin-top: 40px;
font-family:"Inter";
font-style: italic;
`

export const Canvas = styled.canvas`
 background-color: white;
 width: 500px;
 height: 300px;
 margin-bottom:20px;
 margin-top: 20px;
 margin-left: 50px;
 border-radius: 8px;
`