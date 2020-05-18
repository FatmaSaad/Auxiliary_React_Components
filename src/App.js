import React, { Component, Fragment } from "react";
import Counters from "./components/counters";
import Customers from "./components/customers";
import MovieInfo from "./components/movieInfo";
import NotFound from "./components/notFound";
import NavBar from "./components/navbar";
import Rentals from "./components/rentals";
import Movies from "./components/movies";
import LoginForm from "./components/loginForm";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
	render() {
		return (
			<Fragment>
				<NavBar />
				<main className="container">
					<Switch>
						<Route path="/movies/:id" component={MovieInfo}></Route>

						<Route path="/movies" component={Movies}></Route>
						<Route path="/customers" component={Customers}></Route>
						<Route path="/counter" component={Counters}></Route>
						<Route path="/rentals" component={Rentals}></Route>
						<Route path="/login" component={LoginForm}></Route>
						<Route path="/not-found" component={NotFound}></Route>
						<Redirect from="/" exact to="/movies"></Redirect>
						<Redirect to="/not-found"></Redirect>
					</Switch>
				</main>
			</Fragment>
		);
	}
}

export default App;
