import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { typography } from "../../../styles/typography";
import { fonts } from "../../../styles/typography";

export const DivSimul1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: none;
  margin-bottom: 30px;
  margin-top: 40px;
  width: 236px;
  background-color: ${colors.secondary.light};  
  border-radius: 8px; 

`   
export const DivCalculo = styled.div`
  width: 50px;
  height: 20px;
  color:${colors.font.text};
  background-color: ${colors.cell};
  margin: 8px;
  font-family: ${fonts.primary};
  ${typography.text.xs};
  line-height: 18px;
  border-radius: 4px;
  border: 2px ${colors.secondary.light};
  border-style: outset;
    
`
export const Paragraph1 = styled.p`
  width: 200px;
  block-size: 1px;
  margin-bottom: 15px;
  margin-top: 8px;
  font-family: ${fonts.primary};
  ${typography.text.xs};
  color: ${colors.font.text};  
  font-weight: bold;
  width: 148px;
  text-align: center;
`
export const Input8 = styled.input`
  width:50px;
  height: 20px;
  color:${colors.font.text};
  background-color: ${colors.cell};
  margin: 9px;
  font-family: ${fonts.primary};
  ${typography.text.xs};
  border-style: inset;
  border-radius: 4px;
  text-align: left;
     
`
export const Div1 = styled.div`
  display: flex;
  aling-items: center;
  width: 100px;
  height: 40px;
  margin: 3px 7px;
  background: ${colors.cell};
  border:2px solid ${colors.secondary.light};
  border-radius: 8px;  
  
`
export const Label1 = styled.label`
  height: 20px;
  width: 30px;
  display: block;
  margin-top: 11px;
  margin-left: 10px;
  font-family: ${fonts.primary};
  ${typography.text.xs};
  color: ${colors.font.text};
  font-weight: bold;
            
`