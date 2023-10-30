import { ClientData } from "../../components/Design/ClientData/ClientData";
import { GeneralHeadElement } from "../../components/Design/NavigationComponent/GeneralHeadElement";
import { ScreenStyle, Wrapper } from "../../components/Home/styles";
import { HeaderElement } from "../../components/SpringType/HeaderElement";


export default function DesignInputData(){
 
    return(
        <ScreenStyle>
             
             <Wrapper>
               <HeaderElement/>

               <div style={{display:"flex", flexDirection: "column",  rowGap: 30}}>
                 <GeneralHeadElement/>
                 <ClientData/>

               </div>
               
            </Wrapper>

            
        </ScreenStyle>
        

     );
}