import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export default function ListedContent({content}) {
	return (
		<article>
			{content.title}
		</article>
	)
}
