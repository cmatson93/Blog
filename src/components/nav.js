import React from "react"
import Tab from "./tab"
import Bio from "./bio"
const Nav = () => {
    return (
        <div 
            style={{
                display: `flex`,
                justifyContent: `flex-end`,
                width: `100%`,
                height: `3rem`
            }}
        >
            <div
                style={{
                    display: `flex`,
                    justifyContent: `space-around`,
                    width: `25%`
                }}
            >
                <Tab name="Home" path={`/`} />
                <Tab name="About" path={`/about`} />
                <Tab name="Blog" path={`/blog`} /> 
            <Bio />

            </div>
        </div>
    )
}

export default Nav;