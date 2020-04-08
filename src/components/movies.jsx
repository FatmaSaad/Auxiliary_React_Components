import React, { Component, Fragment } from "react";
import { getMovies } from "../services/fakeMovieService";
import MoviesTable from './moviesTable';
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { paginate } from "../util/paginate";
import { getGenres } from "../services/fakeGenreService";
class Movies extends Component {
	state = {
		movies: [],
		genres: [],
		pageSize: 4,
		currentPage: 1,
		selectedGenre: 1,
	};
	componentDidMount() {
		const genres = [{ name: "All Generes" }, ...getGenres()];
		this.setState({ movies: getMovies(), genres });
	}
	handleDelete = movie => {
		console.log(movie);
		const movies = this.state.movies.filter(m => m._id !== movie._id);
		this.setState({ movies });
	};
	handleLike = movie => {
		const movies = [...this.state.movies];
		const index = movies.indexOf(movie);
		movies[index] = { ...movies[index] };
		movies[index].liked = !movies[index].liked;
		this.setState({ movies });
	};
	handlePageChange = page => {
		this.setState({ currentPage: page });
	};
	handleGenersSelect = genre => {
		console.log(genre);
		this.setState({ selectedGenre: genre, currentPage: 1 });
	};
	render() {
		const count = this.state.movies.length;
		const { pageSize, currentPage, movies, selectedGenre } = this.state;
		if (count === 0) return <p>there are no movies !!!</p>;
		const filterdMovies =
			selectedGenre && selectedGenre._id
				? movies.filter(m => m.genre._id === selectedGenre._id)
				: movies;
		const ThisPageMovies = paginate(filterdMovies, currentPage, pageSize);
		return (
			<div className="row">
				<div className="col-3">
					<ListGroup
						items={this.state.genres}
						onItemSelect={this.handleGenersSelect}
						selectedGenre={this.state.selectedGenre}
						// value="id"
						// text="name"
					/>
				</div>
				<div className="col">
					<h1>there are {filterdMovies.length} movies ! </h1>
					<MoviesTable
						movies={ThisPageMovies}
						onLike={this.handleLike}
						onDelete={this.handleDelete}
					/>
					<Pagination
						itemsCount={filterdMovies.length}
						pageSize={pageSize}
						onPageChange={this.handlePageChange}
						currentPage={currentPage}
					/>
				</div>
			</div>
		);
	}
}

export default Movies;
