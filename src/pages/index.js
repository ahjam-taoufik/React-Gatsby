import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import  * as styles from '../styles/home.module.css'
export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Web developer</h2>
          <h3>DevOps</h3>
          <p>Desing</p>
          <Link className={styles.btn} to="/projects">Go To Projects</Link>
        </div>
      </section>
    </Layout>
  )
}
