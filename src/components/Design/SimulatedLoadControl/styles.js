import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { typography } from "../../../styles/typography";
import { fonts } from "../../../styles/typography";

export const Table2 = styled.table`
  width: 220px;  
  margin: 10px 0px;
  background: ${colors.black};
  font-family: ${fonts.primary};
  border: 2px solid ${colors.grey};
  border-collapse: collapse;
  color: ${colors.grey};

`
export const Td = styled.td`
  height: 37px;
  text-align: center;
  width: 40px;
  border: 1px solid ${colors.grey};
  ${typography.text.xs};
    
`
export const Th3 = styled.th`
  height: 70px;
  border: 1px solid ${colors.grey};
  font-family: ${fonts.primary};
  ${typography.text.xs};
  letter-spacing: 1px;
  padding-left: 5px;
  padding-right:5px;
  
`