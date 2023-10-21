import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";
import { fonts } from "../../styles/typography";

/*componente Calculated Parameters*/ 
export const DivSimul = styled.div`
  display:flex;
  grid-template-columns: auto, auto, auto;
  flex-wrap: wrap;
  justify-content: center;
  row-gap:none;
  margin-bottom:20px;
  margin-top: 10px;
  margin-left: 50px;
  width: 500px;
  height: 146px;
  background-color: ${colors.gray};
  border-radius:8px;        
`
export const Paragraph = styled.p`
  block-size:1px;
  margin-left:34px;
  margin-bottom: 18px;
  margin-top: 8px;
  font-family:"ABeeZee";
  font-size:12px;
  color: ${colors.white};  
  width: 148px;
`
export const DivCalculo = styled.div`
  width:40px;
  height:18px;
  color:${colors.white};
  background-color: ${colors.black};
  margin:9px;
  font-family:"ABeeZee";
  font-size: 12px;
  line-height: 18px;
  border-radius: 4px;
  border: 2px grey;
  border-style:outset;
    
`
export const Div = styled.div`
  display:flex;
  aling-items: center;
  width:125px;
  height:40px;
  margin:3px 16px 8px 16px;
  background: ${colors.black};
  border:2px solid ${colors.grey};
  border-radius:8px;
    
`
export const Label = styled.label`
  height: 20px;
  width: 65px;
  display:block;
  background-color:${colors.black};
  margin-top:8px;
  margin-left: 10px;
  font-family:"ABeeZee";
  font-size: 13px;
  color: ${colors.grey};
            
`

/*componente Simulated Load Control*/ 
export const Table2 = styled.table`
  width: 220px;  
  margin:10px 0px;
  background: black;
  font-family: "ABeeZee";
  border: 2px solid grey;
  border-collapse: collapse;
  color: grey;

`
export const Td = styled.td`
  height: 37.05px;
  text-align: center;
  width: 40px;
  border: 1px solid ${colors.grey};
  font-size: 13px;
    
`
export const Input = styled.input`
  width:42px;
  height:18px;
  color:${colors.white};
  background-color: ${colors.black};
  margin:8px;
  font-family:"ABeeZee";
  font-size: 12px;
  border-style:inset;
  border-radius: 4px;   
`
export const Th3 = styled.th`
  height: 70px;
  font-size: 14px;
  border: 1px solid ${colors.grey};
  font-family:"ABeeZee";
  letter-spacing: 1px;
  padding-left: 5px;
  padding-right:5px;
  
`
export const H2 = styled.h2`
  color: white;
  font-size: 22px;
`
export const Button1 = styled.button`
  width:100px;
  height:40px;
  margin:8px 0px 0px 8px;
  background-color: #363636; 
  border-radius: 6px;
  font-family:"ABeeZee";
  letter-spacing: 1px;
  font-size: 12px;
  color: white;
`
/*componente Control Load Graphic*/ 
export const GraphicContainer = styled.div`
 height:380px;
 width:600px;
 background-color:${colors.white};
 border-radius: 8px;
`

/*componente Long Table*/ 
export const Td_longtable = styled.td`
  height: 36px;
  text-align: center;
  border: 1px solid grey;
  font-size: 13px;
`
/*export const Th3 = styled.th`
  height: 80px;
  font-size: 14px;
  border: 1px solid grey;
  
` */
export const Th = styled.th`
    width: 180px;
    height: 70px;
    //writing-mode: vertical-lr;
    //text-orientation: upright;
    font-size: 14px;
    border: 1px solid grey;
    letter-spacing: 1px;
  
`
export const Input1 = styled.input`
  width:46px;
  height:18px;
  color: white;
  background-color: black;
  margin:5px;
  font-family:"ABeeZee";
  font-size: 13px;
  border-style:inset;
  border-radius: 4px;  
`
export const Th2 = styled.th`
 width: 200px;
 height: 20px;
 text-align: left;
 font-size: 14px;
 letter-spacing: 1px;
 padding: 10px;
 border: 1px solid grey;
 color: grey;
`
export const Length_table = styled.table`
 background-color: black; 
 width:550px;
 //height:270px;
 font-family: "ABeeZee";
 border-collapse: collapse;
 color: grey;
 border: 2px solid grey;
     
`

/*componente Test Strength*/ 
export const DivSimul1 = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap:none;
  margin-bottom:30px;
  margin-top: 40px;
  width: 236px;
  background-color: ${colors.gray};  
  border-radius:8px; 
`   
export const Paragraph1 = styled.p`
  width: 200px;
  block-size:1px;
  margin-bottom: 15px;
  margin-top: 8px;
  font-family:"ABeeZee";
  font-size:12px;
  color: white;  
  width: 148px;
`
export const Input8 = styled.input`
  width:40px;
  height:18px;
  color:white;
  background-color: black;
  margin:9px;
  font-family:"ABeeZee";
  font-size: 12px;
  border-style:inset;
  border-radius: 4px;
  text-align: left;
     
`
export const Div1 = styled.div`
  display:flex;
  aling-items: center;
  width:100px;
  height:40px;
  margin:3px 7px;
  background: black;
  border:2px solid gray;
  border-radius:8px;  
  
`
export const Label1 = styled.label`
  height: 20px;
  width: 30px;
  display:block;
  background-color:black;
  margin-top:8px;
  margin-left: 9px;
  font-family:"ABeeZee";
  font-size: 13px;
  color: gray;
            
`

/*componente Process Table*/ 
export const Table4 = styled.table`
  width:500px; 
  background-color: black;
  font-family: "ABeeZee";
  border: 2px solid ${colors.grey};
  border-collapse: collapse;
  border: 2px solid grey;
  color: ${colors.white};

