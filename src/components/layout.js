import React from "react"
import Nav from "./nav"

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
          padding: `1% 5%`,
        }}
      >
        <header
          style={{
            width: `100%`,
            display: `flex`,
            justifyContent: `flex-end`
          }}
        >
          <Nav location={location} />
        </header>
        <main>{children}</main>
        {/* <footer>
          © Christina Ng{new Date().getFullYear()}
        </footer> */}
      </div>
    )
  }
}

export default Layout
