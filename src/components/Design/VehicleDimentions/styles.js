import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { typography } from "../../../styles/typography";
import { fonts } from "../../../styles/typography";

export const Wrapper = styled.div`
	display: flex;
  
  >label{
    color: ${colors.font.text};
    width: 60px;
    font-family: ${fonts.primary};
    ${typography.text.sm};
    
  }
  input{
   width: 60px;
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
export const DataContainer = styled.div`
 display: flex;
 column-gap: 30px;
 margin-top: 50px;
 justify-content: center;
 @media(max-width: 1024px){
  display:grid;
  
 }
`

export const DimCont = styled.div`
 display: flex;
 align-items: center;
 gap: 30px;
  
`
export const DivSimul = styled.div`
  display: grid;
  grid-template-columns: auto, auto, auto;
  justify-content: center;
  row-gap: 10px;
  margin-bottom: 25px;
  padding: 0px 20px 20px 20px;
  //min-width: auto;
  max-width: 100%;
  height: auto;
  background-color: ${colors.secondary.light};
  border: 1px solid ${colors.secondary.medium};
  border-radius: 16px;   
  box-shadow:5px 4px 2px 0px rgba(0, 0, 0, 0.25); 
  @media(max-width: 1024px){
		display:grid;
	}	
  
		
`
export const DimEjes= styled.div`
  display: flex;
  gap: 10px 50px;
  padding: 10px;
  margin-bottom: 20px;
  min-width: auto;
  max-width: 1000px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.secondary.light};
  border: 1px solid ${colors.secondary.medium};
  border-radius: 16px;   
  box-shadow:5px 4px 2px 0px rgba(0, 0, 0, 0.25); 
  @media(max-width: 375px){
		display:flex;
    flex-wrap: wrap;
    width: 280px;
}
>label{
  
  color: ${colors.font.text};
  gap: 30px;
  font-family: ${fonts.primary};
  ${typography.text.sm};
  
}
input{
 width: 70px;
 height: 25px;
 border-radius: 5px;
 color: "black";
 //margin-bottom: 0.5rem;

}
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
  justify-content: center;
  font-family: ${fonts.primary};
  ${typography.text.md};
  font-weight: bold;
  font-style: italic;
   
`
