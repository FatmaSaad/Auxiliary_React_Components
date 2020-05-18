import React from "react";
const MovieInfo = ({ match, history }) => {
	return (
		<div>
			<h1> {match.params.id}</h1>
            <button type="button" className="btn btn-success"
            onClick={()=>history.push('/movies')}>Save</button>

		</div>
	);
};

export default MovieInfo;
