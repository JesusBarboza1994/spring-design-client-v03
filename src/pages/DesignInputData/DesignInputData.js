import { ClientData } from "../../components/Design/ClientData";
import { GeneralHeadElement } from "../../components/Design/GeneralHeadElement";
import { ScreenStyle, Wrapper } from "../../components/Home/styles";
import { HeaderElement } from "../../components/SpringType/HeaderElement";


export default function DesignInputData(){
 
    return(
        <ScreenStyle>
             <Wrapper>
               <HeaderElement/>
               <GeneralHeadElement/>
               <ClientData/>
            </Wrapper>

            
        </ScreenStyle>
        

     );
}