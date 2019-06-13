import Typography from "typography"
import fairyGatesTheme from "typography-theme-wordpress-2016"
import { redirectTo } from "@reach/router";



// delete Wordpress2016.googleFonts

const typography = new Typography(fairyGatesTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
