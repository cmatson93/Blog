import React from "react"
import { Link } from "gatsby"
import { rhythm } from '../utils/typography';

const Card = (props) => {
    return (
        <div
            style={{
                border: `4px solid black`, 
                flex: `1`,
                margin: `5px`,
                padding: `20px`
            }}
        >
            <h3>
                <Link style={{ boxShadow: `none` }} to={props.node.fields.slug}>
                    {props.title}
                </Link>
            </h3>
            <small>{props.node.frontmatter.date}</small>
            <p
                dangerouslySetInnerHTML={{
                  __html: props.node.frontmatter.description || props.node.excerpt,
                }}
            />
        </div>
    )
}

export default Card;