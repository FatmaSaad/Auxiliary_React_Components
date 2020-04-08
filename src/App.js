import React, { Component, Fragment } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import Movies from"./components/movies"
class App extends Component {
	render() {
		return (
			<Fragment>
				<NavBar />
				<main className="container">
					{/* <Counters /> */}
					<Movies></Movies>
				</main>
			</Fragment>
		);
	}
}

export default App;
