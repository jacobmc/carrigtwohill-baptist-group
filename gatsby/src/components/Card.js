import React from "react"
import { Link } from "gatsby"
import {
  HiOutlineSpeakerphone,
  HiOutlineBookOpen,
  HiOutlinePlay,
  HiOutlineCalendar,
} from "react-icons/hi"
import styled from "styled-components"

const Container = styled.div`
    position: relative;
    max-width: 435px;
    min-height: 292px;
    background: #fcfcfc;
    padding: 36px 21px 18px;
    box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
  `

const Header = styled.header`
    display: flex;
    align-items: center;
  `

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    margin-right: 13px;
    background: ${props => props.color ? props.color : "#FFB20F"};
    color: #fcfcfc;
    font-size: 30px;
    border-radius: 50%;
  `

const Heading = styled.h2`
    margin: 0;
    font-size: 35px;
    line-height: 40px;
  `

const Title = styled.h3`
    margin: 20px 0 6px;
    font-size: 28px;
    line-height: 32px;
  `

const Description = styled.p`
    color: rgba(38, 35, 34, 0.7);
    font-size: 22px;
    line-height: 24px;
    margin: 0;
  `

const Links = styled.div`
    position: absolute;
    bottom: 18px;
    right: 21px;
    font-size: 18px;
    line-height: 20px;
  `

export default function Card(props) {
  const { type, title, description } = props
  let iconBackground = null
  let headingText = null

  switch (type) {
    case "news":
      iconBackground = "#FFB20F"
      headingText = "Latest News"
      break
    case "article":
      iconBackground = "#037971"
      headingText = "New Article"
      break
    case "video":
      iconBackground = "#AB2346"
      headingText = "New Video"
      break
    case "event":
      iconBackground = "#2E5CB2"
      headingText = "Upcoming Event"
      break
    default:
      iconBackground = "#FFB20F"
      headingText = "New Resource"
      break
  }

  const renderIcon = type => {
    switch (type) {
      case "news":
        return <HiOutlineSpeakerphone />
      case "article":
        return <HiOutlineBookOpen />
      case "video":
        return <HiOutlinePlay />
      case "event":
        return <HiOutlineCalendar />
      default:
        return <HiOutlineSpeakerphone />
    }
  }

  // TODO Set up links

  return (
    <Container>
      <Header>
        <IconContainer color={iconBackground}>{renderIcon(type)}</IconContainer>
        <Heading>{headingText}</Heading>
      </Header>
      <section>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </section>
      <footer>
        <Links>
          <Link to={"#"}>Read More</Link> | <Link to={"#"}>View All</Link>
        </Links>
      </footer>
    </Container>
  )
}
