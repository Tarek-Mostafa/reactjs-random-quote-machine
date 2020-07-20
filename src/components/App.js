import React, { useState, useEffect } from "react";
import Quote from "./Quote";
import Buttons from "./Buttons";

export default function App() {
    const [quoteObject, setQuote ] = useState(() => {
        return {
            quote: "Remember no one can make you feel inferior without your consent.",
            author: "Eleanor Roosevelt"
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
                <Buttons quoteObject={quoteObject} generateQuote={ generateQuote } />
            </div>
        </div>
    )
}