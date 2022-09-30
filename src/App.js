import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import Quote from "./Components/Quote";
import Character from "./Components/Character";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "./Redux/Action/Filter.action";

function App() {
    const dispatch = useDispatch();
    let charFilter = useSelector(
        (state) => state.FilterReducer.characterFilter
    );
    let quoteFilter = useSelector((state) => state.FilterReducer.quoteFilter);

    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand fw-bolder me-3" to="/">
                            BREAKİNG BAD
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDarkDropdown"
                            aria-controls="navbarNavDarkDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarNavDarkDropdown"
                        >
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <div
                                        className="nav-link dropdown-toggle"
                                        id="navbarDarkDropdownMenuLink"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        All
                                    </div>
                                    <ul
                                        className="dropdown-menu dropdown-menu-dark"
                                        aria-labelledby="navbarDarkDropdownMenuLink"
                                    >
                                        <li onClick={() => (charFilter = "/")}>
                                            <Link
                                                className="dropdown-item"
                                                to="/"
                                            >
                                                Characters
                                            </Link>
                                        </li>
                                        <li
                                            onClick={() =>
                                                (quoteFilter = "quotes")
                                            }
                                        >
                                            <Link
                                                className="dropdown-item"
                                                to="/Quote"
                                            >
                                                Quote
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <div
                                        className="nav-link dropdown-toggle"
                                        id="navbarDarkDropdownMenuLink"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Breaking Bad
                                    </div>
                                    <ul
                                        className="dropdown-menu dropdown-menu-dark"
                                        aria-labelledby="navbarDarkDropdownMenuLink"
                                    >
                                        <li
                                            onClick={() =>
                                                dispatch(
                                                    filterActions.BreakingCharacterFilter()
                                                )
                                            }
                                        >
                                            <Link
                                                className="dropdown-item"
                                                to="/"
                                            >
                                                Characters
                                            </Link>
                                        </li>
                                        <li
                                            onClick={() =>
                                                dispatch(
                                                    filterActions.BreakingQuoteFilter()
                                                )
                                            }
                                        >
                                            <Link
                                                className="dropdown-item"
                                                to="/Quote"
                                            >
                                                Quote
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <div
                                        className="nav-link dropdown-toggle"
                                        id="navbarDarkDropdownMenuLink"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Better Call Saul
                                    </div>
                                    <ul
                                        className="dropdown-menu dropdown-menu-dark"
                                        aria-labelledby="navbarDarkDropdownMenuLink"
                                    >
                                        <li
                                            onClick={() =>
                                                dispatch(
                                                    filterActions.BetterCharacterFilter()
                                                )
                                            }
                                        >
                                            <Link
                                                className="dropdown-item"
                                                to="/"
                                            >
                                                Characters
                                            </Link>
                                        </li>
                                        <li
                                            onClick={() =>
                                                dispatch(
                                                    filterActions.BetterQuoteFilter()
                                                )
                                            }
                                        >
                                            <Link
                                                className="dropdown-item"
                                                to="/Quote"
                                            >
                                                Quote
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Routes>
                    <Route
                        path="/Quote"
                        element={<Quote quoteFilter={quoteFilter} />}
                    ></Route>
                    <Route
                        path="/"
                        element={<Home charFilter={charFilter} />}
                    ></Route>
                    <Route
                        path="/Character/:id"
                        element={<Character />}
                    ></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
