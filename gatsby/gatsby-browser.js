export const onClientEntry = () => {
	window.onload = () => {
		const algoliaStyleSheet = document.createElement("link")
		algoliaStyleSheet.rel = "stylesheet"
		algoliaStyleSheet.href = "https://cdn.jsdelivr.net/npm/instantsearch.css@7.4.5/themes/satellite-min.css"
		algoliaStyleSheet.integrity = "sha256-TehzF/2QvNKhGQrrNpoOb2Ck4iGZ1J/DI4pkd2oUsBc="
		algoliaStyleSheet.crossOrigin = "anonymous"
		document.head.appendChild(algoliaStyleSheet)
	}
}
