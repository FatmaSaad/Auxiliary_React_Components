import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import MoviesTable from "./moviesTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { paginate } from "../util/paginate";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";
class Movies extends Component {
	state = {
		movies: [],
		genres: [],
		pageSize: 4,
		currentPage: 1,
		selectedGenre: 1,
		sortColumn: {
			path: "title",
			order: "asc",
		},
	};
	componentDidMount() {
		const genres = [{ _id: "", name: "All Generes" }, ...getGenres()];
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
	handleSort = sortColumn => {
		this.setState({
			sortColumn,
		});
	};
	handlePageChange = page => {
		this.setState({ currentPage: page });
	};
	handleGenersSelect = genre => {
		console.log(genre);
		this.setState({ selectedGenre: genre, currentPage: 1 });
	};
	getData = () => {
		const {
			pageSize,
			currentPage,
			movies: allmovies,
			selectedGenre,
			sortColumn,
		} = this.state;
		const filterdMovies =
			selectedGenre && selectedGenre._id
				? allmovies.filter(m => m.genre._id === selectedGenre._id)
				: allmovies;
		const sorted = _.orderBy(
			filterdMovies,
			[sortColumn.path],
			[sortColumn.order],
		);
		const movies = paginate(sorted, currentPage, pageSize);
		return { totalCount: filterdMovies.length, movies };
	};
	render() {
		const count = this.state.movies.length;
		const { pageSize, currentPage, sortColumn } = this.state;
		if (count === 0) return <p>there are no movies !!!</p>;
		const { totalCount, movies } = this.getData();
		return (
			<div className="row">
				<div className="col-3">
					<ListGroup
						items={this.state.genres}
						onItemSelect={this.handleGenersSelect}
						selectedGenre={this.state.selectedGenre}
						// value="_id"
						// text="name"
					/>
				</div>
				<div className="col">
					<h1>there are {totalCount} movies ! </h1>
					<MoviesTable
						movies={movies}
						onLike={this.handleLike}
						onDelete={this.handleDelete}
						onSort={this.handleSort}
						sortColumn={sortColumn}
					/>
					<Pagination
						itemsCount={totalCount}
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
