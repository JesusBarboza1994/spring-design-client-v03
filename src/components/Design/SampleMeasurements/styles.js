import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { typography } from "../../../styles/typography";


export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	column-gap: 70px;

	> div{
		display: flex;
		flex-direction: column;
		gap: 6px;
		width: 90%;
	}
	@media(max-width: 1024px){
		display:flex;
		flex-direction:column;
		gap: 0.5rem;
	}
`
export const Label = styled.label`
    color: ${colors.font.text};
	grid-row: 1/5;
	
`

export const Select = styled.select`
    width: 130px;
	height: 30px;
	border-radius: 8px;
	@media(max-width: 640px){
	 height: 25px;
				   
	}

`

export const Div = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	justify-content: start;
	row-gap: 6px;
	column-gap: 126px;

	@media(max-width: 640px){
	 grid-template-columns: auto;
		   		   
	}
`

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 340px;
  label{
	  margin: 0;
	  color: ${colors.font.text};
	  margin-bottom: 0.5rem;
	  min-width: 170px;
  }
  input{
	  width:130px;
	  height: 30px;
	  border-radius: 8px;
  }
  @media(max-width: 640px){
	  flex-direction:column;
	  label{
		  margin-bottom: 4px;
	  }
	  input{
		  height: 25px;
		  width: 50%;
	  }
  }
`