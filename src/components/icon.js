import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faReact, faCss3, faJsSquare, faBootstrap, faJenkins, faGitSquare, faHtml5, faNodeJs, faPython, faSass } from '@fortawesome/free-brands-svg-icons' 
import OverLayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import '../styles/icon.css'

const Icon = (props) => {
    return (
        <OverLayTrigger
            key={props.name}
            placement={props.placement}
            overlay={
                <Tooltip id={`tooltip-${props.placement}`}
                    className="tooltip"
                    style={{
                        backgroundColor: 'var(--color-yellow-gold)',
                        padding: '2px 10px',
                        marginTop: '2px',
                        color: 'var(--color-purple)',
                        borderRadius: 3,
                        ...props.style,
                    }}
                >
                    {props.text}
                </Tooltip>
            }
        >
            {/* // <p>test</p> */}
            <FontAwesomeIcon icon={props.icon} />
         </OverLayTrigger>    
    )
}

export default Icon;