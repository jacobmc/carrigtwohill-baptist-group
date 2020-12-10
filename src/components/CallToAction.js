import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

export default function CallToAction() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "group-pic.png" }) {
        childImageSharp {
          fixed(width: 664, height: 430) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const CTA = styled.div`
    position: relative;
    max-width: 954px;
    margin: 45px auto;
  `
  const Image = styled(Img)`
    position: relative;
    margin: 0;

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
  `

  return (
    <CTA>
      <Image
        fixed={data.file.childImageSharp.fixed}
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
