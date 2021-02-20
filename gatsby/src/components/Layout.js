import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {
  const GlobalStyle = createGlobalStyle`
    .sr-only {
      border: 0 !important;
      clip: rect(1px, 1px, 1px, 1px) !important;
      -webkit-clip-path: inset(50%) !important;
      clip-path: inset(50%) !important;
      height: 1px !important;
      margin: -1px !important;
      overflow: hidden !important;
      padding: 0 !important;
      position: absolute !important;
      width: 1px !important;
      white-space: nowrap !important;
    }

    a {
      color: #2e5cb2;
      text-decoration-line: underline;
    }
    
    figure {
        position: relative; 

        img {
          display: block;
          width: 100%;
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
    }
  `

  const Layout = styled.div`
    background: #fafafa;
  `

  return (
    <Layout>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </Layout>
  )
}
