import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { typography } from "../../../styles/typography";
import { fonts } from "../../../styles/typography";

export const Wrapper = styled.div`
	display: grid;
  
	label{
		margin: 0;
		color: ${colors.font.text};
		margin-bottom: 0.5rem;
		min-width: 170px;
	}
  input{
   width: 70px;
   height: 25px;
   border-radius: 5px;
   color: "black";
  }
	
	@media(max-width: 1024px){
		display:flex;
		flex-direction:column;
		gap: 0.5rem;
	}
`
export const DimentionsContainer = styled.div`
 
 display: grid;
 
 
`

export const Label = styled.label`
 color: ${colors.font.text};
`
export const DivContainer = styled.div`
  position: relative;
  
`
export const Lado = styled.div`
  color: ${colors.font.text}; 
  display: flex;
  justify-content: right;
  margin-right: 130px;
  font-family: ${fonts.primary};
  ${typography.text.md};
  font-weight: bold;
  font-style: italic;
   
`
export const SpanDot = styled.span`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
  :hover {background-color: #717171; }

`
export const Next = styled.a`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  :hover {background-color: rgba(0,0,0,0.8);}
`