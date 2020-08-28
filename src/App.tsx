import React, { useState } from "react";
import "./App.css";
import LinearProgressBar from "./components/ProgressBar/LinearProgressBar";
import SemiCircularProgressBar from "./components/ProgressBar/SemiCircularProgressBar";
import { TextField } from "@material-ui/core";

function App() {
	const [value1, setValue1] = useState(0);
	const [value2, setValue2] = useState(0);
	const [value3, setValue3] = useState(0);
	const [value4, setValue4] = useState(0);
	const [value5, setValue5] = useState(0);
	return (
		<div className="App">
			<div style={{ width: 400, margin: "0 auto" }}>
				<h1>Cypress React Unit Test</h1>
				<h4>Enter value from 0-10</h4>
				<TextField
					style={{ marginBottom: 10 }}
					value={value1}
					onChange={(event) =>
						setValue1(
							isNaN(parseInt(event.target.value, 10))
								? 0
								: parseInt(event.target.value, 10)
						)
					}
				/>
				<LinearProgressBar value={value1} />
				<TextField
					style={{ marginBottom: 10 }}
					value={value2}
					onChange={(event) =>
						setValue2(
							isNaN(parseInt(event.target.value, 10))
								? 0
								: parseInt(event.target.value, 10)
						)
					}
				/>
				<LinearProgressBar value={value2} />
				<TextField
					style={{ marginBottom: 10 }}
					value={value3}
					onChange={(event) =>
						setValue3(
							isNaN(parseInt(event.target.value, 10))
								? 0
								: parseInt(event.target.value, 10)
						)
					}
				/>
				<LinearProgressBar value={value3} />
				<h4>Enter value from 0-100</h4>
				<TextField
					style={{ marginBottom: 10 }}
					value={value4}
					onChange={(event) =>
						setValue4(
							isNaN(parseInt(event.target.value, 10))
								? 0
								: parseInt(event.target.value, 10)
						)
					}
				/>
				<SemiCircularProgressBar value={value4} />
				<TextField
					style={{ marginBottom: 10 }}
					value={value5}
					onChange={(event) =>
						setValue5(
							isNaN(parseInt(event.target.value, 10))
								? 0
								: parseInt(event.target.value, 10)
						)
					}
				/>
				<SemiCircularProgressBar value={value5} />
			</div>
		</div>
	);
}

export default App;