`
export const Td_processtable = styled.td`
  height: 36px;  
  text-align: center;
  border: 1px solid ${colors.grey};
  font-size: 13px;
`
export const Table1 = styled.table`
  width: 520px;
  height:380px;
  font-family: "ABeeZee";
  border: 2px solid grey;
  border-collapse: collapse;
  color: white;
      
`
export const Input5 = styled.input`
  width:50px;
  height:18px;
  color:${colors.white};
  background-color: ${colors.black};
  margin:5px;
  font-family:"ABeeZee";
  font-size: 13px;
  border-style:inset;
  border-radius: 4px;  
`
export const Input3 = styled.input`
  width:50px;
  background-color:${colors.black};
  color: ${colors.white};
  margin:5px;
  text-align: center;
  border:none;
`
export const Th3_processtable = styled.th`
  height: 70px;
  font-size: 14px;
  border: 1px solid grey;
  font-family:"ABeeZee";
  letter-spacing: 1px;
  padding-left: 5px;
  padding-right:5px;
  
`
export const Th4 = styled.th`
  width: 20px;
  text-align: center;
  font-size: 14px;
  letter-spacing: 1px;
  padding:10px;
  border: 1px solid grey;
  color: ${colors.white};
`
export const Input2 = styled.input`
  width:80px;
  background-color:${colors.black};
  color: ${colors.gray};
  margin:5px;
  text-align: center;
  border:none;
`
export const Label2 = styled.label`
  color: ${colors.white};
  margin: 5px;
  height:15px;
  display: block;
  width: 40px;
  background-color:${colors.black};
  line-height: 15px;
`
export const Tbody = styled.tbody`
  color: ${colors.white};
  display: flex;
  flex-direction: column-reverse;
`
export const Button = styled.button`
  width:125px;
  height:40px;
  margin:3px 12px;
  border-radius:8px;
  background-color: ${colors.back};
  color: ${colors.white};
  
`
export const Button4 = styled.button`
  width:125px;
  height:40px;
  margin:20px 0px 0px 20px;
  background-color: #363636;
  border-radius:6px;
  font-family:"ABeeZee";
  letter-spacing: 1px;
  line-height: 14px; 
  font-size: 12px;
  color: white;
`
export const Button2 = styled.button`
  width:80px;
  height:70px;
  font-size:14px;
  border: none;
  background-color: #5B5B5B;
  font-family: "ABeeZee";
  font-weight: bold;
  color:white
`

export const Button3 = styled.button`
  width:20px;
  height:70px;
  font-size:14px;
  border: none;
  background-color: #5B5B5B;
  font-family: "ABeeZee";
  font-weight: bold;
  color:white
`
/*componente Simulation Data*/ 

export const Paragraph2 = styled.p`
    block-size:1px;
    margin-top: 5px;
    margin-left:30px;
    margin-bottom: 10px;
    font-family:"ABeeZee";
    font-size:12px;
    width: 133px;
    color: ${colors.white};  
`
export const Div2 = styled.div`
    display:flex;
    aling-items: center;
    width:125px;
    height:40px;
    margin:8px 16px 6px 16px;
    background: ${colors.black};
    border:2px solid ${colors.grey}; 
    border-radius:8px;
    
`
export const Select = styled.select`
    background-color: ${colors.black};
    color: ${colors.white};
    font-family:"ABeeZee";
    font-size: 13px;
    border: 0px;

`
 
/*componente Spring Travel Table*/
export const Td1 = styled.td`
  text-align: center;
  width: 40px;
  border: 1px solid ${colors.grey};

`
/*export const Input = styled.input`
  width:50px;
  height:18px;
  color:${colors.black};
  background-color: ${colors.purple};
  margin:8px;
  font-family:"ABeeZee";
  font-size: 13px;
  border-style:inset;
     
` 
export const Th3 = styled.th`
  height: 80px;
  font-size: 14px;
  border: 1px solid ${colors.grey};
  
`
export const Button1 = styled.button`
  width:125px;
  height:40px;
  margin:10px 14px;
  border-radius:8px;
`*/

/*componente Load Control Table*/ 
export const Table3 = styled.table`
  width: 220px;  
  margin:20px 0px;
  background: ${colors.black};
  font-family: ${fonts.primary};
  border: 2px solid ${colors.grey};
  border-collapse: collapse;
  color: ${colors.grey};

`
/*componente Text Area*/ 
export const Paragraph3 = styled.p`
  block-size:1px;
  margin-left: 84px;
  margin-bottom: 20px;
  font-family:"ABeeZee";
  font-size:12px;
  color: ${colors.white};  
  width: 450px;
`
export const Textarea = styled.textarea`
 width: 500px;
 height: 40px;
 margin-left: 50px;
 margin-top: 0px;
 border: 2px solid ${colors.grey};
 border-radius: 8px;
 border-top:1px solid ${colors.grey};
 background-color: ${colors.black};
 color: ${colors.grey};
 font-family: ABeeZee;
 font-size: 12px;
 padding-left: 30px;

`
export const DescripDiv = styled.div`
  width: 500px; 
  height: 100px; 
  margin-left:50px;
  margin-bottom: 0px; 
  border:2px solid ${colors.grey};
  border-radius:8px; 
  border-bottom: 1px solid ${colors.grey};
  border-color: ${colors.grey};
  background-color: ${colors.black};
  color: ${colors.grey};
  font-family:ABeeZee;
  font-size: 14px;
  padding: 10px;
`
/*componente Weight Tolerance*/

export const InputLDA = styled.input`
  width:40px;
  height:18px;
  color:white;
  background-color: black;
  margin:9px;
  font-family:"ABeeZee";
  font-size: 12px;
  border-radius: 4px;
  border: 2px grey;
  border-style:outset;
`
