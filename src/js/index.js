//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.jsx";

//render your react application
// ReactDOM.render(<Home />, document.querySelector("#app"));

import { Counter } from "./component/counter";

//render your react application
const start = Date.now();

setInterval(() => {
	const millis = Date.now() - start;

	const seconds = Math.floor(millis / 1000);
	ReactDOM.render(
		<Counter seconds={seconds} />,
		document.querySelector("#app")
	);
}, 1000);
