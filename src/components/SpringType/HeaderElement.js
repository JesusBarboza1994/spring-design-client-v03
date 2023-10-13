//import { colors } from "../../styles/colors";
//import { fonts, typography } from "../../styles/typography";
import { Wrapper, Logo, CompanyName, LogoContainer } from "../Home/style";
import { SpecifyingElement } from "./SpecifyingElement";

export function HeaderElement(){
  
    return(
        <Wrapper>
            <LogoContainer>
             <Logo>MRC</Logo>
             <CompanyName>Mallas, resortes y cables</CompanyName>
            </LogoContainer>

            <div>
             <SpecifyingElement/>
            </div>
            
        </Wrapper>
    );
}