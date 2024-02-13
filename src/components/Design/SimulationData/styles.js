import styled from "@emotion/styled";
import { basicColors, colors } from "../../../styles/colors";
import { typography } from "../../../styles/typography";
import { fonts } from "../../../styles/typography";

export const DivSimul = styled.div`
  display: grid;
  //grid-template-columns: auto, auto, auto;
  //flex-wrap: wrap;
  justify-content: center;
  row-gap: none;
  margin-bottom: 20px;
  width: auto;
  min-width: 500px;
  height: 146px;
  background-color: ${colors.secondary.light};
  border-radius: 16px;        
`

export const Paragraph2 = styled.p`
    block-size:1px;
    margin-top: 8px;
    margin-left:34px;
    margin-bottom: 10px;
    font-family: ${fonts.primary};
    ${typography.text.xs};
    font-weight: bold;
    width: 133px;
    color: ${colors.font.text};  
`
export const Div2 = styled.div`
    display: flex;
    aling-items: center;
    width: 125px;
    height: 40px;
    margin: 8px 16px 6px 16px;
    background: ${basicColors.white};
    border:2px solid ${colors.secondary.medium}; 
    border-radius: 8px;
    
`
export const Select = styled.select`
    background-color: ${colors.cell};
    color: ${colors.font.text};
    font-family: ${fonts.primary};
    ${typography.text.xs};
    border: 0px;

`
export const Input = styled.input`
  width: 48px;
  height: 20px;
  color:${colors.font.text};
  background-color: ${colors.cell};
  margin: 8px;
  font-family: ${fonts.primary};
  ${typography.text.xs};
  border-style: inset;
  border-radius: 4px;   
`
export const Label = styled.label`
  height: 20px;
  width: 65px;
  display: block;
  margin-top: 10px;
  margin-left: 10px;
  font-family: ${fonts.primary};
  ${typography.text.xs};
  color: ${colors.font.text};
            
`
export const Button = styled.button`
  width: 125px;
  height: 40px;
  margin: 3px 12px;
  border-radius: 8px;
  background-color: ${colors.button.tertiary};
  color: ${colors.button.text};
  
`