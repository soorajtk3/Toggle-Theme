
import { StyledPanel } from "./styles";
import InnerBox from "./InnerBox";
import { useState } from "react";
const Panel = ()=>{
const [theme,setTheme]=useState('light')

    return (
        <StyledPanel>
        <div className="mainPanel">
         <InnerBox theme={theme}/>
         <input checked={theme ==='dark'} type="checkbox" onChange={(e)=>setTheme(e.target.checked ? 'dark' : 'light')}/>
         <label htmlFor="">Use Dark mode</label>

        </div>
       
        </StyledPanel>
    )
}
export default Panel;