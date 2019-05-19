import React from "react" 
import Bio from "../components/bio"
import Layout from "../components/layout"

class About extends React.Component {
    render() {
        return (
            <Layout location={this.props.location} title ={"about"}>
                <Bio />
            </Layout>
        )
    }
}

export default About