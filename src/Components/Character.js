import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

function Character() {
    let [character, setcharacter] = useState([]);
    const { id } = useParams();
    const getData = async () => {
        const response = await axios.get(
            `https://www.breakingbadapi.com/api/characters/${id}`
        );
        setcharacter(response.data);
    };
    useEffect(() => {
        getData();
    }, []);
    console.log(id);
    return (
        <div className="container">
            <div className="row mt-5">
                {character.map((character) => {
                    return (
                        <>
                            <div>
                                <div className="row mb-5">
                                    <div className="col-md-6">
                                        <img
                                            src={character.img}
                                            alt={character.name}
                                            className="img-fluid w-75 h-75 "
                                        />
                                    </div>

                                    <div className="col-md-6 mb-5">
                                        <h4 className="text-uppercase text-black-50">
                                            {character.category}
                                        </h4>
                                        <h1 className="display-5">
                                            {character.name}
                                        </h1>
                                        {/* <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star ms-1"></i>
                    </p> */}
                                        <p className="lead">
                                            <span className="lead fw-bolder">
                                                Real Name :&nbsp;
                                            </span>
                                            {character.portrayed}
                                        </p>
                                        <p className="lead">
                                            <span className="lead fw-bolder">
                                                Birthday :&nbsp;
                                            </span>
                                            {character.birthday}
                                        </p>
                                        <p className="lead">
                                            <span className="lead fw-bolder">
                                                Status : &nbsp;
                                            </span>
                                            {character.status}
                                        </p>

                                        <p className="lead">
                                            <span className="lead fw-bolder">
                                                Nickame :&nbsp;
                                            </span>
                                            {character.nickname}
                                        </p>

                                        <NavLink
                                            to="/"
                                            className="btn btn-dark ms-2 px-3 py-2"
                                        >
                                            Go To Characters
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </div>
    );
}

export default Character;
