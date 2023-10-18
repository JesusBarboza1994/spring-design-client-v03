import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";
import { fonts } from "../../styles/typography";

export const MediumCell = styled.input`
 display: flex;
 width: 150px;
 height: 25px;
 padding: 0px 24px 0px 12px;
 align-items: center;
 flex-shrink: 0;
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
 width: 100%;
 
`
export const CellName = styled.p`
 color: ${colors.black};
 padding: 20px;
 
`