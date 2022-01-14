import { Link } from 'gatsby'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/projects'>projects</Link>
            </nav>
        </div>
    )
}

export default Navbar
