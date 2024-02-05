import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { typography } from "../../../styles/typography";
import { fonts } from "../../../styles/typography";

export const Table2 = styled.table`
  width: 220px;  
  margin: 10px 0px;
  font-family: ${fonts.primary};
  //border: 2px solid ${colors.secondary.light};
  border-collapse: collapse;
  color: ${colors.secondary.light};
  border-right: none;
  border-left: none;
`
export const Td = styled.td`
  height: 37px;
  text-align: center;
  width: 40px;
  background: ${colors.cell};
  border: 1px solid ${colors.secondary.medium};
  ${typography.text.sm};
  color: ${colors.font.text};
  ${typography.text.xs}  
`
export const Th3 = styled.th`
  height: 70px;
  background-color: ${colors.secondary.light};
  border: 1px solid ${colors.secondary.medium};
  font-family: ${fonts.primary};
  ${typography.text.xs};
  padding-left: 5px;
  padding-right: 5px;
  color: ${colors.font.text};
  font-weight: bold;
  
`