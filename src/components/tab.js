import React from "react"
import "../styles/tab.css"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"


const Tab = (props) => {
    const { name, path } = props
    
    return (
      <div className="link-container">
        <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              // paddingRight: `8px`
              // marginRight: rhythm(1 / 2),

            }}
            to={path}
          >
            {name}
        </Link> 
      </div>
    )
}

export default Tab;