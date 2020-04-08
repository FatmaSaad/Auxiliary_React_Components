import React from "react";
import Like from "./common/like";

const MoviesTable = props => {
	const { movies: ThisPageMovies, onDelete, onLike } = props;
	return (
		<table className="table table-striped">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Genra</th>
					<th scope="col">Stock</th>
					<th scope="col">Rate</th>
				</tr>
			</thead>
			<tbody>
				{ThisPageMovies.map(movie => (
					<tr key={movie._id}>
						<td>{movie.title}</td>
						<td>{movie.genre.name}</td>
						<td>{movie.numberInStock}</td>
						<td>{movie.dailyRentalRate}</td>
						<td>
							<Like
								liked={movie.liked}
								onClick={() => onLike(movie)}
							></Like>
						</td>

						<td>
							<button
								onClick={() => onDelete(movie)}
								className="btn btn-danger btn-sm m-2"
							>
								Delete{" "}
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default MoviesTable;
