import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import CallToAction from "../components/CallToAction"
import Card from "../components/Card"
import styled from "styled-components"

const Featured = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #037971;
    padding: 35px 0;

    > *:first-child {
      margin-right: 65px;
    }
    
    /* Small only */
    @media screen and (max-width: 39.9375em) {
      flex-direction: column;
      
      > * {
        margin: 0 10px;
        
        &:first-child {
          margin-right: 10px;
          margin-bottom: 35px;
        }
      }
    }
  `

export default function Home() {
  return (
    <Layout>
      <Banner />
      <CallToAction />
      <Featured>
        <Card
          type={"news"}
          title={"In person Bible study resumes"}
          description={
            "Our weekly Bible study is returning on Wednesday, 21st of October."
          }
        />
        <Card
          type={"article"}
          title={"Anger, Panic, And the Psalms"}
          description={
            "Halloween is coming soon, but I'm not interested. The celebration of demons and death..."
          }
        />
      </Featured>
    </Layout>
  )
}
