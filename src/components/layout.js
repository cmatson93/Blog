import React from "react"
import Nav from "./nav"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, children, footer }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  console.log(footer)
  const FooterSVG = footer

  return (
    <>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          padding: `${rhythm(0.5)} ${rhythm(4 / 4)}`,
          minHeight: `${footer ? "calc(100vh - 170px)" : "100vh"}`,
        }}
      >
        <header>
          <Nav location={location} />
        </header>

        {children}
        {/* <footer>
          © Christina Ng{new Date().getFullYear()}
        </footer> */}
      </div>
      {footer ? (
        <footer style={{}}>
          <FooterSVG />
        </footer>
      ) : null}
    </>
  )
}

export default Layout
