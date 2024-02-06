import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { typography } from "../../../styles/typography";
import { fonts } from "../../../styles/typography";

export const Table4 = styled.table`
  width: 500px; 
  font-family: ${fonts.primary};
  border-collapse: collapse;
  border: 2px solid ${colors.secondary.light};
  color: ${colors.font.text};

`
export const Input = styled.input`
  width: 46px;
  height: 18px;
  color:${colors.font.text};
  background-color: ${colors.cell};
  margin: 5px;
  font-family: ${fonts.primary};
  ${typography.text.xs};
  border-style: inset;
  border-radius: 4px;   
`

export const Td_processtable = styled.td`
  height: 36px;  
  text-align: center;
  background-color: ${colors.cell};
  border: 1px solid ${colors.secondary.medium};
  ${typography.text.xs};
  color: ${colors.font.text};
`
export const Th3_processtable = styled.th`
  height: 70px;
  ${typography.text.xs};
  border: 1px solid ${colors.secondary.medium};
  border-top: none;
  font-family:${fonts.primary};
  padding-left: 5px;
  padding-right:5px;
  font-weight: bold;
  
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
  color: ${colors.font.title}; 
`
export const Button2 = styled.button`
  width: 80px;
  height: 70px;
  border: none;
  background-color: ${colors.secondary.light};
  font-family: ${fonts.primary};
  ${typography.text.xs};
  font-weight: bold;
  color: ${colors.font.text}; 
`

export const Button3 = styled.button`
  width: 20px;
  height: 70px;
  border: none;
  background-color: ${colors.secondary.light};
  font-family: ${fonts.primary};
  ${typography.text.xs};
  font-weight: bold;
  color: ${colors.font.text}; 
`