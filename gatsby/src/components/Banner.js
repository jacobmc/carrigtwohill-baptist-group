import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const BackgroundGradient = styled.div`
  background: linear-gradient(
    93.88deg,
    #000000 0%,
    rgba(42, 42, 42, 0.834768) 48.27%,
    rgba(67, 67, 67, 0.736985) 66.49%,
    rgba(126, 126, 126, 0.506307) 86.4%,
    rgba(255, 255, 255, 0) 100%
  );
`

const Content = styled.div`
  max-width: 1152px;
  margin: 0 auto;
  padding: 72px 0;
  color: rgba(252, 252, 252, 0.8);
  
  /* Small only */
  @media screen and (max-width: 39.9375em) {
    padding: 50px 15px;
  }
`

const Heading = styled.h2`
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 45px;
  line-height: 42px;
  letter-spacing: 1px;
  
  /* Small only */
  @media screen and (max-width: 39.9375em) {
    font-size: 36px
  }
`

const Copy = styled.div`
  max-width: 625px;
  font-size: 28px;
  font-weight: 300;
  letter-spacing: 1.5px;
  line-height: 34px;
  
  /* Small only */
  @media screen and (max-width: 39.9375em) {
    font-size: 22px;
    line-height: 28px;
  }
`

export default function Banner() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "carrigtwohill-street.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage tag={"section"} fluid={data.file.childImageSharp.fluid}>
      <BackgroundGradient>
        <Content>
          <Heading>Loved | Forgiven | Giving</Heading>
          <Copy>
            "This is how we know what love is: Jesus Christ laid down his life
            for us. And we ought to lay down our lives for our brothers and
            sisters."
            <br />- 1 John 3:16
          </Copy>
        </Content>
      </BackgroundGradient>
    </BackgroundImage>
  )
}
