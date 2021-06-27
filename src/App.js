import React from 'react';
import './App.css';
import Row from './Row';
import requests from "./requests";
import Banner from "./Banner";
import Nav from './Nav'

//Initial commit
//TMDB API key: 8af54b99552c0f86e65bc9d7e6d34fdb

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
        <Row
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow={true} //vind ik net wat fijner om het op ={true} te zetten.
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;
