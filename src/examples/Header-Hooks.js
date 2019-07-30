import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const before = graphql`
  query First {
    site {
      siteMetadata {
        data {
          fname: name
          age
        }
        title
        author
      }
    }
  }
`

const Header = () => {
  const {
    site: { siteMetadata: info },
  } = useStaticQuery(before)

  return (
    <div>
      <h1>author:{info.author}</h1>
      <h1>Title</h1>
    </div>
  )
}

export default Header
