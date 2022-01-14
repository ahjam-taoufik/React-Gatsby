import { Link } from 'gatsby'
import React from 'react'

const Navbar = () => {
    return (
        <nav>
           <h3>Web site </h3>
            <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/projects'>projects</Link>
            </div>
        </nav>
    )
}

export default Navbar
