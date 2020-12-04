import React from "react"
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import CallToAction from "../components/CallToAction";
import Card from "../components/Card";
import styled from "styled-components";

export default function Home() {

	const Featured = styled.section`
        display: flex;
        justify-content: center;
        align-items: center;
        background: #037971;
        padding: 35px 0;
        
        > *:first-child {
        	margin-right: 65px;
        }
    `

	return (
		<Layout>
			<Banner/>
			<CallToAction/>
			<Featured>
				<Card
					type={"news"}
					title={"In person Bible study resumes"}
					description={"Our weekly Bible study is returning on Wednesday, 21st of October."}
				/>
				<Card
					type={"article"}
					title={"Anger, Panic, And the Psalms"}
					description={"Halloween is coming soon, but I'm not interested. The celebration of demons and death..."}
				/>
			</Featured>
		</Layout>
	)
}
