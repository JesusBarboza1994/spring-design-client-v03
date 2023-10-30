import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { typography } from "../../../styles/typography";
import { fonts } from "../../../styles/typography";

export const Paragraph3 = styled.p`
  block-size:1px;
  margin-left: 84px;
  margin-bottom: 20px;
  font-family: ${fonts.primary};
  ${typography.text.xs};
  color: ${colors.font.text};  
  width: 450px;
`
export const Textarea = styled.textarea`
 width: 500px;
 height: 40px;
 margin-left: 50px;
 margin-top: 0px;
 border: 2px solid ${colors.secondary.light};
 border-radius: 8px;
 border-top:1px solid ${colors.secondary.light};
 background-color: ${colors.cell};
 color: ${colors.secondary.light};
 font-family: ${fonts.primary};
 ${typography.text.xs};
 padding-left: 30px;

`
export const DescripDiv = styled.div`
  width: 500px; 
  height: 100px; 
  margin-left: 50px;
  margin-bottom: 0px; 
  border: 2px solid ${colors.secondary.light};
  border-radius:8px; 
  border-bottom: 1px solid ${colors.secondary.light};
  border-color: ${colors.secondary.light};
  background-color: ${colors.cell};
  color: ${colors.secondary.light};
  font-family: ${fonts.primary};
  ${typography.text.sm};
  padding: 10px;
`