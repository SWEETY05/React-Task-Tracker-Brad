import React from 'react'

const Button = ({text, color ,onClick}) => {


    return (
        <div>
            <button onClick={onClick} style={{backgroundColor : color , color: "white"}}>{text} </button>
        </div>
    )
}

export default Button 
