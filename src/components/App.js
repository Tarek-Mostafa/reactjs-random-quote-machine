import React, { useState, useEffect } from "react";
import Quote from "./Quote";
// import Buttons from "./Buttons";

export default function App() {
    const [quoteObject, setQuote ] = useState(() => {
        return {
            quote: "",
            author: ""
        }
    });

    function generateQuote() {
        fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
        .then(res => res.json())
        .then(res => {
            const randNum = Math.floor(Math.random() * res.quotes.length)
            const quote = res.quotes[randNum];
            setQuote({
                quote: quote.quote,
                author: quote.author
            })
        })
    }

    useEffect(() => {
        generateQuote();
    }, [])

    return (
        <div className="randQuotesApp">
            <div id="quote-box">
                <Quote quoteObject={quoteObject} />
                <div id="buttons">
                    <div className="shareButtons">
                        <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${quoteObject.quote}`} target="_blank" rel="noopener noreferrer">Tweet</a>
                    </div>
                    <div className="actionButton">
                        <button id="new-quote" onClick={ generateQuote }>New Quote</button>
                    </div>
                </div>
            </div>
        </div>
    )
}