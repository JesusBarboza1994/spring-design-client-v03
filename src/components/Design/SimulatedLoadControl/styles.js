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
export const Td = styled.td`
  height: 37px;
  text-align: center;
  width: 40px;
  border: 1px solid ${colors.secondary.light};
  ${typography.text.xs};
    
`
export const Th3 = styled.th`
  height: 70px;
  border: 1px solid ${colors.secondary.light};
  font-family: ${fonts.primary};
  ${typography.text.xs};
  letter-spacing: 1px;
  padding-left: 5px;
  padding-right:5px;
  
`