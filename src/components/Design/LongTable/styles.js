import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { typography } from "../../../styles/typography";
import { fonts } from "../../../styles/typography";

export const Td_longtable = styled.td`
  height: 36px;
  text-align: center;
  border: 1px solid ${colors.gray};
  ${typography.text.xs};
`
export const Th = styled.th`
    width: 180px;
    height: 70px;
    //writing-mode: vertical-lr;
    //text-orientation: upright;
    ${typography.text.xs};
    border: 1px solid ${colors.gray};
    letter-spacing: 1px;
  
`
export const Input1 = styled.input`
  width: 46px;
  height: 18px;
  color: ${colors.white};
  background-color: ${colors.black};
  margin: 5px;
  font-family: ${fonts.primary};
  ${typography.text.xs};
  border-style:inset;
  border-radius: 4px;  
`
export const Length_table = styled.table`
 background-color: black; 
 width: 550px;
 //height: 270px;
 font-family: ${fonts.primary};
 border-collapse: collapse;
 color: ${colors.gray};
 border: 2px solid ${colors.gray};
     
`