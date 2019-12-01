import React from "react"
import { Link } from "gatsby"
import { rhythm } from '../utils/typography';
import '../styles/blog.css';

const Card = (props) => {
    return (
        <Link to={props.node.fields.slug} className="blog-block">
            {/* <div
                style={{
                    display: `flex`,
                    flexDirection: `column`,
                    padding: `20px 10px`,
                    width: `350px`
                }}
            > */}
                <div className="title">
                    {props.title}
                </div>
                <small className="date">
                    {props.node.frontmatter.date}
                </small>
            {/* </div> */}
            <div className="blurb"
                dangerouslySetInnerHTML={{
                  __html: props.node.frontmatter.description || props.node.excerpt,
                }}
            />
        </Link>
    )
}

export default Card;