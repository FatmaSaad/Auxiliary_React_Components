import React, { Component } from "react";
class Counter extends Component {
	render() {
		const { onIncrement, onDecrement, onDelete, counter } = this.props;
		return (
			<div>
				<span className={this.badgeColor()}> {this.formateCount()} </span>
				<button
					className="btn btn-outline-success"
					onClick={() => onIncrement(counter)}
				>
				+
				</button>
				<button
					className="btn btn-outline-warning m-2"
					onClick={() => onDecrement(counter)}
					disabled={counter.value===0?'disabled':''}

				>
				-
				</button>
				<button
					onClick={() => onDelete(counter.id)}
					className="btn btn-danger btn-sm m-2"
				>
					Delete{" "}
				</button>
				{/* {this.renderUl()} */}
			</div>
		);
	}

	renderUl() {
		if (this.state.arr.length === 0) return <p>array fadya</p>;
		return (
			<ul>
				{this.state.arr.map(num => (
					<li key={num}> {1 + num}</li>
				))}
			</ul>
		);
	}

	badgeColor() {
		let classes = "badge m-2 badge-pill badge-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	}

	formateCount() {
		const { value } = this.props.counter;
		return value === 0 ? "zeroo" : value;
	}
}

export default Counter;
