import React, { useState, useEffect } from 'react';
import axios from './axios'; //(onze axios-file)
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row( {title, fetchUrl, isLargeRow}) { //{props}
    //state toevoegen 42:01
    const [movies, setMovies] = useState([]);

    //Nu een snippet of code invoeren die runt op een specific condition/variable -->useEffect
    //Goed voorbeeld dit voor verder: rond 55:00 - 58:00
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData()
        //if [], run once when row loads, and dont run again.
    }, [fetchUrl]);

    console.log(movies);

    return (
        <div className="row">
            <h2>{title }</h2>

            <div className="row__posters">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>

            {/* container -> posters */}
        </div>
    )
}

export default Row;
