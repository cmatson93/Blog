import React from 'react'

const FlexGrid = (props) => {

    return (
        <div
         style={{
             display: `flex`,
             justifyContent: `space-between`
         }}
        >
            {props.children}
        </div>
    )
}

export default FlexGrid