import styled from "@emotion/styled";

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
	@media(max-width: 1730px){
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 30px;
	}
	@media(max-width: 1150px){
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
`