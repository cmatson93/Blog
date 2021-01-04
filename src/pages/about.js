import React from "react" 
import Layout from "../components/layout"
import "../styles/about.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Icon from '../components/icon'
import { faLinkedin, faGithub, faTwitter, faReact, faCss3, faJsSquare, faBootstrap, faJenkins, faGitSquare, faHtml5, faNodeJs, faPython, faSass } from '@fortawesome/free-brands-svg-icons' 
import { faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import OneWheelRobot from "../svgs/OneWheelRobot";
import Triangle from "../svgs/Triangle";

class About extends React.Component {
    render() {
        return (
            <Layout location={this.props.location} title ={"about"}>
                <div className="about-container">   
                    <div className="about-heading">
                        <div className="about-heading-text">
                            <h1>About me</h1>
                            <p>
                                Passionate about all things related to building good digital products. I think robots are pretty cool, with a particular 
                                bias towards Pepper, Nao and Whiz. Where my real skills come into play is when working with UI. I love the intersection the frontend 
                                has with design, backend and end users. 
                            </p>
                            <p>
                                In my free time you can find me hanging out with my husband and dog Leia. We often spend our weekends playing tennis and trying out new returaunts. 
                                Currently living in Oakland, California but I'm a true Midwest girl at heart.    
                            </p>
                        </div>
                        <div className="about-svg-container">
                            {/* <OneWheelRobot /> */}
                        </div>
                    </div>
                    <div className="home-svg-container">
                        <Triangle />
                    </div>
                </div>
            </Layout>
        )
    }
}

export default About