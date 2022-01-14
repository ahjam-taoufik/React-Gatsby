import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
const index = () => {
  return (
    <Layout>
      <div className={styles.project}>
        <h2>this is a Home page for projects</h2> 
        <h3>List of projects</h3> 
      </div>
    </Layout>
  )
}

export default index
