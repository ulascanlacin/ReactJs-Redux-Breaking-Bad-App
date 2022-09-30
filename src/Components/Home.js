import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Home() {
    let [characters, setcharacters] = useState([]);
    let charFilter = useSelector(
        (state) => state.FilterReducer.characterFilter
    );

    const getData = async () => {
        const response = await axios.get(
            `https://www.breakingbadapi.com/api/characters${charFilter}`
        );
        setcharacters(response.data);
    };
    useEffect(() => {
        getData();
    }, [charFilter]);

    return (
        <div className="container">
            <div className="row mt-5">
                {characters.map((character, index) => {
                    return (
                        <div
                            className="col-sm-10 col-md-6 col-lg-4 col-xl-3 mb-4 mycard"
                            key={index}
                        >
                            <div
                                className="card h-100 text-center p-4 "
                                key={character.id}
                            >
                                <img
                                    src={character.img}
                                    className="card-img-top "
                                    alt={character.name}
                                    height="250px"
                                />
                                <div className="card-body">
                                    <h5 className="card-title mb-0">
                                        {character.name}
                                    </h5>
                                    <p className="card-text lead">
                                        {character.nickname}
                                    </p>
                                    <p className="card-text lead fw-bold">
                                        {character.category}
                                    </p>
                                    <NavLink
                                        to={`/Character/${character.char_id}`}
                                        className="btn btn-outline-dark"
                                    >
                                        Details
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;
