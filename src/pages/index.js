import React from "react"
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import CallToAction from "../components/CallToAction";

export default function Home() {
  return (
      <Layout>
        <Banner />
        <CallToAction />
      </Layout>
  )
}
