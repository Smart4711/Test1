import React from "react"
import ReactDOM from "react-dom"

import { BrowserRouter as Router } from "react-router-dom"

import "./styles.css"

function App() {
	const o = {
		vn: "Kemal",
		nn: "Cubukcu",
	}
	const { vn, nn } = o

	const [state, setState] = React.useState("Klaus")

	return (
		<div className="App">
			<h1>Hello CodeSandbox</h1>
			<h3>It's Magic !</h3>
			<input
				type="text"
				name="eingabe"
				value={state}
				onChange={e => setState(e.target.value)}
				placeholder="Hier eingeben!"
			/>
			<br />
			<br />

			{vn}
			<br />
			{nn}
			<br />
			{state}
		</div>
	)
}

const rootElement = document.getElementById("root")
ReactDOM.render(
	<Router>
		<App />
	</Router>,
	rootElement,
)
