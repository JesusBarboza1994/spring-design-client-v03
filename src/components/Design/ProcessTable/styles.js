import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { typography } from "../../../styles/typography";
import { fonts } from "../../../styles/typography";

export const Table4 = styled.table`
  width: 500px; 
  background-color: ${colors.cell};
  font-family: ${fonts.primary};
  border: 2px solid ${colors.secondary.light};
  border-collapse: collapse;
  border: 2px solid ${colors.secondary.light};
  color: ${colors.font.text};

`
export const Input = styled.input`
  width: 42px;
  height: 18px;
  color:${colors.font.text};
  background-color: ${colors.cell};
  margin: 8px;
  font-family: ${fonts.primary};
  ${typography.text.xs};
  border-style: inset;
  border-radius: 4px;   
`

export const Td_processtable = styled.td`
  height: 36px;  
  text-align: center;
  border: 1px solid ${colors.secondary.light};
  ${typography.text.xs};
`
export const Th3_processtable = styled.th`
  height: 70px;
  ${typography.text.xs};
  border: 1px solid ${colors.secondary.light};
  font-family:${fonts.primary};
  letter-spacing: 1px;
  padding-left: 5px;
  padding-right:5px;
  
`
export const Button4 = styled.button`
  width:125px;
  height:40px;
  margin:20px 0px 0px 20px;
  background-color: ${colors.secondary.dark};
  border-radius:6px;
  font-family:${fonts.primary};
  ${typography.text.xs};
  letter-spacing: 1px;
  line-height: 14px; 
  color: ${colors.font.text}; 
`
export const Button2 = styled.button`
  width: 80px;
  height: 70px;
  border: none;
  background-color: ${colors.button.secondary2};
  font-family: ${fonts.primary};
  ${typography.text.xs};
  font-weight: bold;
  color: ${colors.font.text}; 
`

export const Button3 = styled.button`
  width: 20px;
  height: 70px;
  border: none;
  background-color: ${colors.button.secondary2};
  font-family: ${fonts.primary};
  ${typography.text.xs};
  font-weight: bold;
  color: ${colors.font.text}; 
`