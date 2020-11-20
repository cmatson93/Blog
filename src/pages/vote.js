import React from "react"
import "../styles/vote.css"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Vote = () => {
    const data = useStaticQuery(graphql`
        query {
            file(absolutePath: { regex: "/kansas-city-chiefs-logo-transparent.png/" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (

    <div className='container'>
        <div className='top half-circle'>
            <i className='star top-star' id='top-one'></i>
            <i className='star top-star' id='top-two'></i>
            <i className='star top-star' id='top-three'></i>
            <i className='star top-star' id='top-four'></i>
        </div>
        <div className='vote    '>
            <h1 id="vote">Vote</h1>
        </div>
        <div className='bottom half-circle'>
            <i className='star bottom-star' id='top-one'></i>
            <Image 
                fluid={data.file.childImageSharp.fluid}
                alt='Testing img'
                style={{
                    height: '105px',
                    width: '180px',
                    top: '-25px',
                    left: '107px',
                }}
            />
{/* <!--       <div>Arrowhead</div> --> */}
            <i className='star bottom-star' id='bottom-four'></i>
        </div>
    </div>
    )
};



export default Vote;