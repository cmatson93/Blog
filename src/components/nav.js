import React from "react"
import Tab from "./tab"

const Nav = () => {
    return (
        <div 
            style={{
                display: `flex`,
                justifyContent: `space-between`,
                width: `20%`
            }}
        >
           <Tab name="Home" path={`/`} />
           <Tab name="About" path={`/about`} />
           <Tab name="Blog" path={`/blog`} /> 
        </div>
    )
}

export default Nav;