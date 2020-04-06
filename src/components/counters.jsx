import React, { Component, Fragment } from "react";
import Counter from "./counter";
class Counters extends Component {
	state = {
		counters: [
			{ id: 1, value: 8 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 },
			{ id: 5, value: 0 },
		],
	};
	handleDelete = id => {
		// console.log("this is delete handler" + id);
		const counters = this.state.counters.filter(f => f.id !== id);
		this.setState({ counters });
	};
	handleReset = () => {
		const counters = this.state.counters.map(c => {
			c.value = 0;
			return c;
		});
		this.setState({ counters });
	};
	handleIncrement = counter => {
		console.log(counter);
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		console.log(index);
		counters[index].value++;
		this.setState({ counters });
	};
	handleDecrement = counter => {
		console.log(counter);
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		console.log(index);
		counters[index].value--;
		this.setState({ counters });
	};
	render() {
		return (
			<Fragment>
				<button
					type="button"
					className="btn btn-success "
					onClick={this.handleReset}
				>
					Reset
				</button>
				<span className="badge badge-pill badge-success m-2">
					{this.state.counters.filter(c => c.value > 0).length}
				</span>
				{this.state.counters.map(counter => (
					<Counter
						key={counter.id}
						counter={counter}
						onDelete={this.handleDelete}
						onDecrement={this.handleDecrement}
						onIncrement={this.handleIncrement}
					></Counter>
				))}
			</Fragment>
		);
	}
}

export default Counters;
