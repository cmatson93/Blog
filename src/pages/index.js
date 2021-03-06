import React from "react"
import { Link, graphql } from "gatsby"
import "../styles/home.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import OneWheelRobot from "../svgs/OneWheelRobot";
import Tilt from "../svgs/Tilt";
import Icon from "../components/icon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons' 

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Christina Ng" />
          <div className="home-content">
            <div className="home-heading">
                <h1>
                  Hi, I'm Christina Ng 👩‍💻
                </h1>
                <div className="home-bio">
                  <h5>
                    Software Enigineer speciallizing in frontend web development. Currently working at SoftBank Robotics as the Lead Frontend Engineer. 
                  </h5> 
                  <div className="social-icons">
                    <a href="https://www.linkedin.com/in/christina-ng-495720137/" target="_blank">
                      <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                    </a>
                    <a href="https://github.com/cmatson93" target="_blank">
                      <FontAwesomeIcon icon={faGithub} size="2x"/>
                    </a>
                    <a href="https://twitter.com/ChristinaMatson" target="_blank">
                      <FontAwesomeIcon icon={faTwitter} size="2x"/>
                    </a>
                  </div>
                  {/* <h5>
                    In my free time you can find my hanging out with my husband and dog Leia. We often spend our weekends playing tennis and trying out new returaunts. 
                    Currently living in Oakland, California but I'm a true Midwest girl at heart.    
                  </h5> */}
                </div>
            </div>
            <div className="home-svg-container">
              {/* <OneWheelRobot /> */}
              <Tilt />
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
