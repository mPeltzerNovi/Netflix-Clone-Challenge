import React, { useState, useEffect } from 'react';
import axios from './axios'; //(onze axios-file)
import './Row.css';
import Youtube from "react-youtube";
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row( {title, fetchUrl, isLargeRow}) { //{props}
    //state toevoegen 42:01
    const [movies, setMovies] = useState([]);

    //State aanmaken die de trailerURLs ophaalt (2:49:02)
    const [trailerUrl, setTrailerUrl] = useState("");

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

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    }

    //Function handleClick() maken
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || "") //Dit is dus een promise
                .then(url => {
                    const urlParams = new URLSearchParams( new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                })
                .catch(error => console.log(error))
        }
    }

    console.log(movies);
    //Basic version finished

    return (
        <div className="row">
            <h2>{title }</h2>

            <div className="row__posters">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}

            {/* container -> posters */}
        </div>
    )
}

export default Row;
