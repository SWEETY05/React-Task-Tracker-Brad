import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title}) => {
    const onClick  = (e) => {
        console.log(e)
    }

    return (
        <header>
            <h1 className='header' style={{color :'green'}}>{title}</h1>

             <Button  text = 'Add Task' color = 'green' onClick = {onClick} />
             
        </header>
    )
}

Header.defaultProps= {
    title:'task tracker'
}

// Header.propTypes={

//     title:PropTypes.string.isRequired,
// }

export default Header
