import React from "react"
import Layout from "../components/layout"
import "../styles/about.css"
import Triangle from "../svgs/Triangle"

class About extends React.Component {
  footer = () => <Triangle />
  render() {
    return (
      <Layout location={this.props.location} title={"about"} footer={Triangle}>
        <div className="about-container">
          <div className="about-heading">
            <div className="about-heading-text">
              <h1>About me</h1>
              <p>
                Passionate about all things related to building good digital
                products. I'm a software engineer who loves working on the
                frontend at the intersection between the backend data and the
                end user. Currently working at Niantic previously at Lowkey that
                was then acquired by Niantic. Before that I was at Taco Bell and
                SoftBank Robotics.
              </p>
              <p>
                But coding and tech is only a portion of my life. Born and
                raised in Oak Grove Missouri a small town just outside of Kansas
                City I now live in Oakland California with my husband and dog
                Leia. We love playing tennis, board games and video games
                together, some of our favorites can be found in some of my year
                end favorite lists on the blog page.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default About
