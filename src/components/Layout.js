import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

const Layout = (props) => {
    return (
        <div className='layout'>
           {/* <h2>Web Site ALJIWAR</h2> */}
           <Navbar/>
           <div className='content'>
              {props.children}
           </div>
           <footer>
               <p>Web Site ALJIWAR 2022</p>
           </footer>
            
        </div>
    )
}

export default Layout
