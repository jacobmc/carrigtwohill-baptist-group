import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const CTA = styled.div`
  position: relative;
  max-width: 954px;
  margin: 45px auto;
  
  /* Small only */
  @media screen and (max-width: 39.9375em) {
    max-width: 100%;
    border-top: 30px solid #ab2346;
    margin: 0;
  }
`

const Image = styled(Img)`
  position: relative;
  margin: 0;
  max-width: 664px;

  img {
    margin: 0;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    content: "";
    height: 100%;
    width: 100%;
    box-shadow: inset 0px 0px 10px #eaeaea;
  }
  
  /* Small only */
  @media screen and (max-width: 39.9375em) {
    &::after {
      display: none;
    }
  }
`

const Card = styled.div`
  position: absolute;
  top: calc(50% - 9px);
  right: 0;
  width: 462px;
  padding: 42px 52px;
  background: #ab2346;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  transform: translateY(-50%);
  
  /* Small only */
  @media screen and (max-width: 39.9375em) {
    position: relative;
    top: 0;
    width: 100%;
    padding: 25px 15px;
    box-shadow: none;
    border-radius: 0;
    transform: none;
  }
`

const Heading = styled.h2`
  margin-bottom: 20px;
  font-size: 36px;
  letter-spacing: 1px;
  color: #fcfcfc;
`

const Copy = styled.p`
  margin-bottom: 45px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
  font-size: 28px;
  letter-spacing: 1px;
  line-height: 32px;
  
  /* Small only */
  @media screen and (max-width: 39.9375em) {
    margin-bottom: 25px;
  }
`

const Button = styled(Link)`
  display: block;
  width: 100%;
  max-width: 250px;
  background: #fcfcfc;
  padding: 5px;
  color: #ab2346;
  text-align: center;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  border-radius: 8px;
  
  /* Small only */
  @media screen and (max-width: 39.9375em) {
    max-width: 100%;
  }
`

export default function CallToAction() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "group-photo.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 664) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <CTA>
      <Image
        fluid={data.file.childImageSharp.fluid}
        title={"Bible Study Group Photo"}
        alt={"Photo of the bible study group at a member's home"}
      />
      <Card>
        <Heading>Join Us Weekly</Heading>
        <Copy>Come enjoy a time of Bible study, prayer, and tea.</Copy>
        <Button to={"/about/"}>Learn More</Button>
        {/*TODO Update link*/}
      </Card>
    </CTA>
  )
}
