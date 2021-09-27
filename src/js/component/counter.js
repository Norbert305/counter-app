import React from "react";
import PropType from "prop-types";

export const Counter = ({ seconds }) => {
	const numbers = seconds
		.toString()
		.padStart(6, "0")
		.split("");
	return (
		<div className="bigClock">
			<div>
				<i className="far fa-clock"></i>
			</div>
			<div>
				{numbers.map(value => {
					return value;
				})}
			</div>
		</div>
	);
};

Counter.propTypes = {
	seconds: PropType.number
};
