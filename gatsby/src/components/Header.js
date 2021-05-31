import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled, { css } from "styled-components"
import Img from "gatsby-image"
import Navigation from "./Navigation"
import Search from "./Search"

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== "undefined"

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "carrigtwohill-baptist-group-logo.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 300) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      allSanityMenu(filter: {sanityId: {eq: "main"}}) {
        edges {
          node {
            id
            title
            sanityId
            menuItems {
              text
              menuItemUrl {
                externalContent
                linkUrl
              }
              submenuItems {
                text
                menuItemUrl {
                  externalContent
                  linkUrl
                }
              }
            }
          }
        }
      }
    }
  `)

  let currentPage = ''

  if ( isBrowser ) {
    currentPage = window.location.pathname.replace(/\//g, '')
  }

  // Toggles the mobile menu
  const toggleMobileMenu = () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button'),
          mainNavigation = document.getElementById('main-navigation')

    if ( mobileMenuButton.classList.contains('open') ) {
      mobileMenuButton.classList.remove('open')
    } else {
      mobileMenuButton.classList.add('open')
    }

    if ( mainNavigation.classList.contains('open') ) {
      mainNavigation.classList.remove('open')
    } else {
      mainNavigation.classList.add('open')
    }
  }

  const createDelayedAnimateCSS = () => {
    let styles = ''

    for (let i = 1; i < 20; i++) {
      styles += `
        &:nth-child(${i}) {
          a {
            transition-delay: ${(200 + (20 * i))}ms;
          }
        }
      `
    }

    return css`${styles}`
  }

  const Header = styled.header` 
    width: 100%;
    padding: 10px 0;
    border-top: 5px solid #ab2346;
    //overflow: hidden;
  `

  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 954px;
    margin: 0 auto;
    
    /* Medium only */
    @media screen and (max-width: 63.9375em) {
      padding: 0 15px;
    }
  `

  const Logo = styled(Img)`
    min-width: 112px;
    min-height: 84px;

    img {
      width: 100%;
      height: 100%;
    }
  `

  const MobileMenuButton = styled.button`
    display: none;
    position: relative;
    right: 10px;
    width: 32px;
    height: 30px;
    border: none;
    background: none;
    text-indent: -9999px;
    
    span {
      position: absolute;
      display: block;
      top: 12px;
      left: 0;
      right: 0;
      height: 5px;
      background: #AB2346;
      transition: background 0s 0.3s;
      
      &:before,
      &:after {
        position: absolute;
        display: block;
        left: 0;
        width: 100%;
        height: 5px;
        background-color: #AB2346;
        content: "";
        transition-duration: 0.3s, 0.3s;
        transition-delay: 0.3s, 0s;
      }
      
      &:before {
        top: -10px;
        transition-property: top, transform;
      }
      
      &:after {
        bottom: -10px;
        transition-property: bottom, transform;
      }
    }
    
    &.open {
      span {
        background: transparent;
        &::before, &::after {
          transition-delay: 0s, 0.3s;
        }
        &::before {
          top: 0;
          transform: rotate(45deg);
        }
        &::after {
          bottom: 0;
          transform: rotate(-45deg);
        }
      }
    }

    /* Small only */
    @media screen and (max-width: 39.9375em) {
      display: block;
    }
  `

  const Nav = styled.nav`
    display: flex;

    /* Small only */
    @media screen and (max-width: 39.9375em) {
      flex-direction: column;
      z-index: 1000;
      opacity: 0;
      background: #fafafa;
      position: fixed;
      top: 119px;
      right: -100%;
      left: auto;
      bottom: 0;
      margin: 0;
      width: 100%;
      height: calc(100vh - 119px);
      text-align: left;
      overflow: auto;
      align-content: flex-start;
      transition: left 0.35s ease-out, right 0.35s ease-out, opacity 0.35s ease-out;
      
      &.open {
        left: 0;
        right: auto;
        opacity: 1;
        
        ul {
          li {
            a{
              left: 0;
              opacity: 1;
              transform: scale(1);
            }
          }
        }
      }
    }
  `

  const Menu = styled(Navigation)`
    display: flex;
    margin: 0;
    list-style: none;

    li {
      position: relative;
      margin-left: 20px;
      margin-bottom: 0;

      a {
        text-decoration: none;
        color: #000;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 18px;
        letter-spacing: 0.5px;
      }

      ul {
        position: absolute;
        display: none;
        width: 200px;
        margin: 0;
        padding: 5px 10px;
        background: #fafafa;
        list-style: none;
        border: 1px solid #ccc;
        box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.15);
        z-index: 1000;

        li {
          margin: 0;

          a {
            font-size: 16px;
          }

          &.active {
            a {
              border-bottom: 3px solid #AB2346;
            }
          }
        }

        &:hover { display: block; }
      }

      &.active {
        > a {
          border-bottom: 3px solid #AB2346;
        }
      }

      &:hover {
        ul {
          display: block;
        }
      }
    }

    /* Small only */
    @media screen and (max-width: 39.9375em) {
      margin: 0;
      padding-left: 15px;
      flex-direction: column;
      
      li {
        display: block;
        width: 100%;
        text-align: left;
        margin: 0;
        padding: 5px;
      
        a {
          position: relative;
          display: block;
          font-size: 1.125rem;
          transition: transform 350ms, opacity, 400ms, left 550ms;
          transition-delay: 300ms;
          left: 100%;
          width: 100%;
          opacity: 0;
          transform: scale(1.5);
          color: #0a0a0a;
        }
        
        ul {
            position: relative;  
            display: block;
            width: 100%;
            padding: 0;
            border: none;
            box-shadow: none;
      
            li {
              margin: 5px;
              
              &:last-child { margin-bottom: 0; }
            }
          }
          
        ${createDelayedAnimateCSS()}
      }
    }
  `

  const HeaderSearch = styled.div`
    margin-left: 36px;

    /* Small only */
    @media screen and (max-width: 39.9375em) {
      margin-left: 0;
      padding-left: 15px;
    }
  `

  // TODO add search form
  return (
    <Header>
      <Container>
        <div className={"logo"}>
          <Link to={"/"}>
            <Logo
              loading={"eager"}
              fadeIn={"false"}
              fluid={data.file.childImageSharp.fluid}
              title={"Carrigtwohill Baptist Group"}
              alt={"Carrigtwohill Baptist Group Logo"}
            />
          </Link>
        </div>
        <MobileMenuButton id={"mobile-menu-button"} onClick={toggleMobileMenu}>
          <span>Mobile Menu</span>
        </MobileMenuButton>
        <Nav id={"main-navigation"}>
          <Menu menu={data.allSanityMenu.edges[0].node} currentPage={currentPage} />
          <HeaderSearch>
            <Search />
          </HeaderSearch>
        </Nav>
      </Container>
    </Header>
  )
}
