import React from "react"
import Header from "../examples/Header-Hooks"
import HeaderStatic from "../examples/HeaderStatic"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const examples = props => {
  const { name, age } = props.data.site.siteMetadata.person
  return (
    <Layout>
      Example
      <Header />
      <HeaderStatic />
      <div> name: {name}</div>
      <div> age: {age}</div>
    </Layout>
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
