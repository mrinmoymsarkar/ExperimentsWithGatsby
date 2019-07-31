import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/image-3.jpeg"
import styled from "styled-components"
import Image from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image-1.jpeg" }) {
      childImageSharp {
        fixed(width: 200, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image-2.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    example: file(relativePath: { eq: "image-2.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
    <Wrapper>
      <article>
        <h3> basic image</h3>
        <img src={img} className="basic"></img>
        <h2>Content</h2>
      </article>
      <article>
        <h3> fixed image/blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed}></Image>
        <h2>Content</h2>
      </article>
      <article>
        <h3> fluid image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid}></Image>
        <h2>Content</h2>
        <div className="small">
          <Image fluid={data.example.childImageSharp.fluid}></Image>
        </div>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto 10rem auto;
  .small {
    width: 200px;
  }
  .basic {
    width: 100%;
  }
  article {
    border: 3px solid red;
    padding: irem 0;
  }
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
`

export default images
