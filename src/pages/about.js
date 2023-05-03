import { graphql, Link } from 'gatsby'
import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/about.module.css'
import Img from 'gatsby-image'


export default function About({ data }){
    console.log(data)
    const about = data.about.nodes
    const contact = data.contact.siteMetadata.contact

    return (      

        <Layout>
        <div>
            <h1 className={styles.about}>ABOUT ME</h1>
            <div className={styles.projects}>
                <p1>My name is Asumi, and I'm a computer science student at Eastern Kentucky University. Originally from Japan, I spent my formative years there before moving to the United States to pursue my education. During my time in college, I had the opportunity to teach Scratch programming to elementary and junior high school students, which was a fulfilling experience that taught me the importance of clear communication and pedagogy.
                    As for my technical skills, I have experience with a variety of programming languages, including Java, C#, HTML, CSS, and JavaScript. I've worked on several projects following the waterfall model, including an ATM online system and a loyalty program using Visual Studio, as well as web development.
                </p1>
                <p2>In the future, my goal is to create a system that helps people with mental illnesses who may not have easy access to hospitals or treatment centers. I believe that technology can be used to break down barriers and provide care to those who need it most. My ultimate aspiration is to contribute to making people all over the world happy through technology. Additionally, I hope to travel the world and experience different cultures, cuisines, and landscapes.</p2>
                <p3>Currently, I'm working on creating my portfolio website to showcase my skills and projects. I'm excited to share my work with others and continue to learn and grow as a developer!</p3> 
                <p4>I love my two dogs, Gummy, anime, and the people around me.</p4>
            </div>
              
            <p className={styles.contact}>Please feel free to contact me at { contact } </p>
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