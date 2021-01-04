import React from "react"
import Nav from "./nav"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, children }) => {

  const rootPath = `${__PATH_PREFIX__}/`


    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          // maxWidth: rhythm(24),
          padding: `${rhythm(.5)} ${rhythm(4 / 4)}`,
          // padding: `1% 10%`,
          minHeight: `100vh`,
        }}
        >
        
        <header
          style={{
            // width: `100%`,
            // display: `flex`,
            // height: 

          }}
        >
          <Nav location={location} />
        </header>
        {children}
        {/* <footer>
          © Christina Ng{new Date().getFullYear()}
        </footer> */}
      
      </div>
    )
};

export default Layout
