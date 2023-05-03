import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import * as styles from "../styles/home.module.css"

export default function Home({ data }) {
  console.log(data)
    const about = data.about.nodes
    const contact = data.contact.siteMetadata.contact

    return (      

        <Layout>
        <div>
            <h1 className={styles.iam}>Hello, I'M </h1>
            <h2 className={styles.name}>ASUMI MIZOGUCHI.</h2>
            <div className={styles.projects}>
            {about.map(about => (
              <a href={about.frontmatter.stack} target="_blank" rel="noopener noreferrer" key={about.id}>
                <div>
                  <h3>{about.frontmatter.title}</h3>
                  <Img fluid={about.frontmatter.thumb.childImageSharp.fluid} /> 
                  
                </div>
              </a>
            ))}
            </div>
              
            <p>Please feel free to contact me at { contact } </p>
        </div>
        </Layout>
    )
}

// export page query
export const query = graphql`
query AboutPage {
    about: allMarkdownRemark(sort: {frontmatter: {title: ASC}} filter: {fileAbsolutePath: {regex: "/(about)/"}}) {
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