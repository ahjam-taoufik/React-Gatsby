import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import  * as styles from '../styles/home.module.css'
export default function Home(data) {
 // console.log(data.data.site.siteMetadata);
  const {title, description, copyright }=data.data.site.siteMetadata
  // console.log(title);
  // console.log(description);
  // console.log(copyright);
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>{title}</h2>
          <h3>{description} </h3>
          <p>Desing</p>
          <Link className={styles.btn} to="/projects">Go To Projects</Link>
        </div>
          <img src="/banner.png" style={{maxWidth:'80%'}} ></img>
      </section>
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  site {
    siteMetadata {
      title
      description
      copyright
    }
  }
}


`
