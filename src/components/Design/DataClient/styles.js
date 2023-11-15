import styled from "@emotion/styled";

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
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
