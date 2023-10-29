import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { typography } from "../../../styles/typography";
import { fonts } from "../../../styles/typography";

export const DivSimul = styled.div`
  display: flex;
  grid-template-columns: auto, auto, auto;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: none;
  margin-bottom: 20px;
  margin-top: 10px;
  margin-left: 50px;
  width: 500px;
  height: 146px;
  background-color: ${colors.secondary.dark};
  border-radius: 8px;        
`
export const Paragraph = styled.p`
  block-size: 1px;
  margin-left: 34px;
  margin-bottom: 18px;
  margin-top: 8px;
  font-family: ${fonts.primary};
  ${typography.text.xs};
  color: ${colors.font.text};  
  width: 148px;
`
export const DivCalculo = styled.div`
  width: 40px;
  height: 18px;
  color:${colors.font.text};
  background-color: ${colors.cell};
  margin: 9px;
  font-family: ${fonts.primary};
  ${typography.text.xs};
  line-height: 18px;
  border-radius: 4px;
  border: 2px ${colors.secondary.light};
  border-style:outset;
    
`
export const Div = styled.div`
  display:flex;
  aling-items: center;
  width: 125px;
  height: 40px;
  margin: 3px 16px 8px 16px;
  background: ${colors.cell};
  border: 2px solid ${colors.secondary.light};
  border-radius: 8px;
    
`
export const Label = styled.label`
  height: 20px;
  width: 65px;
  display: block;
  background-color: ${colors.cell};
  margin-top: 8px;
  margin-left: 10px;
  font-family: ${fonts.primary};
  ${typography.text.xs}
  color: ${colors.secondary.light};
            
`
export const InputLDA = styled.input`
  width: 40px;
  height: 18px;
  color: ${colors.font.title};
  background-color: ${colors.tablebackground};
  margin: 9px;
  font-family: ${fonts.primary};
  ${typography.text.xs}
  border-radius: 4px;
  border: 2px ${colors.secondary.light};
  border-style: outset;
`
export const Select = styled.select`
 background-color: ${colors.cell};
 color: ${colors.font.text};
 font-family: ${fonts.primary};
 ${typography.text.xs}
 border: 0px;

`