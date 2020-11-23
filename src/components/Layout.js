import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {

	const Layout = styled.div`
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
	`;

	return (
		<Layout>
			<Header />
			{ children }
			<Footer />
		</Layout>
	)
}
