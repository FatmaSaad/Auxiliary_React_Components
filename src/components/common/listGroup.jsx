import React from "react";
const ListGroup = props => {
	const {
		items,
		value,
		text,
		onItemSelect,
		selectedGenre,
	} = props;
	return (
		<ul className="list-group">
			{items.map(item => (
				<li
					key={item[value]}
					onClick={() => onItemSelect(item)}
					className={
						item === selectedGenre
							? "list-group-item d-flex justify-content-between align-items-center active"
							: "list-group-item d-flex justify-content-between align-items-center  "
					}
				>
					{item[text]}
					 {/* <span class="badge badge-primary badge-pill">
						{filterdMovies}
					</span>  */}
				</li>
			))}
		</ul>
	);
};
ListGroup.defaultProps = {
	value: "_id",
	text: "name",
	count:"count"
};
export default ListGroup;
