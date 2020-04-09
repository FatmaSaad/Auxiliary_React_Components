import React, { Component } from "react";
class TableHeader extends Component {
	raisSort = path => {
		console.log(path);
		const sortColumn = { ...this.props.sortColumn };
		if (sortColumn.path === path)
			sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
		else {
			sortColumn.path = path;
			sortColumn.order = "asc";
		}
		this.props.onSort(sortColumn);
    };
    sortIcon=(column)=>{
if(column.path !==this.props.sortColumn.path ) return null;
if (this.props.sortColumn.order==='asc')return <i className="fa fa-sort-asc"></i>
return <i className="fa fa-sort-desc"></i> 
    };
	render() {
		return (
			<thead>
				<tr>
					{this.props.columns.map(c => (
						<th
							key={c.path || c.key}
							onClick={() => this.raisSort(c.path)}
							scope="col"
						>
							{c.label}
							{this.sortIcon(c)}
						</th>
					))}
				</tr>
			</thead>
		);
	}
}

export default TableHeader;
