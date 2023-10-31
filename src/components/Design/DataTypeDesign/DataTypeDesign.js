import { useState } from "react"
import { Content, TitleContainer} from "./styles"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { colors } from "../../../styles/colors"


export function DataTypeDesign({text, Data}){
	const [ showData, setShowData ] = useState(true)
	return(
		<Content>
			<TitleContainer onClick={()=>setShowData(!showData)}>
				<p>{text}</p>
				{
					showData ? 
					<MdKeyboardArrowUp 
					style={{scale: "2", color:colors.icon}}/>
					:
					<MdKeyboardArrowDown style={{scale: "2", color:colors.icon}}/>
				}
			</TitleContainer>
			{
				showData && Data
			}
		</Content>
	)
}


