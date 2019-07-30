import React from "react"
import Header from "../examples/Header-Hooks"
import HeaderStatic from "../examples/HeaderStatic"
import { graphql } from "gatsby"

const examples = props => {
  const { name, age } = props.data.site.siteMetadata.person
  return (
    <div>
      Example
      <Header />
      <HeaderStatic />
      <div> name: {name}</div>
      <div> age: {age}</div>
    </div>
  )
}

export const getData = graphql`
  query {
    site {
      siteMetadata {
        person: data {
          name
          age
        }
        title
        author
      }
    }
  }
`

export default examples
