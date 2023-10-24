import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { typography } from "../../../styles/typography";
import { fonts } from "../../../styles/typography";


export const Table2 = styled.table`
  width: 220px;  
  margin: 10px 0px;
  background: ${colors.black};
  font-family: ${fonts.primary};
  border: 2px solid grey;
  border-collapse: collapse;
  color: ${colors.grey};

`
export const Td1 = styled.td`
  text-align: center;
  width: 40px;
  border: 1px solid ${colors.grey};

`
export const Th3 = styled.th`
  height: 70px;
  ${typography.text.xs}
  border: 1px solid ${colors.grey};
  font-family: ${fonts.primary};
  letter-spacing: 1px;
  padding-left: 5px;
  padding-right:5px;
  
`
export const Input = styled.input`
  width: 42px;
  height: 18px;
  color:${colors.white};
  background-color: ${colors.black};
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
  background-color: ${colors.grey}; 
  border-radius: 6px;
  font-family: ${fonts.primary};
  ${typography.text.xs};
  letter-spacing: 1px;
  color: ${colors.white};
`