import React, { useState, useEffect } from 'react';
import axios from './axios'; //(onze axios-file)


function Row( {title, fetchUrl}) { //{props}
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
        <div>
            <h2>{title }</h2>

            {/* container -> posters */}
        </div>
    )
}

export default Row;
