import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { typography } from "../../../styles/typography";
import { fonts } from "../../../styles/typography";

export const Paragraph3 = styled.p`
  block-size:1px;
  margin-left: 75px;
  margin-bottom: 20px;
  font-family: ${fonts.primary};
  ${typography.text.sm};
  color: ${colors.font.title}; 
  font-weight: bold; 
  width: 450px;
`
export const Textarea = styled.textarea`
 width: 500px;
 height: 40px;
 margin-left: 50px;
 margin-top: 0px;
 border-radius: 0px 0px 8px 8px;
 border-top:1px solid ${colors.secondary.light};
 background-color: ${colors.cell};
 color: ${colors.font.text};
 font-family: ${fonts.primary};
 ${typography.text.sm};
 padding-left: 30px;

`
export const DescripDiv = styled.div`
  width: 500px; 
  height: 100px; 
  margin-left: 50px;
  margin-bottom: 0px; 
  //border: 2px solid ${colors.secondary.light};
  border-radius:8px 8px 0px 0px; 
  background-color: ${colors.secondary.light};
  color: ${colors.font.text};
  font-family: ${fonts.primary};
  ${typography.text.sm};
  padding: 10px;
`