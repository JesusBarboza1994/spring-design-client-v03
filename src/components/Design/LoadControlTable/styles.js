import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { typography } from "../../../styles/typography";
import { fonts } from "../../../styles/typography";


export const Table2 = styled.table`
  width: 220px;  
  margin: 10px 0px;
  background: ${colors.cell};
  font-family: ${fonts.primary};
  border: 2px solid ${colors.secondary.light};
  border-collapse: collapse;
  color: ${colors.secondary.light};

`
export const Td1 = styled.td`
  text-align: center;
  width: 40px;
  border: 1px solid ${colors.secondary.light};
  color: ${colors.font.text};
`
export const Th3 = styled.th`
  height: 70px;
  ${typography.text.xs}
  border: 1px solid ${colors.secondary.light};
  font-family: ${fonts.primary};
  letter-spacing: 1px;
  padding-left: 5px;
  padding-right:5px;
  color: ${colors.font.title};
  
`
export const Input = styled.input`
  width: 50px;
  height: 20px;
  color:${colors.font.text};
  background-color: ${colors.cell};
  margin: 8px;
  font-family: ${fonts.primary};
  ${typography.text.xs}
  border-style: inset;
  border-radius: 4px;   
`
export const Button1 = styled.button`
  width: 100px;
  height: 40px;
  margin: 8px 0px 0px 8px;
  background-color: ${colors.secondary.dark}; 
  border-radius: 6px;
  font-family: ${fonts.primary};
  ${typography.text.xs};
  letter-spacing: 1px;
  color: ${colors.button.text};
`