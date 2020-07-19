import React from "react";

export default function Quote(props) {
	return (
		<>
			<div className="quote">
				<span className="quoteSymbol"></span>
				<div id="text">{props.quoteObject.quote}</div>
			</div>
			<div id="author">- {props.quoteObject.author}</div>
		</>
	)
}