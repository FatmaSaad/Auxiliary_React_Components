import React from "react";
const ListGroup = props => {
	const { items, value, text, onItemSelect, selectedGenre } = props;
	return (
		<ul className="list-group">
			{items.map(item => (
				<li
					key={item[value]}
					onClick={() => onItemSelect(item)}
					className={
						item === selectedGenre
							? "list-group-item active"
							: "list-group-item  "
					}
				>
					{item[text]}
				</li>
			))}
		</ul>
	);
};
ListGroup.defaultProps  = {
	valu: "_id",
	text: "name",
};
export default ListGroup;
