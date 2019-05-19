import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    // const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div
         style={{
           display: `flex`,
           flexDirection: `column`,
           justifyContent: `space-between`,
           height: `90vh`
         }}
        >
          <div 
            style={{
              background: `#736A76`,
              height: `50%`,
              alignSelf: `flex-start`,
              width: `50%`
            }}
          >
            <h1>Christina Ng</h1>
            <h5>Web Developer building websites that power humanoid robots</h5>
          </div>
          <div
            style={{
              background: `#736A76`,
              height: `40%`,
              alignSelf: `flex-end`,
              width: `50%`
            }}
          >
            <h1>Cool IMage here</h1>
          </div>
        </div>
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
