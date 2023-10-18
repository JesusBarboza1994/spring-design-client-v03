import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { fonts, typography } from "../../styles/typography";
import { LoginComponent } from "./LoginComponent";
import { Wrapper, Logo, CompanyName, LogoContainer } from "./styles";

export function Header(){
  
    return(
        <Wrapper>
            <LogoContainer>
             <Logo>MRC</Logo>
             <CompanyName>Mallas, resortes y cables</CompanyName>
            </LogoContainer>

            <div>
             <LoginComponent/>
            </div>
            
        </Wrapper>
    )
}