import React from "react"
import { Link, graphql } from "gatsby"
import "../styles/home.css"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Circle from "../svgs/circle";
import Path from "../svgs/path"
import Background from "../svgs/background";
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    // const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Christina Ng" />
          
            {/* <Bio /> */}
            <div className="home-heading">
              {/* <div className="name-row"> */}
                <h1>
                  Hi, I'm Christina Ng 👩‍💻
                </h1>
                {/* <Bio /> */}
              {/* </div> */}
              <h5>
                Frontend Engineer at SoftBank Robotics. <br/>I enjoy building enjoy building cool  
                tools that help advance automation and the adoption of robotics in our everyday lives. 
              </h5>
            </div>
            {/* <h5>Frontend Engineer building websites that power humanoid robots</h5> */}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
