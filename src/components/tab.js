import React from "react"
import { Link } from "gatsby"


const Tab = (props) => {
    const { name, path } = props
    
    return (
        <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `black`,
            }}
            to={path}
          >
            {name}
        </Link>
    )
}

export default Tab;