import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { typography } from "../../../styles/typography";
import { fonts } from "../../../styles/typography";

export const Table2 = styled.table`
  width: 220px;  
  margin: 10px 0px;
  font-family: ${fonts.primary};
  border-collapse: collapse;
  color: ${colors.secondary.light};
  box-shadow: 5px 4px 2px 0px rgba(0, 0, 0, 0.25);
  //border: 1px solid ${colors.secondary.medium};
`
export const Td = styled.td`
  height: 37px;
  text-align: center;
  width: 40px;
  background: ${colors.cell};
  border: 1px solid ${colors.secondary.medium};
  border-bottom: none;
  border-right: none;
  color: ${colors.font.text};
  ${typography.text.xs}  
`
export const Th3 = styled.th`
  height: 70px;
  background-color: ${colors.secondary.light};
  border: 1px solid ${colors.secondary.medium};
  border-right: none;
  font-family: ${fonts.primary};
  ${typography.text.xs};
  padding-left: 5px;
  padding-right: 5px;
  color: ${colors.font.text};
  font-weight: bold;
  
`