import { useState } from "react"
import { Content, TitleContainer} from "./styles"
import { BsPatchCheckFill } from "react-icons/bs";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { colors } from "../../../styles/colors"

export function DataTypeDesign({text, Data, counter}){
	const [ showData, setShowData ] = useState(false)
	return(
		<Content>
			<TitleContainer onClick={()=>setShowData(!showData)}>
				{
					showData ? 
					<MdKeyboardArrowUp 
					style={{scale: "2", color:colors.icon}}/>
					:
					<MdKeyboardArrowDown style={{scale: "2", color:colors.icon}}/>
				}
				<p>{text}</p>
				{(counter && counter.quantity === counter.counter && counter.quantity !== 0) && <BsPatchCheckFill style={{color:"green", scale: "1.2"}}/>}
			</TitleContainer>
			{
				showData && Data
			}
		</Content>
	)
}


