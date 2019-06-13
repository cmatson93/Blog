import React from "react" 
import Bio from "../components/bio"
import Layout from "../components/layout"
import "../styles/about.css"

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
                        <h1>How can you contact me?</h1>
                        {/* <div className="links"> */}
                            <i className="fab fa-linkedin"></i>
                        {/* </div> */}
                    </div>
                </div>
            </Layout>
        )
    }
}

export default About