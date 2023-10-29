import styled from "@emotion/styled"
import { colors } from "../../styles/colors"
import { typography } from "../../styles/typography"
import { fonts } from "../../styles/typography"

export const Form = styled.form`
  display:flex;
  grid-template-columns: auto, auto, auto;
  justify-content: center;
  row-gap: 6px;
  width: 500px;
  color: ${colors.font.title};
`
export const Div = styled.div`
  display:flex;
  aling-items: center;
  width:125px;
  height:40px;
  margin:3px 16px 14px 16px;
  background: ${colors.tablebackground}
  border:2px solid ${colors.secondary.dark};
  border-radius:8px;
  
`
export const Input = styled.input`
  width:40px;
  height:18px;
  color: ${colors.font.title};
  background-color: ${colors.tablebackground}
  margin: 9px;
  font-family: ${fonts.primary};
 ${typography.text.xs};
  border-style:inset;
  border-radius: 4px;
  text-align: left;
     
`
export const DivCalculo = styled.div`
  width:40px;
  height:18px;
  color: ${colors.font.title};
  background-color: ${colors.tablebackground}
  margin:8px;
  font-family: ${fonts.primary};
 ${typography.text.xs};
  border-style:outset;
`
export const Label = styled.label`
  height: 20px;
  width: 60px;
  display:block;
  background-color:${colors.tablebackground}
  margin-top:8px;
  margin-left: 10px;
  font-family: ${fonts.primary};
 ${typography.text.xs};
  color: ${colors.secondary.light};
            
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
  background-color: ${colors.secondary.dark};  
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
  background-color: ${colors.secondary.dark};  
  border-radius:8px;        
`

export const Paragraph = styled.p`
  block-size:1px;
  margin-left:30px;
  margin-bottom: 10px;
  font-family: ${fonts.primary};
 ${typography.text.xs};  color: ${colors.font.title};  
  width: 148px;
`
export const Button = styled.button`
  width:125px;
  height:40px;
  margin:3px 12px;
  border-radius:8px;
  background-color: ${colors.button.tertiary};
  color: ${colors.font.title};
  
`
export const Length_table = styled.table`
  background-color: ${colors.tablebackground} 
  width:500px;
  //height:270px;
  font-family: ${fonts.primary};
 ${typography.text.xs}; collapse;
  color: ${colors.secondary.light};
  border: 2px solid ${colors.secondary.light};
  //border-radius: 8px;
          
`

export const Input8 = styled.input`
  width:42px;
  height:18px;
  color:${colors.font.title};
  background-color: ${colors.tablebackground}
  margin:8px;
  font-family: ${fonts.primary};
 ${typography.text.xs};
  border-style:inset;
  border-radius: 4px;
     
`
export const Th = styled.th`
  width: 180px;
  height: 70px;
  //writing-mode: vertical-lr;
  //text-orientation: upright;
  font-size: 14px;
  border: 1px solid ${colors.secondary.light};
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
  border: 1px solid ${colors.secondary.light};
  color: ${colors.secondary.light};
`
export const Td = styled.td`
  text-align: center;
  //width: 55px;
  border: 1px solid ${colors.secondary.light};
  
`
export const Select = styled.select`
  background-color: ${colors.tablebackground}
  color: ${colors.font.title};
  font-family: ${fonts.primary};
 ${typography.text.xs};
  border: 0px;
  margin-left: 0px;

`
export const H1 = styled.h1`
 
 color: ${colors.font.title};
 font-size: 22px;
 margin-left: 50px;
 margin-top: 20px;
 font-family:"Inter";
 font-style: italic;
`

export const H2 = styled.h2`
color: ${colors.font.title};
font-size: 18px;
margin-top: 40px;
font-family:"Inter";
font-style: italic;
`

export const Canvas = styled.canvas`
 background-color: ${colors.font.title};
 width: 500px;
 height: 300px;
 margin-bottom:20px;
 margin-top: 20px;
 margin-left: 50px;
 border-radius: 8px;
`