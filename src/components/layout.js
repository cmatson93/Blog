import React from "react"
import Nav from "./nav"
import Background from "../svgs/background"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          // maxWidth: rhythm(24),
          // padding: `${rhythm(.5)} ${rhythm(4 / 4)}`,
          padding: `1% 10%`,
          height: `100vh`,
        }}
      >
        
        <header
          style={{
            width: `100%`,
            display: `flex`,
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
  }
}

export default Layout
