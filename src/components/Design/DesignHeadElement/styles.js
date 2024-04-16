import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { typography } from "../../../styles/typography";
import { fonts } from "../../../styles/typography";

export const Container = styled.div`
 width: 85%;
 display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
 margin: 65px auto 0;
 gap: 15px;
 
 
 @media(max-width: 500px){
	margin: 12px 20px;
 }

`
export const Element = styled.div`

 height: 60px;
 background-color: ${colors.secondary.light};
 border-radius: 16px 16px 0px 0px;
 display: flex;
 align-items: center;
 justify-content: center;
 font-family: ${fonts.primary};
 color: ${colors.font.text};
 ${typography.text.lg};
  font-weight: 600;
`