import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Card from "../components/card"
import FlexGrid from "../components/FlexGrid"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <h3 className="blog-page-title">Posts</h3>
        <div className="blog-container">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return <Card node={node} title={title} />
          })}
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
