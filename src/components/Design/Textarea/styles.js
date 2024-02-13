import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { typography } from "../../../styles/typography";
import { fonts } from "../../../styles/typography";

export const Wrapper = styled.div`
  display: grid;
  width: auto;
  min-width: 500px;
  height: 200px;
  margin-top: 20px;
  background-color: ${colors.secondary.light};
  border-radius: 16px; 
  justify-content: center;
      
`

export const Paragraph = styled.p`
  
  margin-bottom: 5px;
  margin-top: 10px;
  font-family: ${fonts.primary};
  ${typography.text.xs};
  font-weight: bold;
  color: ${colors.font.text};  
  width: 140px;
  text-align: left;
`
export const Textarea = styled.div`
 width: 420px;
 height: 60px;
 margin-left: 50px;
 border-radius: 0px 0px 8px 8px;
 border-top: 1px solid ${colors.secondary.medium};
 background-color: ${colors.cell};
 color: ${colors.font.text};
 font-family: ${fonts.primary};
 ${typography.text.sm};
`
export const DescripDiv = styled.div`
  width: 440px; 
  height: 60px; 
  border: 1px solid ${colors.secondary.medium};
  border-radius:8px; 
  background-color: ${colors.cell};
  color: ${colors.font.text};
  font-family: ${fonts.primary};
  ${typography.text.sm};
  padding: 10px;
  box-shadow: 5px 4px 2px 0px rgba(0, 0, 0, 0.25);
`