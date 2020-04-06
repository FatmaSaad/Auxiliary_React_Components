import React, { Component, Fragment } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
	render() {
		return (
			<Fragment>
				<NavBar />
				<main ClassName="container">
					<Counters />
				</main>
			</Fragment>
		);
	}
}

export default App;
