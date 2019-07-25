import React from "react" 
import Bio from "../components/bio"
import Layout from "../components/layout"
import "../styles/about.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Icon from '../components/icon'
import { faLinkedin, faGithub, faTwitter, faReact, faCss3, faJsSquare, faBootstrap, faJenkins, faGitSquare, faHtml5, faNodeJs, faPython, faSass } from '@fortawesome/free-brands-svg-icons' 
import { faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons'

class About extends React.Component {
    render() {
        return (
            <Layout location={this.props.location} title ={"about"}>
                <div className="about-container">
                    <div className="block">
                        <h1>Who am I?</h1>
                        <h4>
                            My name is Christina Ng. I grew up in a small town outside Kansas City MO.
                            I'm passionate about using technology to build cool things to help make our world a better place. 
                            
                        </h4>
                    </div>
                    <div className="block">
                        <h1>What do I do?</h1>
                        <h4>
                            I currently work at Softbank Robotics as a Frontend Engineer. 
                            Most of my time is spent working on our CMS that allows customers to put
                            their content on one of our Robots Pepper!
                        </h4>
                    </div>
                    <div className="block">
                        <h1>What are my skills?</h1>
                        <div className="links">
                            <Icon 
                                icon={faReact} 
                                name="react-icon"
                                placement="bottom"
                                text="React"
                            />
                            <Icon 
                                icon={faCss3} 
                                name="css-icon"
                                placement="bottom"
                                text="CSS"
                            />
                            <Icon 
                                icon={faBootstrap} 
                                name="bootstrap-icon"
                                placement="bottom"
                                text="Bootstrap"
                            />
                            <Icon 
                                icon={faGitSquare} 
                                name="git-icon"
                                placement="bottom"
                                text="Git"
                            />
                            <Icon 
                                icon={faHtml5} 
                                name="html-icon"
                                placement="bottom"
                                text="HTML5"
                            />
                            <Icon 
                                icon={faJenkins} 
                                name="jenkins-icon"
                                placement="bottom"
                                text="Jenkins"
                            />
                            <Icon 
                                icon={faNodeJs} 
                                name="node-icon"
                                placement="bottom"
                                text="NodeJs"
                            />
                            <Icon 
                                icon={faPython} 
                                name="python-icon"
                                placement="bottom"
                                text="Python"
                            />
                            <Icon 
                                icon={faSass} 
                                name="sass-icon"
                                placement="bottom"
                                text="SASS"
                            />
                        </div>
                    </div>
                    <div className="block">
                        <h1>Whant to see my work?</h1>
                        <div className="links">
                            <p>ZoomAdmin</p>
                            <p>MADE CMS</p>
                            <p>Cool Game</p>
                        </div>
                    </div>
                    <div className="block">
                        <h1>How to contact me?</h1>
                        <div className="social-links">
                            <FontAwesomeIcon icon={faLinkedin}/>
                            <FontAwesomeIcon icon={faGithub}/>
                            <FontAwesomeIcon icon={faTwitter}/>
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default About