import styled from "@emotion/styled"
import { colors } from "../../../styles/colors"
import { typography } from "../../../styles/typography"
import { fonts } from "../../../styles/typography"

export const Form = styled.form`
  display:flex;
  grid-template-columns: auto, auto, auto;
  justify-content: center;
  //row-gap: 10px;
  width: 500px;
  color: ${colors.font.text};
`
export const Pform = styled.p`
  block-size: 1px;
  margin-left: 24px;
  margin-bottom: 28px;
  margin-top: 8px;
  font-family: ${fonts.primary};
  ${typography.text.xs};
  font-weight: bold;
  color: ${colors.font.text};  
`
export const Div = styled.div`
  display:flex;
  width:125px;
  height:40px;
  margin:3px 16px 8px 16px;
  align-items: center;
  background: ${colors.cell};
  border:2px solid ${colors.secondary.medium};
  border-radius: 8px;
  
`
export const Input = styled.input`
  width:50px;
  height: 20px;
  color: ${colors.font.text};
  background-color: ${colors.tablebackground}
  margin: 9px;
  font-family: ${fonts.primary};
  ${typography.text.xs};
  border-style:inset;
  border-radius: 4px;
       
`
export const Label = styled.label`
  height: 20px;
  width: 55px;
  display:block;
  //background-color:${colors.tablebackground}
  margin-top: 5px;
  margin-left: 10px;
  justify-content: center;
  font-family: ${fonts.primary};
 ${typography.text.xs};
  color: ${colors.font.text};
            
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
  background-color: ${colors.secondary.light};  
  border-radius:8px;     

`
export const Select = styled.select`
  background-color: ${colors.tablebackground}
  color: ${colors.font.title};
  font-family: ${fonts.primary};
 ${typography.text.xs};
  border: 0px;
  margin-left: 0px;

`