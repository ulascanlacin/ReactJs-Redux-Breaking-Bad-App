import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Quote() {
    let [quotes, setquotes] = useState([]);
    let quoteFilter = useSelector((state) => state.FilterReducer.quoteFilter);

    const getData = async () => {
        const response = await axios.get(
            `https://www.breakingbadapi.com/api/${quoteFilter}`
        );
        setquotes(response.data);
    };
    useEffect(() => {
        getData();
    }, [quoteFilter]);

    return (
        <div className="container">
            <div className="row">
                {quotes.map((quote, index) => {
                    return (
                        <div
                            key={index}
                            className="card text-dark bg-light mb-3 m-2"
                        >
                            <div className="card-body">
                                <h5 className="card-text">{quote.quote}</h5>
                                <div className="card-header text-end position-absolute bottom-0 end-0">
                                    {quote.author}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Quote;
