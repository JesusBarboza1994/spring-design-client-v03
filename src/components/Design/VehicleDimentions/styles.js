import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { typography } from "../../../styles/typography";
import { fonts } from "../../../styles/typography";

export const Wrapper = styled.div`
	display: flex;
  
  >label{
    color: ${colors.font.text};
    width: 100px
    font-family: ${fonts.primary};
    ${typography.text.sm};
    
  }
  input{
   width: 70px;
   height: 25px;
   border-radius: 5px;
   color: "black";
   margin-bottom: 0.5rem;

  }
	
	@media(max-width: 1024px){
		display:flex;
		flex-direction:column;
		gap: 0.25rem;
	}
`
export const DimentionsContainer = styled.div`
 
 display: grid;
 gap: 5px;
  
`
export const DivSimul = styled.div`
  display: grid;
  grid-template-columns: auto, auto, auto;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: none;
  margin-bottom: 20px;
  width: auto;
  min-width: 500px;
  height: 200px;
  background-color: ${colors.secondary.light};
  border-radius: 16px;   
  box-shadow:5px 4px 2px 0px rgba(0, 0, 0, 0.25); 
  `
export const Label = styled.label`
 color: ${colors.font.text};
 font-family: ${fonts.primary};
  ${typography.text.md};
  font-weight: bold;
  font-style: italic;
 
`
export const Lado = styled.p`
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
  margin-top: -80px;
  color: black;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  :hover {background-color: white;}
`