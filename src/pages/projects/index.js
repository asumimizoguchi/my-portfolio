import { graphql, Link} from 'gatsby'
import React from 'react'
import Layout from "../../components/Layout"
import * as styles from '../../styles/projects.module.css'
import Img from 'gatsby-image'

//This is works pages
export default function Projects({ data }){
  console.log(data)
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
      
      <Layout>
      <div className={styles.pofo}>
          <h1 className={styles.works}>Works</h1>
          <div className={styles.projects}>
              {projects.map(project => (
                  <Link to = {"/projects/" + project.frontmatter.slug} key={project.id}>
                      <div>
                          <h3>{ project.frontmatter.title }</h3>
                          <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                          <p>{ project.frontmatter.stack }</p>
                      </div>
                  </Link>
              ))}
          </div>
          <p>Please feel free to contact me at { contact } </p>
      </div>
      </Layout>
      
  )
}

// export page query
export const query = graphql`

query ProjectsPage {
  projects: allMarkdownRemark(sort: {frontmatter: {title: ASC}} filter: {fileAbsolutePath: {regex: "/(projects)/"}}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
  
`