//import { colors } from "../../styles/colors";
//import { fonts, typography } from "../../styles/typography";
import { Wrapper, Logo, CompanyName, LogoContainer } from "../Home/styles";
import { SpecifyingElement } from "./SpecifyingElement";

export function HeaderElement(){
  
    return(
        <Wrapper>
            <LogoContainer>
             {/*<Logo>MRC</Logo>*/}
             <img src="/Images/MRC1.png" align="left" hspace="0px" width="15%" />
             <CompanyName>Mallas, resortes y cables</CompanyName>
            </LogoContainer>

            <div style={{width: "auto"}}>
             <SpecifyingElement/>
            </div>
            
        </Wrapper>
    );
}