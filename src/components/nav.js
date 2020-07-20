import React from "react"
import Tab from "./tab"
import Bio from "./bio"
const Nav = () => {
    return (
        <div style={{ display: `flex`, justifyContent: `flex-end` }} >
            <div style={{ display: `flex` }} >
                <Tab name="Home" path={`/`} />
                <Tab name="About" path={`/about`} />
                <Tab name="Blog" path={`/blog`} /> 
            <Bio />
            </div>
        </div>
    )
}

export default Nav;