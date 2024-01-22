import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	//column-gap: 70px;

	> div{
		display: flex;
		flex-direction: column;
		gap: 6px;
		width: 90%;
    color: ${colors.font.text};
	}
	@media(max-width: 1024px){
		display:flex;
		flex-direction:column;
		gap: 0.5rem;
	}
`
export const Input = styled.input`
  width: 60px;
   
  border-radius: 8px 8px 8px 8px;
  border: 1px solid #000;
  background: #FFF;
  //box-shadow: 5px 4px 2px 0px rgba(0, 0, 0, 0.25);
`
export const Input2 = styled.input`
    
  border-radius: 8px 8px 8px 8px;
  border: 1px solid #000;
  background: #FFF;
  //box-shadow: 5px 4px 2px 0px rgba(0, 0, 0, 0.25);
`

export const Label = styled.label`
  display: flex;
  width: 132px;
  justify-content: center;
  align-items: flex-end;
  gap: 25px;
`
export const Div = styled.div`
 display: flex;
 gap: 25px;
 justify-content: center;
`
