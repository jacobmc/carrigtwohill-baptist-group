import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";

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

	const Background = styled(BackgroundImage)`
		background: linear-gradient(93.88deg, #000000 0%, rgba(42, 42, 42, 0.834768) 48.27%, rgba(67, 67, 67, 0.736985) 66.49%, rgba(126, 126, 126, 0.506307) 86.4%, rgba(255, 255, 255, 0) 100%) center center;
		background-size: cover;
		opacity: 1 !important;
	`;

	const Content = styled.div`
		max-width: 922px;
		margin: 0 auto;
		padding: 72px 0;
		color: rgba(252, 252, 252, 0.8);
	`;

	const Heading = styled.div`
		margin-bottom: 15px;
		font-family: Roboto;
		font-style: normal;
		font-weight: 400;
		font-size: 36px;
		line-height: 42px;
		letter-spacing: 1px;
	`;

	const Copy = styled.div`
		max-width: 480px;
		font-size: 22px;
		font-weight: 300;
		letter-spacing: 1px;
		line-height: 25px;
	`;

	return (
		<Background
			tag={"section"}
			fluid={data.file.childImageSharp.fluid}
		>
			<Content>
				<Heading>Loved | Forgiven | Giving</Heading>
				<Copy>
					"This is how we know what love is: Jesus Christ
					laid down his life for us. And we ought to lay down
					our lives for our brothers and sisters."
					<br />
					- 1 John 3:16
				</Copy>
			</Content>
		</Background>
	)
}
