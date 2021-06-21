import React from 'react';
import './App.css';
import Row from './Row';
import requests from "./requests";

//Initial commit
//TMDB API key: 8af54b99552c0f86e65bc9d7e6d34fdb

function App() {
  return (
    <div className="App">
      <h1>Welcome to  the Netflix-CLONE!</h1>
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
