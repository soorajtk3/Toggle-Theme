
import { StyledPanel } from "./styles";
import InnerBox from "./InnerBox";
import { createContext, useState } from "react";
 const ThemeContext = createContext('')

const Panel = ()=>{
const [theme,setTheme]=useState('light')
    return (
        <StyledPanel>
        <div className="mainPanel">
            <ThemeContext.Provider value={theme}>
         <InnerBox/>
         <input checked={theme ==='dark'} type="checkbox" onChange={(e)=>setTheme(e.target.checked ? 'dark' : 'light')}/>
         <label htmlFor="">Use Dark mode</label>
         </ThemeContext.Provider>
        </div>
       
        </StyledPanel>
    )
}
export  {Panel,ThemeContext};