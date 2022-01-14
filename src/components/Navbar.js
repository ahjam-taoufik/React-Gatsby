import { Link } from 'gatsby'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <h2>Web site ALJIWAR</h2>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/projects'>projects</Link>
            </nav>
        </div>
    )
}

export default Navbar
