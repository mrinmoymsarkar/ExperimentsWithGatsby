import React from "react"
import { graphql, StaticQuery } from "gatsby"

const before = graphql`
  query Second {
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

const HeaderStatic = () => {
  return (
    <StaticQuery
      query={before}
      render={data => {
        console.log(data)
        return <div>Hello World: {data.site.siteMetadata.title}</div>
      }}
    >
      Hey I am using static qury
    </StaticQuery>
  )
}

export default HeaderStatic
