import React from "react"
import styled from "styled-components";

export default function ContactForm() {
	const Form = styled.form`` // TODO Add styles

	return (
		<Form name={"contact"} method={"POST"} data-netlify={"true"}>
			<label for={"name"}>Name:</label>
			<input type={"text"} name={"name"} value={""} />

			<label for={"email"}>Email:</label>
			<input type={"email"} name={"email"} value={""} />

			<label for={"message"}>Message:</label>
			<textarea name={"message"} />

			<input type={"submit"} value={"Submit"} />
		</Form>
	)
}
