import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export default function ListedContent({content}) {
	console.log(content)

	// Build type specific elements
	let url = '/',
		buttonText = 'Read More'
	switch (content.contentType) {
		case 'news':
			url = '/news/'
			break
		case 'article':
			url = '/articles/'
			break
		case 'video':
			url = '/videos/'
			buttonText = 'Watch Now'
			break
		case 'event':
			url = '/events/'
			buttonText = 'Learn More'
			break
		default:
			url = '/'
	}
	url += content.slug.current

	const Article = styled.article`
	  display: flex;
	  padding: 50px 0;
	  align-items: center;
	  
	  figure {
	  	margin: 0 25px 0 0;
	  	
		img {
			max-width: 300px;
		}
	  }
	  
	  section {
	  	h2 {
	  		a {
	  			text-decoration: none;
	  			color: #262322;
	  		}
	  	}
	  }
	`
	return (
		<Article>
			{content.featuredImage !== null &&
			<Link to={url}>
				<figure>
					<img
						src={content.featuredImage.asset.url}
						alt={content.featuredImage.alt}
						title={content.featuredImage.title}
					/>
				</figure>
			</Link>
			}
			<section>
				<h2><Link to={url}>{content.title}</Link></h2>
				<p>Description</p>
				<Link to={url}>{buttonText}</Link>
			</section>
		</Article>
	)
}
