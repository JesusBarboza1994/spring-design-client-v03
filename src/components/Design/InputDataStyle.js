import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";
import { fonts } from "../../styles/typography";

export const MediumCell = styled.input`
 width: 150px;
 height: 25px;
 border-radius: 8px;
 border: 1px solid ${colors.black};
 background: ${colors.white};

`
export const LargeCell = styled.input`
 width: 300px;
 height: 25px;
 border-radius: 8px;
 border: 1px solid ${colors.black};
 background: ${colors.white};

`

export const GrisContainer = styled.div`
 width: 1230px;
 height: 65px;
 margin-top: 318px;
 margin-left: 104px;
 flex-shrink: 0;   
 border-radius: 18px;
 background: ${colors.greylight};
 display: flex;
 position: relative;
 gap-column: 10px;

`
export const DivElement = styled.div`
 
 display: flex;
 align-items: center;
 column-gap: 60px;
 width: 100%;
 
`
export const CellName = styled.p`
 width: 80px;
 color: ${colors.black};
 padding-left: 20px;
 
`
export const H3 = styled.h3`
 color: ${colors.white};
 letter-spacing: 1px;
 align-self: center;

`
export const SpecifyingElementContainer = styled.div`
 margin-top: 84px;
 margin-right:50px;
 display: flex;
 justify-content: right;
 gap: 10px;
 
`
export const GrisContainer_ClientData = styled.div`
 width: 1230px;
 height: 185px;
 margin-left: 104px;
 flex-shrink: 0;   
 border-radius: 18px;
 background: ${colors.greylight};
 display: flex;
 position: relative;
 gap-column: 10px;

`
export const Element_textmasInput = styled.div`
 
 display: flex;
 align-items: right;
 column-gap: 60px;
 width: 100%;
 
`
export const ThreeInputContainer = styled.div`
 display: flex;
 flex-direction: column;
 row-gap: 5px;
 margin-top: 50px;

`