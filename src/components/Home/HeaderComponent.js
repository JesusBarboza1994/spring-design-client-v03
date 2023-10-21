import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { fonts, typography } from "../../styles/typography";
import { LoginComponent } from "./LoginComponent";
import { Wrapper, Logo, CompanyName, LogoContainer } from "./styles";

export function Header(){
  
    return(
        <Wrapper>
            <LogoContainer>
             {/*<Logo>MRC</Logo>*/}
             <img src="/Images/MRC1.png" align="left" hspace="0px" width="150px" />
             <CompanyName>Mallas, resortes y cables</CompanyName>
            </LogoContainer>

            <div style={{width:"auto", }}>
             <LoginComponent/>
            </div>
            
        </Wrapper>
    )
}