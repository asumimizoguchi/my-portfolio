import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import '../styles/global.css'

export default function Navbar() {
    const data = useStaticQuery(graphql`
        query SiteInfo{
            site {
                siteMetadata {
                    title 
                }
            }
        }
    `)

    const { title } = data.site.siteMetadata

    return (
        <nav class = "Navbar">
            <div class = "title">
                <h2 class ="myName">{ title }</h2>
                <p class = "AsumiPort">Asumi's Online Portfolio</p>
            </div>

            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Works</Link>
            </div>
        </nav>
    )

}