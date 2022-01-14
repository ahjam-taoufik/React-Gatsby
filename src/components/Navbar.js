

import { Link,graphql,useStaticQuery } from "gatsby"
import React from "react"

const Navbar = () => {
const data=useStaticQuery(graphql`
query MyQuery {
  site {
    siteMetadata {
      title
      description
      copyright
    }
  }
}
`)
 const {title}=data.site.siteMetadata

console.log(title);

  return (
    <nav>
      <Link to="/">
        <h3>{title} </h3>
      </Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">projects</Link>
      </div>
    </nav>
  )
}

export default Navbar
