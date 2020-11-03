import React from "react"
import { Link } from "gatsby"
import { rhythm } from '../utils/typography';
import '../styles/blog.css';
import RightArrow from "../svgs/arrowRight";

const Card = (props) => {
    return (
        <Link to={props.node.fields.slug} className="blog-block">
            <div className="title">
                {props.title}
            </div>
            <div className="blurb"
                dangerouslySetInnerHTML={{
                  __html: props.node.frontmatter.description || props.node.excerpt,
                }}
            />
            <div className="link-button">
                <p className="blog-link">
                    Read More
                </p>
                <div className="arrow-container">
                    <RightArrow/>
                </div>
            </div>
        </Link>
    )
}

export default Card;