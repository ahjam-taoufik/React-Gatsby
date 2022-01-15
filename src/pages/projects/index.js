import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"

const index = ({data}) => {

  const projects=data.allMarkdownRemark.nodes
  console.log(projects);

  return (
    <Layout>
      <div className={styles.project}>
        <h2>this is a Home page for projects</h2> 
        <h3>List of projects</h3> 
        <div className={styles.projects}>
           {
             projects.map((project)=>(
                <div key={project.id}>
                      <Link to={"/projects/" + project.frontmatter.slug} >
                           <h3 >{project.frontmatter.title}</h3>
                      </Link>
                      <p>{project.frontmatter.stack}</p>
                </div>
             ))
           }

        </div>
      </div>
    </Layout>
  )
}
export default index


export const query=graphql`
query Projectss {
  allMarkdownRemark {
    nodes {
      frontmatter {
        title
        stack
        slug
      }
      id
    }
  }
}
`
