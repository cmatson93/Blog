import React from "react"
import "../styles/tab.css"
import { Link } from "gatsby"


const Tab = (props) => {
    const { name, path } = props
    
    return (
      <div className="link-container">
        <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              // color: `black`,
            }}
            to={path}
          >
            {name}
        </Link>
      </div>
    )
}

export default Tab;