import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { fonts, typography } from "../../styles/typography";

export function Header(){

    const Redcontainer = styled.div`
        width: 100%;
        height: 190px;
        background-color: #BA181B;
        position: absolute;
        top: 0px;
        left: 0px;
    `

    const Logo = styled.h1`
        color: ${colors.white};
        ${typography.head.xl};
        font-weight: 700;
        font-family: ${fonts.secondary};
        font-style: normal;
        line-height: normal;
        letter-spacing: 1px;
        margin: 0px;
    `

    const Name = styled.h2`
        color: ${colors.white};
        ${typography.head.md};
        font-family: ${fonts.secondary};
        letter-spacing: 1px;
        margin: 0px;
    `
    
    
    return(
        <Redcontainer>
            <div style={{marginTop: 50, marginLeft:50}}>
             <Logo>MRC</Logo>
             <Name>Mallas, resortes y cables</Name>
            </div>

        </Redcontainer>
    )
}