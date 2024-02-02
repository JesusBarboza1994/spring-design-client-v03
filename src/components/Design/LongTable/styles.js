import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { typography } from "../../../styles/typography";
import { fonts } from "../../../styles/typography";

export const Td_longtable = styled.td`
  height: 36px;
  text-align: center;
  color: ${colors.font.text};
  background-color: ${colors.cell};
  border: 1px solid ${colors.secondary.medium};
  border-right: none;
  :last-child {
    border-bottom-right-radius: 8px;
  }
  ${typography.text.xs};
  
`
export const Th = styled.th`
    width: 180px;
    height: 70px;
    ${typography.text.xs};
    background-color: ${colors.secondary.light};
    border: 1px solid ${colors.secondary.medium};
    border-top: none;
    color: ${colors.font.text};
    font-weight: bold;
  
`
export const Input1 = styled.input`
  width: 48px;
  height: 20px;
  color: ${colors.font.text};
  background-color: ${colors.cell};
  margin: 5px;
  font-family: ${fonts.primary};
  ${typography.text.xs};
  border-style:inset;
  border-radius: 4px;  
`
export const Length_table = styled.table`
 background-color: ${colors.cell}; 
 width: 550px;
 //height: 270px;
 font-family: ${fonts.primary};
 border-collapse: collapse;
 //color: ${colors.font.text};
 border-radius: 8px;
     
`