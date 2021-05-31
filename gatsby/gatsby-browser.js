const addStylesheet = url => {
	const stylesheet = document.createElement("link")
	stylesheet.rel = "stylesheet"
	stylesheet.href = url
	document.head.appendChild(stylesheet)
}

const addScript = (url, footer = true ) => {
	const script = document.createElement("script")
	script.src = url
	script.async = true
	if ( footer ) {
		document.body.appendChild(script)
	} else {
		document.head.appendChild(script)
	}
}

// export const onClientEntry = () => {
// 	window.onload = () => {
// 		addStylesheet("https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css")
// 		addScript("https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js", false)
// 	}
// }
