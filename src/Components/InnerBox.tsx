

const InnerBox=({theme}:any)=>{
    
    return(
        <div className={`innerDiv ${theme === 'light' ? 'lightMode' : 'darkMode'}`}>
        <h4>Welcome</h4>
        <button className={`btn ${theme === 'light' && 'lightBtn'}`} >Sign up</button>
        <button className={`btn ${theme === 'light' && 'lightBtn'}`} >Log in</button>

    </div>

    )

};

export default InnerBox