import React from 'react'
import Navbar from './Navbar'

const Layout = (props) => {
    return (
        <div>
           <h2>Web Site ALJIWAR</h2>
           <Navbar/>
           <section>
              {props.children}
           </section>
            
        </div>
    )
}

export default Layout
