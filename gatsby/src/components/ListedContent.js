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
	}
	url += content.slug.current

	return (
		<article>
			<figure>
				<a href={url}>
					<img />
				</a>
			</figure>
			<section>
				<h2>{content.title}</h2>
				<p>Description</p>
				<a href={url}>{buttonText}</a>
			</section>
		</article>
	)
}
