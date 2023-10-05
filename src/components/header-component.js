import styled from "@emotion/styled";
import "@fontsource/inter";
import "@fontsource/work-sans";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";

export function Header(){

    const Redcontainer = styled.div`
        width: 1440px;
        height: 190px;
        background-color: #BA181B;
        position: absolute;
        top: 0px;
    `

    const Logo = styled.h1`
        color: ${colors.white};
        font-size: ${typography.head.xl};
        font-family: ${typography.secondary};
        font-style: normal;
        letter-spacing: 2px;
        margin: 0px;
    `

    const Nombre = styled.h2`
        color: ${colors.white};
        font-size: ${typography.head.md};
        font-family: ${typography.secondary};
        letter-spacing: 2px;
        margin: 0px;
    `
    
    
    return(
        <Redcontainer>
            <div style={{marginTop: 50, marginLeft:50}}>
             <Logo>MRC</Logo>
             <Nombre>Mallas, resortes y cables</Nombre>
            </div>

        </Redcontainer>
    )
}