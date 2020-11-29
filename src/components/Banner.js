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

	const Banner = styled.div`
		
	`;

	const BannerImage = styled.figure``;

	const Content = styled.div``;

	const Heading = styled.div``;

	const Copy = styled.div``;

	return (
		<BackgroundImage
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
		</BackgroundImage>

	)

}
