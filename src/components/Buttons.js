import React from "react";

export default function Buttons(props) {
	return (
		<div id="buttons">
	        <div className="shareButtons">
	            <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${props.quoteObject.quote}`} target="_blank" rel="noopener noreferrer">Tweet</a>
	        </div>
	        <div className="actionButton">
	            <button id="new-quote" onClick={ props.generateQuote }>New Quote</button>
	        </div>
	    </div>
	)
}